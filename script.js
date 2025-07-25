// Scroll Progress Bar Logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById("scroll-indicator");
  progressBar.style.height = `${scrollPercent}%`;
});

// Loading animation
const letters = document.querySelectorAll(".loading-text span");

// Animate each letter with stagger
gsap.to(letters, {
  opacity: 1,
  duration: 1.2,
  stagger: 0.15,
  onUpdate: function () {
    letters.forEach((el, i) => {
      gsap.to(el, {
        color: "#ffffff",
        duration: 0.2,
        delay: i * 0.15,
      });
      gsap.to(el, {
        color: "rgba(255,255,255,0.1)",
        duration: 0.2,
        delay: i * 0.15 + 0.4,
      });
      gsap.to(el.querySelector("::after"), {
        opacity: 1,
        duration: 0.2,
        delay: i * 0.15,
      });
    });
  },
  onComplete: () => {
    gsap.to("#loading", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        document.getElementById("loading").style.display = "none";
      },
    });
  },
});

// Animation for Hero Text
gsap.from(".hero-left", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero-right", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.3,
});

gsap.utils.toArray(".journey-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: 0.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    delay: index * 0.1,
  });
});

// // HERO SECTION PARTICLE

tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 25,
      density: { enable: true, value_area: 800 },
    },
    shape: {
      type: "image",
      image: {
        src: "/assets/bug-svgrepo-com.svg", // Bug icon
        width: 30,
        height: 30,
      },
    },
    size: {
      value: 15,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      out_mode: "out",
    },
  },
  retina_detect: true,
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 85%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out",
});

gsap.from("#about-img", {
  scrollTrigger: {
    trigger: "#about-img",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  x: -100,
  duration: 0.4,
  ease: "power3.out",
});

gsap.from("#about-text", {
  scrollTrigger: {
    trigger: "#about-text",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  y: 50,
  duration: 0.4,
  ease: "power3.out",
  delay: 0.2,
});

gsap.from("#techstack h2", {
  scrollTrigger: {
    trigger: "#techstack",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  y: -40,
  duration: 1.2,
  ease: "power3.out",
});

gsap.utils.toArray("#techstack .group").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.1,
  });
});

gsap.utils.toArray(".tech-category").forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.utils.toArray(".reveal-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });
});

// Up coming projects

gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: "#upcoming-projects",
      start: "top 85%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.15,
  });
});

// Animated Download Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const downloadInput = document.querySelector(
    ".download-label .download-input"
  );
  const downloadLink = document.querySelector("a[download]");

  if (downloadInput && downloadLink) {
    downloadInput.addEventListener("change", function () {
      if (this.checked) {
        // Trigger the download after animation starts
        setTimeout(() => {
          // Create a temporary link to trigger download
          const tempLink = document.createElement("a");
          tempLink.href = downloadLink.href;
          tempLink.download = downloadLink.download || "resume.pdf";
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);

          // Reset the checkbox after animation completes
          setTimeout(() => {
            this.checked = false;
          }, 4000); // Reset after animation completes
        }, 500); // Small delay to let animation start
      }
    });
  }
});

// Contact Form Functionality
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  const submitLoading = document.getElementById("submitLoading");
  const formMessage = document.getElementById("formMessage");
  const messageText = document.getElementById("messageText");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Show loading state
      submitBtn.disabled = true;
      submitText.classList.add("hidden");
      submitLoading.classList.remove("hidden");

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      try {
        // Option 1: Using Formspree (you need to create your own endpoint)
        // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
        const response = await fetch("https://formspree.io/f/mldlgbwv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          showMessage(
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
            "success"
          );
          contactForm.reset();
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);

        // Fallback: Send email directly (this will open user's email client)
        const emailSubject = encodeURIComponent(
          `Portfolio Contact: ${data.subject}`
        );
        const emailBody = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
        `);

        const mailtoLink = `mailto:sakialaminwork@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        showMessage(
          `Form submission failed. <a href="${mailtoLink}" class="underline">Click here to send email directly</a> or try again later.`,
          "error"
        );
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.classList.remove("hidden");
        submitLoading.classList.add("hidden");
      }
    });
  }

  function showMessage(text, type) {
    messageText.innerHTML = text;
    formMessage.className = `mt-4 p-4 rounded-lg ${
      type === "success"
        ? "bg-green-100 text-green-700 border border-green-200"
        : "bg-red-100 text-red-700 border border-red-200"
    }`;
    formMessage.classList.remove("hidden");

    // Auto-hide message after 8 seconds
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 8000);
  }
});

// Performance Optimizations - Lazy Loading
document.addEventListener("DOMContentLoaded", function () {
  // Lazy loading for images
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });

  // Preload critical images
  const criticalImages = ["./assets/portfolio ss.png", "./assets/cursor.png"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });

  // Optimize scroll performance
  let ticking = false;

  function updateScrollIndicator() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById("scroll-indicator");
    if (progressBar) {
      progressBar.style.height = `${scrollPercent}%`;
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollIndicator);
      ticking = true;
    }
  });

  // Service Worker registration for PWA features
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
});

// Project Hover
document.querySelectorAll(".project-card").forEach((card) => {
  const imageContainer = card.querySelector(".group");
  const videoWrapper = card.querySelector(".floating-video");
  const video = videoWrapper.querySelector("video");

  let hideTimeout;

  imageContainer.addEventListener("mousemove", (e) => {
    clearTimeout(hideTimeout);

    const rect = imageContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const videoWidth = videoWrapper.offsetWidth;
    const videoHeight = videoWrapper.offsetHeight;

    let left = mouseX + 20;
    let top = mouseY + 20;

    // Auto flip horizontally
    if (mouseX + videoWidth + 20 > rect.width) {
      left = mouseX - videoWidth - 20;
    }

    // Auto flip vertically
    if (mouseY + videoHeight + 20 > rect.height) {
      top = mouseY - videoHeight - 20;
    }

    // Apply position
    videoWrapper.style.left = `${left}px`;
    videoWrapper.style.top = `${top}px`;

    // Fade in and apply 3D effect
    videoWrapper.style.opacity = "1";
    videoWrapper.style.transform = "scale(1) rotate3d(1, 1, 0, 3deg)";

    // Play from start if paused
    if (video.paused) {
      video.currentTime = 0;
      video.play();
    }
  });

  imageContainer.addEventListener("mouseleave", () => {
    // Smoothly fade out and scale down
    videoWrapper.style.opacity = "0";
    videoWrapper.style.transform = "scale(0.9) rotate3d(0, 0, 0, 0deg)";

    hideTimeout = setTimeout(() => {
      video.pause();
    }, 500);
  });
});

// GitHub API Integration
document.addEventListener("DOMContentLoaded", async function () {
  const activityContainer = document.getElementById("githubActivity");
  const languagesContainer = document.getElementById("githubLanguages");

  try {
    const res = await fetch("/.netlify/functions/github");
    if (!res.ok) throw new Error("Failed to fetch GitHub data");

    const data = await res.json();

    // Update stats
    document.getElementById("githubRepos").textContent = data.public_repos;
    document.getElementById("githubStars").textContent = data.total_stars;
    document.getElementById("githubFollowers").textContent = data.followers;
    document.getElementById("githubCommits").textContent = data.total_commits;

    // Languages stats
    const languageStats = {};
    data.repos_data.forEach((repo) => {
      if (repo.language) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
      }
    });

    const sortedLanguages = Object.entries(languageStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6);

    languagesContainer.innerHTML = "";
    sortedLanguages.forEach(([lang, count]) => {
      const langCard = document.createElement("div");
      langCard.className =
        "bg-[#111] p-4 rounded-xl border border-gray-800 text-center hover:border-[#1DCD9F] transition-all duration-300";
      langCard.innerHTML = `
        <div class="text-2xl font-bold text-[#1DCD9F] mb-2">${lang}</div>
        <div class="text-gray-400 text-sm">${count} repositories</div>
      `;
      languagesContainer.appendChild(langCard);
    });

    // Load recent activity
    loadGitHubActivity(data.recent_activity);
  } catch (err) {
    console.error("GitHub API failed", err);
    activityContainer.innerHTML = `
      <p class="text-gray-400 text-center py-4">Failed to load GitHub data.</p>
    `;
  }

  function loadGitHubActivity(events) {
    activityContainer.innerHTML = "";

    if (!events || events.length === 0) {
      activityContainer.innerHTML = `
        <p class="text-gray-400 text-center py-4">No recent activity found.</p>
      `;
      return;
    }

    events.forEach((event) => {
      const item = document.createElement("div");
      item.className =
        "flex items-center space-x-4 p-4 bg-[#0a0a0a] rounded-lg border border-gray-800";

      const eventType = event.type;
      const repoName = event.repo?.name || "Unknown Repo";
      const date = new Date(event.created_at).toLocaleDateString();

      let icon, text;
      switch (eventType) {
        case "PushEvent":
          icon = "fas fa-code";
          text = `Pushed to ${repoName}`;
          break;
        case "CreateEvent":
          icon = "fas fa-plus";
          text = `Created ${repoName}`;
          break;
        case "ForkEvent":
          icon = "fas fa-code-branch";
          text = `Forked ${repoName}`;
          break;
        case "WatchEvent":
          icon = "fas fa-star";
          text = `Starred ${repoName}`;
          break;
        default:
          icon = "fas fa-circle";
          text = `Activity in ${repoName}`;
      }

      item.innerHTML = `
        <div class="w-10 h-10 bg-[#1DCD9F] rounded-full flex items-center justify-center">
          <i class="${icon} text-white"></i>
        </div>
        <div class="flex-1">
          <p class="text-white font-medium">${text}</p>
          <p class="text-gray-400 text-sm">${date}</p>
        </div>
        <a href="https://github.com/${repoName}" target="_blank" class="text-[#1DCD9F] hover:text-[#17b890]">
          <i class="fas fa-external-link-alt"></i>
        </a>
      `;

      activityContainer.appendChild(item);
    });
  }
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
