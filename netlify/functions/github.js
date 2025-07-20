// node-fetch workaround for ES modules
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
    // Fetch user and repos data
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos`, { headers }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    // ✅ Validate repos is array
    if (!Array.isArray(repos)) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Invalid repo data received",
          details: repos,
        }),
      };
    }

    // ⭐ Total stars
    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );

    // 📆 Last 30 days commits
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:${username}+committer-date:>${
        thirtyDaysAgo.toISOString().split("T")[0]
      }`,
      {
        headers: {
          ...headers,
          Accept: "application/vnd.github.cloak-preview", // required for commits search
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
        total_commits: commits.total_count,
        activity_url: `https://api.github.com/users/${username}/events`,
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
