# Portfolio Customization Guide

This guide will help you customize the portfolio with your personal information from your resume.

## 📋 Checklist

Use this checklist to ensure you've updated all necessary information:

### Personal Information
- [ ] Update name in `Hero.jsx`
- [ ] Update professional title in `Hero.jsx`
- [ ] Update bio/summary in `About.jsx`
- [ ] Update contact information in `Contact.jsx` and `Navbar.jsx`
- [ ] Add your social media links (GitHub, LinkedIn, etc.)

### Work Experience
- [ ] Add all job positions in `Experience.jsx`
- [ ] Include company names and dates
- [ ] Add job descriptions and achievements
- [ ] List technologies used at each position

### Skills
- [ ] Update frontend skills in `Skills.jsx`
- [ ] Update backend skills
- [ ] Update database skills
- [ ] Update DevOps/tools skills
- [ ] Adjust skill levels (percentage)
- [ ] Add additional skills in the "Other Skills" section

### Projects
- [ ] Add your projects in `Projects.jsx`
- [ ] Include project descriptions
- [ ] Add GitHub repository links
- [ ] Add live demo links (if available)
- [ ] Update project images (use your own screenshots)
- [ ] Add technologies/tags for each project

### Resume PDF
- [ ] Add your resume PDF to the `public/` folder
- [ ] Name it `resume.pdf` or update the link in `Hero.jsx`

### Site Metadata
- [ ] Update page title in `index.html`
- [ ] Update meta description
- [ ] Update Open Graph metadata
- [ ] Update Twitter card metadata

### Deployment
- [ ] Update repository name in `vite.config.js` (base URL)
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify deployment workflow runs successfully

## 🔧 Quick Reference: Where to Update What

### Name & Title
**File:** `src/components/Hero.jsx`
```jsx
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Your Professional Title</p>
```

### Professional Summary
**File:** `src/components/Hero.jsx`
```jsx
<p className="text-lg">
  Your professional summary here...
</p>
```

### About Me
**File:** `src/components/About.jsx`
```jsx
<div className="space-y-4">
  <p>Your bio paragraph 1...</p>
  <p>Your bio paragraph 2...</p>
</div>
```

### Contact Info
**File:** `src/components/Contact.jsx`
```jsx
const contactInfo = [
  { title: 'Email', value: 'your.email@example.com', ... },
  { title: 'Phone', value: '+1 (123) 456-7890', ... },
  { title: 'Location', value: 'Your City, Country', ... },
];
```

### Social Links
**File:** `src/components/Navbar.jsx` and `Hero.jsx`
```jsx
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
```

### Work Experience
**File:** `src/components/Experience.jsx`
```jsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Start Year - End Year',
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech1', 'Tech2'],
  },
  // Add more experiences...
];
```

### Skills
**File:** `src/components/Skills.jsx`
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 }, // Adjust level 0-100
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

### Projects
**File:** `src/components/Projects.jsx`
```jsx
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: 'URL to project image',
    tags: ['React', 'Node.js'],
    category: 'Full-Stack',
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    highlights: ['Feature 1', 'Feature 2'],
  },
  // Add more projects...
];
```

## 🎨 Customizing Colors

### Primary Color
**File:** `tailwind.config.js`
```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    // ... adjust colors
    900: '#0c4a6e',  // Darkest
  },
}
```

**Color Palette Generators:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

### Font Families
**File:** `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['Your Sans Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'system-ui', 'sans-serif'],
}
```

Update the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 📸 Adding Your Own Images

### Project Images
1. Add images to `public/images/` folder
2. Update image paths in `Projects.jsx`:
```jsx
image: '/images/project-1.png',
```

### Profile Photo (Optional)
Add to `About.jsx`:
```jsx
<img src="/images/profile.jpg" alt="Your Name" />
```

## 🚀 Testing Before Deployment

1. **Run locally:**
   ```bash
   npm run dev
   ```

2. **Test build:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Check all links:**
   - Navigation works
   - Social media links are correct
   - Resume downloads properly
   - External project links work

4. **Test responsiveness:**
   - Desktop (1920px, 1366px)
   - Tablet (768px)
   - Mobile (375px, 414px)

## 📝 Content Writing Tips for Recruiters

### Professional Summary
- Keep it concise (2-3 sentences)
- Highlight your unique value
- Include years of experience
- Mention key technologies

### Work Experience
- Use action verbs (Led, Developed, Implemented)
- Quantify achievements (increased by X%, reduced by Y)
- Highlight impact and results
- Keep descriptions concise

### Project Descriptions
- What problem it solves
- Technologies used
- Your role/contribution
- Results or impact

### Skills Section
- Be honest about skill levels
- Focus on in-demand technologies
- Group related skills together
- Include both technical and soft skills

## 🎯 SEO Optimization

**File:** `index.html`

Update these meta tags:
```html
<meta name="description" content="Your professional summary for search engines" />
<meta name="keywords" content="your, key, skills, role, location" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your summary" />
```

## 🔒 Before Going Live

- [ ] Remove placeholder text
- [ ] Test all forms and interactions
- [ ] Verify all links work
- [ ] Check spelling and grammar
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Add custom domain (optional)

## 📞 Need Help?

If you encounter issues:
1. Check the main [README.md](README.md)
2. Review the component files for examples
3. Check browser console for errors
4. Verify all dependencies are installed

---

**Good luck with your job search! 🚀**
