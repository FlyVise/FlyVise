# Creative Agency Website

A modern, responsive creative agency website built with React, TypeScript, and Vite. Features stunning animations, a portfolio showcase, and an interactive contact form.

## 🚀 Features

- **Modern Design**: Beautiful gradient animations and glass morphism effects
- **Responsive Layout**: Optimized for all device sizes
- **Portfolio Showcase**: Filterable project gallery with smooth animations
- **Contact Form**: Functional contact form with validation and Formspree integration
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Accessibility**: ARIA labels and keyboard navigation support
- **TypeScript**: Full type safety throughout the application

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Formspree** - Form handling service

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/creative-agency-website.git
cd creative-agency-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

1. Update the `base` path in `vite.config.ts` to match your repository name
2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service like:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📝 Customization

### Portfolio Data
Edit `src/data/portfolioData.ts` to add your own projects.

### Contact Form
Update the Formspree endpoint in `src/components/ContactForm.tsx` with your own form ID.

### Styling
Customize colors and animations in `src/index.css` and component files.

### Content
Update text content in the component files to match your agency's information.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Pexels](https://pexels.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com)