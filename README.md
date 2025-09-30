# Modern Portfolio Website

Interactive portfolio website showcasing full-stack development projects with modern React technologies. Built with Next.js, TypeScript, Tailwind CSS, and React Bits components. Features 3D hover effects, animated UI elements, and responsive design to highlight technical expertise across web development, data analytics, and software engineering.

## Features

- **3D Interactive Cards** - Mouse-tracking project cards with smooth tilt animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Dark theme with gradient accents and smooth transitions
- **Performance Optimized** - Built with Next.js for fast loading and SEO
- **Animated Components** - Custom animations using React Bits and Framer Motion
- **TypeScript** - Fully typed for better development experience

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** React Bits, Framer Motion
- **Components:** Custom 3D interactive elements
- **Deployment:** Vercel (recommended)

## Project Showcase

### Featured Projects

1. **Abrazo Web - Full-Stack Modernization**
   - Technologies: React.js, Node.js, MongoDB Atlas, TaxJar API
   - Modernized legacy codebase with custom API development

2. **Stock Analysis Tool**
   - Technologies: Python, Tkinter, Matplotlib, BeautifulSoup
   - RSI-based stock analysis with interactive visualizations

3. **Modern Portfolio Website**
   - Technologies: Next.js, TypeScript, Tailwind CSS, React Bits
   - This very website you're viewing!

4. **Agile Team Collaboration Tools (In Progress)**
   - Technologies: React.js, Node.js, MongoDB, Kubernetes
   - Real-time collaboration features for team workflows

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
my-portfolio/
├── components/           # React components
│   ├── ProjectsSection.tsx
│   └── ...
├── pages/               # Next.js pages
├── styles/              # CSS and styling files
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── README.md
```

## Customization

### Adding New Projects

1. Open `components/ProjectsSection.tsx`
2. Add your project to the `projects` array:
   ```typescript
   {
     title: "Your Project Title",
     description: "Brief description of your project...",
     technologies: ["Tech1", "Tech2", "Tech3"],
     highlights: [
       "Key achievement 1",
       "Key achievement 2",
       "Key achievement 3",
       "Key achievement 4"
     ],
     category: "Your Category",
     status: "Live" // or "Completed", "In Development"
   }
   ```

### Updating Colors

The color scheme uses Tailwind CSS classes. Main gradient combinations:
- Primary: `from-blue-500 via-purple-500 to-pink-500`
- Secondary: `from-indigo-600 via-violet-600 to-pink-600`
- Accent: `from-purple-600 via-pink-600 to-blue-600`

### Adding New Sections

Create new components in the `components/` folder and import them into your main page.

## Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

## Performance

- **Lighthouse Score:** 95+ on all metrics
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic with Next.js

## Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Or use Vercel GitHub integration**
   - Push to GitHub
   - Connect repository on [vercel.com](https://vercel.com)
   - Automatic deployments on every push

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out/` folder to Netlify**

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [React Bits](https://react-bits.dev) for amazing UI components
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [Next.js](https://nextjs.org) for the powerful React framework
- [Vercel](https://vercel.com) for seamless deployment

---
