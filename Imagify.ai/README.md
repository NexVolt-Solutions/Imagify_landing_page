# Imagify AI - AI-Powered Wallpaper Generator

![Imagify AI Logo](./public/logo.png)

> Simplifying wallpaper creation with AI — helping you design stunning, personalized wallpapers with ease and confidence.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com/)

## 🚀 Features

- **AI-Powered Generation** - Create unique wallpapers using advanced AI technology
- **Custom Designs** - Personalize wallpapers to match your style and preferences
- **High Resolution** - Generate wallpapers in multiple resolutions for any device
- **Fast & Efficient** - Optimized performance with React 18 and Vite
- **Responsive Design** - Perfect experience on desktop, tablet, and mobile
- **SEO Optimized** - Built with best practices for search engine visibility

## 🛠️ Tech Stack

- **Framework:** React 18.3 with Vite 6.0
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Build Tool:** Vite with optimized production builds
- **Code Quality:** ESLint with accessibility plugins

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/imagify-ai.git
cd imagify-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
VITE_SITE_URL=https://www.imagifyai.com
VITE_SITE_NAME=Imagify AI
VITE_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## 📊 Performance Optimization

This project is optimized for SEO and Core Web Vitals:

- **Code Splitting:** Vendor chunks separated for better caching
- **Asset Optimization:** Images and assets optimized for web
- **Lazy Loading:** Components loaded on-demand
- **Minification:** JavaScript and CSS minified in production
- **Tree Shaking:** Unused code automatically removed

### Analyze Bundle Size

```bash
npm install -D rollup-plugin-visualizer
npm run build:analyze
```

## 🎨 Project Structure

```
imagify-ai/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── og-image.jpg     # Open Graph image (1200x630)
│   └── robots.txt       # SEO robots file
├── src/
│   ├── assets/          # Images, logos, icons
│   ├── components/      # React components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template with SEO meta tags
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── eslint.config.js     # ESLint configuration
└── package.json
```

## 🔍 SEO Features

- **Semantic HTML:** Proper heading hierarchy and ARIA labels
- **Meta Tags:** Comprehensive Open Graph and Twitter Card tags
- **Structured Data:** JSON-LD schema for search engines
- **Sitemap:** Auto-generated sitemap for crawlers
- **Robots.txt:** Optimized for search engine indexing
- **Canonical URLs:** Prevents duplicate content issues
- **Image Alt Text:** All images have descriptive alt attributes
- **Accessibility:** WCAG 2.1 AA compliant

## 🧪 Testing

Run ESLint:
```bash
npm run lint
# or
yarn lint
```

## 🌐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SITE_URL` | Production site URL | `https://www.imagifyai.com` |
| `VITE_SITE_NAME` | Site name | `Imagify AI` |
| `VITE_API_URL` | API endpoint | `https://api.imagifyai.com` |
| `VITE_GA_TRACKING_ID` | Google Analytics ID | `G-XXXXXXXXXX` |

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📞 Support

For support, email support@imagifyai.com or join our [Discord community](https://discord.gg/imagifyai).

## 🔗 Links

- **Website:** [https://www.imagifyai.com](https://www.imagifyai.com)
- **Documentation:** [https://docs.imagifyai.com](https://docs.imagifyai.com)
- **Blog:** [https://blog.imagifyai.com](https://blog.imagifyai.com)
- **Twitter:** [@imagifyai](https://twitter.com/imagifyai)

---

**Built with ❤️ using React + Vite**