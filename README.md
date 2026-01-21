# Anchal Jha - Portfolio Website

A modern, animated portfolio website for a **Graphic Designer & Video VFX Editor** built with React, Vite, and TailwindCSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.2-blue) ![Vite](https://img.shields.io/badge/Vite-7.2-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-cyan)

---

## 🎨 About This Portfolio

This is a personal portfolio showcasing **5+ years of experience** in graphic design and video VFX editing. The site highlights creative work from major media companies including **Zee News**, **NDTV**, and **Asian Contec Ltd**.

### Services Showcased
- 🖼️ **Graphic Design** - Brand identity, logos, marketing materials, print design
- 🎬 **Video Editing** - Commercials, social media content, YouTube, corporate videos
- ✨ **Motion Graphics & VFX** - Animations, intros, transitions, explainer videos
- 📱 **Social Media Content** - Engaging content for Instagram, YouTube, and more

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 7** | Build Tool & Dev Server |
| **TailwindCSS 4** | Styling |
| **Framer Motion** | Animations & Transitions |
| **Three.js + React Three Fiber** | 3D Graphics |
| **React Intersection Observer** | Scroll Animations |

---

## 📁 Project Structure

```
src/
├── App.jsx              # Main app with lazy-loaded sections
├── main.jsx             # Entry point
├── index.css            # Global styles
├── App.css              # App-specific styles
├── assets/              # Images and static files
└── components/
    ├── Navbar.jsx       # Responsive navigation
    ├── Hero.jsx         # Hero section with typewriter effect
    ├── Experience.jsx   # Work experience timeline
    ├── About.jsx        # About & services section
    ├── Projects.jsx     # Portfolio gallery with filters
    ├── Tools.jsx        # Software & skills showcase
    ├── Contact.jsx      # Contact form & social links
    └── Footer.jsx       # Footer component
```

---

## ⚡ Features

- **🚀 Lazy Loading** - Components load on demand for faster initial render
- **🎭 Smooth Animations** - Powered by Framer Motion
- **📱 Fully Responsive** - Mobile-first design
- **🎨 Modern UI** - Glassmorphism, gradients, and creative backgrounds
- **⌨️ Typewriter Effect** - Dynamic role display in hero section
- **🔍 Portfolio Filters** - Filter projects by category (Branding, Video, Motion, Print)
- **📊 Skill Progress Bars** - Visual representation of software proficiency
- **📝 Contact Form** - Ready-to-use contact form

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

### Update Personal Info
- **Name & Branding**: Edit `Navbar.jsx` and `Hero.jsx`
- **Experience**: Update the `experiences` array in `Experience.jsx`
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Skills**: Update the `skills` and `tools` arrays in `Experience.jsx` and `Tools.jsx`
- **Contact Info**: Edit `contactMethods` in `Contact.jsx`

### Color Theme
The site uses an **orange-pink-purple gradient** theme. Main colors can be adjusted in `index.css` and component files.

---

## 📧 Contact

- **Email**: anchaljha22@gmail.com
- **Location**: Delhi, India
- **Social**: Instagram, LinkedIn, YouTube

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Anchal Jha</strong>
</p>
