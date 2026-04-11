# Horizon Habitat Projet

Next.js 16 migration of Horizon Habitat Projet's WordPress/Elementor website. Modern artisan renovation company website with "Béton Doré" aesthetic design.

## Features

### ✅ Completed

- **Design System**: "Béton Doré" aesthetic with custom typography (Cormorant Garamond display + DM Sans body)
- **Layout & Components**: Full page layout with Header, Footer, and 6 main sections
- **Responsive Design**: Mobile-first approach with mobile menu drawer
- **SEO Optimization**:
  - Metadata configuration with proper title templates and descriptions
  - JSON-LD schema (LocalBusiness) for structured data
  - Sitemap generation (`/sitemap.xml`)
  - Robots.txt configuration
- **Blog System**: 
  - 10 SEO-targeted blog articles for local Île-de-France market
  - Blog listing page (`/blog`)
  - Blog detail pages with static generation (`/blog/[slug]`)
  - BlogPost metadata and rich article structure
- **Contact Form**:
  - React 19 Server Actions integration
  - Client-side form component with useActionState
  - Server-side validation with honeypot spam protection
  - Field-level error messages
  - Ready for email service integration
- **Navigation**: Sticky header with responsive mobile menu
- **Services**: Display of 6 renovation services
- **Reviews**: Static 24-review system (replaces TrustIndex widget)
- **Map Integration**: Google Maps embed with location information

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, JSON-LD
│   ├── page.tsx                # Main page assembly
│   ├── globals.css             # Tailwind v4 + design tokens
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Robots.txt rules
│   ├── actions/
│   │   └── contact.ts          # Server Action for contact form
│   └── blog/
│       ├── page.tsx            # Blog listing
│       └── [slug]/page.tsx      # Blog article detail
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navigation
│   │   └── Footer.tsx          # Footer with info & social links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── MapSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── ServiceCard.tsx
│       ├── ReviewCard.tsx
│       ├── ContactForm.tsx      # Client form with useActionState
│       └── MobileMenu.tsx       # Mobile navigation drawer
├── lib/
│   ├── reviews.ts              # 24 static reviews
│   ├── services.ts             # 6 services data
│   ├── schema.ts               # JSON-LD builders
│   ├── blog-posts.ts           # 10 blog post metadata
│   └── send-email.ts           # Email integration helpers
└── types/
    └── index.ts                # Shared TypeScript interfaces
```

## Configuration

### Environment Variables

Create a `.env.local` file to configure optional features:

```env
# Email Service (choose ONE)
# Option 1: Resend
RESEND_API_KEY=your_api_key

# Option 2: Nodemailer (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@example.com

# Option 3: SendGrid
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=noreply@example.com

# Contact email (where form submissions are sent)
CONTACT_EMAIL=contact@horizon-habitat-projet.com
```

## Email Integration

The contact form is fully functional but currently logs submissions to console. To enable email sending:

1. Choose an email service:
   - **Resend** (recommended for Next.js): https://resend.com
   - **Nodemailer** (self-hosted SMTP): https://nodemailer.com
   - **SendGrid**: https://sendgrid.com

2. Install the service package:
   ```bash
   # Resend
   npm install resend

   # Nodemailer
   npm install nodemailer

   # SendGrid
   npm install @sendgrid/mail
   ```

3. Configure environment variables (see `.env.local` above)

4. Uncomment the appropriate code block in `src/lib/send-email.ts`

5. Uncomment the email sending code in `src/app/actions/contact.ts`:
   ```typescript
   const { sendContactEmail } = await import('@/lib/send-email')
   const emailResult = await sendContactEmail(contactData)
   if (!emailResult.success) {
     return { success: false, message: emailResult.message }
   }
   ```

## Blog Articles

The site includes 10 SEO-optimized blog articles targeting local Île-de-France renovation keywords:

1. Rénovation cuisine à Argenteuil
2. Rénover une salle de bain haussmannienne
3. Couleurs de peinture pour agrandir
4. Parquet, carrelage ou vinyle
5. Mise aux normes électrique
6. Aménagement studio 25m²
7. Budget rénovation 3 pièces
8. Cuisine sur mesure vs meublée
9. Aides à la rénovation Val-d'Oise
10. Trouver un artisan de confiance

Articles are statically generated and automatically included in the sitemap.

## Design System

### Colors
- **Charcoal** (`#1C1917`): Dark backgrounds
- **Ivory** (`#F5EFE0`): Light text/backgrounds
- **Gold** (`#C9A058`): Accents, CTAs, highlights
- **Surface** (`#242220`): Card backgrounds

### Typography
- **Display**: Cormorant Garamond (300-700 weights)
- **Body**: DM Sans (variable)

Fonts are self-hosted via `next/font/google` with CSS custom properties integration.

## SEO Features

- ✅ Metadata with OpenGraph support
- ✅ JSON-LD LocalBusiness schema
- ✅ Dynamic sitemap generation
- ✅ Blog article metadata & structured data
- ✅ Semantic HTML structure
- ✅ Mobile responsive design
- ✅ Proper heading hierarchy
- ✅ Meta descriptions and keywords

## Performance

- CSS-only animations (no JavaScript overhead)
- Server Components by default (zero JS for static content)
- Lazy loading for images and iframes
- Static generation for blog pages
- Optimized font loading

## Remaining Tasks

- [ ] Image optimization with `next/image`
- [ ] Image slideshows for Hero and About sections
- [ ] Mobile CTA phone button optimization
- [ ] Testing on mobile devices (375px, 768px viewports)
- [ ] Lighthouse audit (target: Performance 90+, SEO 100)
- [ ] Production deployment setup
- [ ] Analytics integration (optional)

## Development

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint (if configured)
npm run lint

# Type check
npm run type-check
```

## Deployment

The site is optimized for Vercel:

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

Or use the Vercel Dashboard to connect your GitHub repository.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- No Internet Explorer support

## License

Proprietary - Horizon Habitat Projet
