# 🏡 Accord Housing & Care - Complete Website

A stunning, modern website built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion** animations for Accord Housing & Care - a residential foster care provider for children aged 8-18.

## 🎨 Features

✨ **Beautiful Design**
- Modern, professional gradient color scheme (Blue #0066CC, Green #00A86B, Orange #FF6B35)
- Fully responsive (mobile, tablet, desktop)
- Smooth Framer Motion animations
- Glass-morphism effects

🚀 **Performance**
- Next.js 14 App Router (latest features)
- Optimized build and deployment
- Fast load times with image optimization
- Server-side rendering ready

📱 **User Experience**
- Sticky navigation bar
- Smooth scroll behavior
- Interactive forms
- Mobile-friendly menu
- Accessibility-first approach

🔧 **Components Included**
- Navbar (sticky, responsive)
- Hero section with animations
- Services showcase (6 service cards)
- About section with statistics
- Our Carers/Team section
- Testimonials carousel
- Contact form with validation
- Footer with social links

## 📋 Quick Start

### Prerequisites
- Node.js 16+ (recommended: 18+)
- npm or yarn
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/mohsinphysicist1/accord-housing-care.git
cd accord-housing-care
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website live!

## 🏗️ Project Structure

```
accord-housing-care/
├── app/
│   ├── page.tsx              # Main home page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles & animations
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services showcase
│   ├── About.tsx             # About section
│   ├── Carers.tsx            # Team/Carers section
│   ├── Testimonials.tsx      # Customer testimonials
│   ├── CTA.tsx               # Call-to-action & contact form
│   └── Footer.tsx            # Footer with links
├── public/                   # Static assets (images, favicon)
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── next.config.js            # Next.js config
└── README.md                 # This file
```

## 📦 Dependencies

### Production
- **next**: ^14.0.0 - React framework
- **react**: ^18.2.0 - UI library
- **framer-motion**: ^10.16.0 - Animations
- **lucide-react**: ^0.263.0 - Icon library

### Development
- **tailwindcss**: ^3.3.0 - Utility-first CSS
- **typescript**: ^5.2.2 - Type safety
- **postcss**: ^8.4.31 - CSS processing
- **autoprefixer**: ^10.4.16 - Vendor prefixes

## 🎨 Customization

### 1. Update Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#0066CC',      // Blue
      secondary: '#00A86B',    // Green
      accent: '#FF6B35',       // Orange
    },
  },
}
```

### 2. Update Content

Edit component files in `/components` to update:
- Service descriptions
- About section content
- Team information
- Testimonials
- Contact details

### 3. Add Images

1. Add images to `/public` folder
2. Import and use in components:
```tsx
<Image src="/your-image.jpg" alt="Description" width={400} height={300} />
```

### 4. Update Contact Information

Edit `components/CTA.tsx` and `components/Footer.tsx`:
```tsx
Phone: +44 (0) 1234 567890
Email: info@accordhousing.co.uk
Address: Accord Housing & Care, UK
```

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free & Easy)

1. **Push to GitHub** (already done ✓)

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "New Project"**

4. **Import your GitHub repository**
   - Select `accord-housing-care`
   - Click "Import"

5. **Configure (usually auto-detected)**
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`

6. **Deploy!**
   - Click "Deploy"
   - Your site goes live in ~2 minutes

7. **Get your live URL**
   - Format: `https://[your-project-name].vercel.app`

### Deploy to Other Platforms

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

**GitHub Pages:**
```bash
npm run build
npm run export
# Push to gh-pages branch
```

## 🔧 Build for Production

```bash
npm run build
npm run start
```

This creates an optimized production build in `.next/`

## 📝 Environment Variables

Create `.env.local` if needed:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## 🎯 Website Pages/Sections

### Home Page (/)
- **Hero**: Eye-catching introduction with CTA buttons
- **Services**: 6 service cards with icons and descriptions
- **About**: Company mission and values
- **Carers**: Team information and qualifications
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact form and information
- **Footer**: Links and social media

### Pages to Add Later
- `/about` - Detailed about page
- `/services` - Detailed service pages
- `/contact` - Dedicated contact page
- `/testimonials` - Full testimonials page
- `/careers` - Careers/join our team page

## 🎬 Animations & Effects

- ✨ Fade-in animations on scroll
- 🎯 Hover effects on cards and buttons
- 🔄 Smooth page transitions
- 🎪 Floating animation on hero elements
- 📊 Staggered animations on lists

All powered by **Framer Motion** with smooth transitions.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive!

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on buttons
- Color contrast compliance
- Keyboard navigation support
- Mobile touch-friendly sizes

## 🔐 Performance

- **Lighthouse Score Target**: 90+
- Optimized images
- Code splitting
- CSS minification
- JavaScript minification

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Build fails?
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### Styles not loading?
```bash
# Rebuild Tailwind
npm run build
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 📞 Support

**Contact Information:**
- Phone: +44 (0) 1234 567890
- Email: info@accordhousing.co.uk
- Website: accordhousingandcare.co.uk

## 📄 License

MIT License - Feel free to use this project

## 🙌 Credits

Built with ❤️ for Accord Housing & Care

---

## 🚀 Next Steps

1. ✅ **Setup Complete** - Website structure is ready
2. 📸 **Add Images** - Upload photos to `/public`
3. ✏️ **Update Content** - Customize text and branding
4. 🚀 **Deploy to Vercel** - Go live in minutes
5. 🔗 **Set Custom Domain** - Connect your domain

## 🎉 You're All Set!

Your stunning Accord Housing & Care website is ready to go live!

Questions? Check the repository issues or contact support.

Happy coding! 🚀
