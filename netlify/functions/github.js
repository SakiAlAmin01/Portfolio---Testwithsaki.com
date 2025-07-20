// node-fetch workaround for CommonJS (Netlify-compatible)
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.handler = async function () {
  const username = "SakiAlAmin01";
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json",
  };

  try {
    // Fetch user, repos, and activity in parallel
    const [userRes, reposRes, activityRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos`, { headers }),
      fetch(`https://api.github.com/users/${username}/events`, { headers }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const activity = await activityRes.json();

    // Total stars
    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );

    // Last 30 days commits
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:${username}+committer-date:>${
        thirtyDaysAgo.toISOString().split("T")[0]
      }`,
      {
        headers: {
          ...headers,
          Accept: "application/vnd.github.cloak-preview", // Required for commit search
        },
      }
    );

    const commits = await commitsRes.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        public_repos: user.public_repos,
        followers: user.followers,
        total_stars: totalStars,
        total_commits: commits.total_count || 0,
        recent_activity: activity.slice(0, 5),
        repos_data: repos,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to fetch GitHub data",
        details: err.message,
      }),
    };
  }
};
