# Professional Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, clean design, and optimized for recruiter attention.

![Portfolio Preview](https://via.placeholder.com/1200x600/0ea5e9/ffffff?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Easy Customization**: Simple configuration to add your own content
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/spec-kit.git
cd spec-kit/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📝 Customization

### 1. Update Personal Information

Edit the following files to add your information:

#### `src/components/Hero.jsx`
- Name and title
- Professional summary
- Social media links

#### `src/components/About.jsx`
- Bio and about me section
- Highlights and values

#### `src/components/Experience.jsx`
- Work history
- Job descriptions
- Company information

#### `src/components/Skills.jsx`
- Technical skills
- Skill levels
- Frameworks and tools

#### `src/components/Projects.jsx`
- Project showcase
- GitHub links
- Live demo links

#### `src/components/Contact.jsx`
- Contact information
- Email, phone, location
- Social media links

### 2. Update Site Metadata

Edit `index.html`:
- Page title
- Meta descriptions
- Open Graph tags

### 3. Change Theme Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### 4. Add Resume PDF

Place your resume PDF in the `public` folder as `resume.pdf`, or update the link in `Hero.jsx`:
```jsx
<a href="/your-resume.pdf" download>
  Download Resume
</a>
```

## 🌐 Deployment to GitHub Pages

### Option 1: Automated Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Steps:**

1. Go to your repository **Settings** → **Pages**
2. Under **Build and deployment**, select:
   - Source: **GitHub Actions**
3. Push your changes to the `main` branch:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

4. The workflow will automatically build and deploy your site
5. Your portfolio will be available at: `https://yourusername.github.io/spec-kit/`

### Option 2: Manual Deployment

1. Update `vite.config.js` with your repository name:
```javascript
export default defineConfig({
  base: '/spec-kit/', // Change to your repo name
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About me section
│   │   ├── Experience.jsx   # Work experience
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Project portfolio
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── resume.pdf           # Your resume (add this)
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **GitHub Pages** - Hosting

## 🎨 Design Features

- **Gradient text effects** for headings
- **Smooth scroll animations** with Framer Motion
- **Intersection Observer** for scroll-triggered animations
- **Responsive grid layouts** for all screen sizes
- **Hover effects** on interactive elements
- **Professional color scheme** optimized for readability
- **Glass morphism** effects for modern UI

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For questions or feedback, please reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Built with ❤️ using React and Tailwind CSS**

## 🎯 Tips for Recruiters

This portfolio is designed to showcase:
- ✅ Modern web development skills (React, Tailwind)
- ✅ Clean, maintainable code structure
- ✅ Responsive design capabilities
- ✅ Attention to UX/UI details
- ✅ Professional presentation

All code is available on GitHub for review. Feel free to explore the commit history and code quality!
