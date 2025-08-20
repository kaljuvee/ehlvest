# Jaan Ehlvest - Chess Grandmaster Landing Page

A modern, responsive landing page for Estonian-American Chess Grandmaster Jaan Ehlvest, featuring his biography, achievements, coaching services, and publications.

## 🌐 Live Demo

**Deployed Site**: [https://kermyoyc.manus.space](https://kermyoyc.manus.space)

## 🏆 About Jaan Ehlvest

- **Grandmaster since 1987**
- **Peak World Ranking**: #4
- **Peak FIDE Rating**: 2660
- **Master's Degree in Psychology**
- **Author and Chess Coach**

## 🚀 Features

- **Modern Responsive Design**: Optimized for all devices
- **Professional Photography**: High-quality images of Jaan Ehlvest
- **Interactive Timeline**: Visual career progression
- **Psychology-Focused Coaching**: Unique approach combining chess and psychology
- **Clean Navigation**: Inspired by kasparov.com but with contemporary design
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technology Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **JavaScript (JSX)** - Programming language

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Main application component
│   ├── App.css         # Global styles
│   ├── index.css       # Tailwind imports
│   └── main.jsx        # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Deployment on Render

### Prerequisites
- GitHub account
- Render account ([render.com](https://render.com))

### Step-by-Step Deployment

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/kaljuvee/ehlvest.git
   cd ehlvest
   ```

2. **Create a New Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the Service**
   - **Name**: `jaan-ehlvest-landing` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose your preferred region
   - **Branch**: `main`
   - **Root Directory**: Leave empty (uses project root)

4. **Build & Deploy Settings**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Publish Directory**: `dist`

5. **Environment Variables** (Optional)
   - No environment variables required for this static site

6. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your site
   - Your site will be available at `https://your-service-name.onrender.com`

### Alternative Start Commands

If you prefer different hosting approaches:

**Option 1: Using Vite Preview (Recommended)**
```bash
npm run preview
```

**Option 2: Using a Static Server**
```bash
npm install -g serve && serve -s dist
```

**Option 3: Using Express Server**
Create a simple `server.js`:
```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## 💻 Local Development

### Installation
```bash
# Clone the repository
git clone https://github.com/kaljuvee/ehlvest.git
cd ehlvest

# Install dependencies
npm install
```

### Development Server
```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📱 Sections Overview

1. **Hero Section**: Professional photo and introduction
2. **About**: Biography and career statistics
3. **Timeline**: Visual career progression
4. **Coaching**: Services and philosophy
5. **Achievements**: Tournament victories and rankings
6. **Books**: Publications and writing
7. **Contact**: Coaching inquiries

## 🎨 Design Philosophy

The design is inspired by kasparov.com but modernized with:
- Clean, minimalist layout
- Better mobile responsiveness
- Modern typography and spacing
- Card-based content organization
- Smooth animations and transitions
- Professional color scheme

## 📧 Contact

For coaching inquiries, Jaan Ehlvest is available through the Chess.com coaching platform.

## 📄 License

This project is created for educational and promotional purposes for Jaan Ehlvest's chess coaching services.

---

**Built with ❤️ for the chess community**

