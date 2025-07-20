# 💼 Saki's Portfolio Website

A modern, responsive, and animated showcase of my full-stack web development journey.  
Built using **HTML**, **CSS**, **JavaScript**, **Bootstrap**, **GSAP**, and **GitHub API**, powered by an interactive animated background.

🔗 [Live Demo](https://github.com/SakiAlAmin01/Portfolio---Testwithsaki.com.git)

---

## 🚀 Features

### ✨ Highlights
- 📱 Fully **responsive** layout across all screen sizes
- 🎬 Smooth GSAP animations and scroll effects
- 🖱️ Custom cursor with glowing button hover effects
- 📄 Animated **Resume Download** button
- 🌙 Sleek **Dark Theme** with soft transitions

### 🐙 GitHub Integration
- 📊 **Live GitHub stats**, top languages & repo info
- 🕒 Displays **recent activity**
- 🔐 Token-secured API access via Netlify Functions (optional)
- 🔌 Offline fallback for better performance

### 📧 Contact Form
- Integrated with **Formspree**
- ✅ Form validation and error handling
- 🔄 Real-time loading and success messages

### ⚡ Performance Optimization
- 💤 Lazy loading for images
- 🚀 Optimized animations using `will-change` & `contain`
- 🛰️ **Offline Access** with Service Worker
- 📲 **PWA Ready** (installable as mobile app)

---

## 🛠️ Tech Stack

- **HTML5** – Semantic markup  
- **CSS3** – Tailwind + Bootstrap  
- **JavaScript** – DOM & API integrations  
- **GSAP** – Scroll animations  
- **Particles.js** – Background animation  
- **Formspree** – Form submission handler  
- **GitHub API** – Stats, commits, activity  
- **Service Worker** – Offline caching  

---

## 📦 Project Structure

```

Portfolio/
├── index.html             # Main HTML file
├── styles.css             # All custom styles
├── script.js              # JS logic + GitHub API fetch
├── manifest.json          # PWA configuration
├── sw\.js                  # Service Worker for offline
├── netlify/functions/     # Serverless GitHub function (optional)
├── assets/                # All static assets (images/icons)
└── README.md              # Project documentation

````

---

## 🔧 Configuration Instructions

### 🔹 GitHub Stats Setup
In `script.js`, change the username:
```js
const username = "YOUR_GITHUB_USERNAME";
````

If you're using token-protected GitHub data via Netlify function:

* Create `.env` file (not pushed to GitHub):

```env
GITHUB_TOKEN=your_github_token_here
```

* In `netlify/functions/github.js`, the function uses that token via `process.env.GITHUB_TOKEN`

### 🔹 Formspree Setup

Update the form endpoint in `script.js`:

```js
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

---

## 📱 PWA Features

* ✅ **Installable** on mobile/desktop
* 📴 Offline access via cache-first strategy
* ⚡ Super fast page load with animation preloading
* 📲 App-like native experience

---

## 🧪 Performance Snapshot

* 📊 Lighthouse Score: **95+**
* ⚡ First Contentful Paint: **< 1.5s**
* 🖼️ Largest Contentful Paint: **< 2.5s**
* 🔧 Cumulative Layout Shift: **< 0.1**

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/SakiAlAmin01/Portfolio---Testwithsaki.com.git
cd Portfolio

# 2. Option A: Run with Python (for simple static server)
python -m http.server 8000

# 3. Option B: Run with Node.js
npx serve .

# 4. Option C: Just open index.html in browser
```

---

## ✏️ How to Customize

* 📝 Edit your content in `index.html`
* 🎨 Modify styles in `styles.css`
* 🧠 Update logic or API configs in `script.js`
* 📂 Add or replace images in `assets/`
* 🐙 Change GitHub username to fetch your real data

---

## 🤝 Contributing

Pull requests, feedback, and feature suggestions are most welcome!
Feel free to fork, modify, or share this project.

---

## 📬 Contact Me

* 📧 Email: [sakialaminwork@gmail.com](mailto:sakialaminwork@gmail.com)
* 💼 LinkedIn: [Saki Al Amin](https://www.linkedin.com/in/sakialamin2000)
* 🐙 GitHub: [@SakiAlAmin01](https://github.com/SakiAlAmin01)
