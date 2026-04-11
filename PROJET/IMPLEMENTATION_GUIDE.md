# Guide d'Implémentation - Horizon Habitat Projet

Ce guide détaille les étapes restantes pour compléter le site.

## 1. Images et Slideshow

### Configuration des images

Le site utilise `next/image` pour optimiser automatiquement les images. Voici comment intégrer vos photos:

#### 1.1 Images statiques

Placez les images dans `/public/images/`:

```
public/
├── images/
│   ├── hero/
│   │   ├── before-1.jpg
│   │   ├── before-2.jpg
│   │   └── ...
│   ├── about/
│   │   ├── process-1.jpg
│   │   ├── process-2.jpg
│   │   └── ...
│   └── projects/
│       ├── kitchen-1.jpg
│       ├── bathroom-1.jpg
│       └── ...
```

#### 1.2 Configuration dans le code

**Hero Section** (src/components/sections/HeroSection.tsx):

```typescript
import { ImageSlideshow } from '@/components/ui/ImageSlideshow'

export function HeroSection() {
  const heroImages = [
    { src: '/images/hero/before-1.jpg', alt: 'Rénovation cuisine Argenteuil' },
    { src: '/images/hero/before-2.jpg', alt: 'Rénovation salle de bain' },
    // ...
  ]

  return (
    <section className="relative h-screen bg-charcoal">
      <ImageSlideshow 
        images={heroImages}
        autoPlay={true}
        interval={6000}
        className="absolute inset-0 z-0 opacity-40"
      />
      {/* Rest of hero content */}
    </section>
  )
}
```

**About Section** (src/components/sections/AboutSection.tsx):

```typescript
const aboutImages = [
  { src: '/images/about/process-1.jpg', alt: 'Consultation client' },
  { src: '/images/about/process-2.jpg', alt: 'Réalisation du projet' },
  // ...
]

return (
  <ImageSlideshow 
    images={aboutImages}
    className="lg:h-96 rounded-sm"
  />
)
```

## 2. Email Service Configuration

### Étape 1: Choisir un service email

**Resend** (Recommandé pour Next.js):
- URL: https://resend.com
- Avantages: Conçu pour Next.js, facile à intégrer, free tier généreux
- Coût: Gratuit jusqu'à 100 emails/jour, puis $20/mois

**Nodemailer** (SMTP):
- Utilise vos serveurs SMTP existants (Gmail, Outlook, hébergeur web)
- Avantages: Pas de dépendances externes, fonctionne avec n'importe quel SMTP
- Coût: Gratuit (utilisez SMTP de votre fournisseur)

**SendGrid**:
- URL: https://sendgrid.com
- Avantages: Service professionnel, bon support
- Coût: Gratuit jusqu'à 100 emails/jour, puis payant

### Étape 2: Configuration

1. **Créez un compte** sur le service choisi
2. **Obtenez les credentials** (API key ou identifiants SMTP)
3. **Configurez .env.local**:

```env
# Pour Resend:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Pour Nodemailer:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app

# Email de destination
CONTACT_EMAIL=contact@horizon-habitat-projet.com
```

### Étape 3: Activez l'envoi d'emails

Modifiez `src/lib/send-email.ts`:
- Décommentez le bloc correspondant à votre service choisi
- Installez la dépendance nécessaire (voir les instructions dans le fichier)

Modifiez `src/app/actions/contact.ts`:
- Décommentez les lignes d'appel à `sendContactEmail`

## 3. Optimisation des images pour le web

### Images haute résolution

Pour chaque image, utilisez plusieurs résolutions:

```
my-image.jpg          (original)
my-image-lg.jpg       (1920px de large)
my-image-md.jpg       (1024px de large)
my-image-sm.jpg       (512px de large)
```

next/image gère automatiquement la compression et le format (WebP).

### Format recommandé

- **Héros**: 1920x1080 minimum
- **Services**: 600x400
- **Avant/Après**: 800x600
- **Clients/Logos**: 300x300

Compressez avec:
```bash
# Utilisez TinyPNG, ImageOptim, ou:
magick input.jpg -quality 80 -resize 1920x1080 output.jpg
```

## 4. Déploiement sur Vercel

### Prérequis

- Compte Vercel (gratuit): https://vercel.com
- Repository GitHub

### Procédure

1. **Poussez le code sur GitHub**:
```bash
git add .
git commit -m "Déploiement initial"
git push origin main
```

2. **Connectez votre repository à Vercel**:
   - Allez sur https://vercel.com/new
   - Importez votre repository GitHub
   - Les settings s'auto-détectent pour Next.js

3. **Configurez les variables d'environnement**:
   - Dans Vercel Dashboard → Settings → Environment Variables
   - Ajoutez les mêmes variables que dans `.env.local`:
     - `RESEND_API_KEY` (ou SMTP_*)
     - `CONTACT_EMAIL`

4. **Déployez**:
   ```bash
   vercel deploy --prod
   ```

### Configuration du domaine

1. Achetez un domaine (Vercel Domains, Namecheap, etc.)
2. Dans Vercel → Settings → Domains → Add Domain
3. Suivez les instructions de configuration DNS

## 5. Vérifications pré-déploiement

### Checklist

- [ ] `npm run build` compile sans erreurs
- [ ] Toutes les images sont présentes et optimisées
- [ ] Email service est configuré et testé
- [ ] Variables d'environnement sont définies
- [ ] Contact form envoie les emails correctement
- [ ] Liens internes fonctionnent
- [ ] Mobile responsive fonctionne (testez sur téléphone)
- [ ] SEO metadata sont correctes (`/` page title, OpenGraph images)
- [ ] Sitemap accessible à `/sitemap.xml`
- [ ] Robots.txt accessible à `/robots.txt`

### Tests de performance

```bash
npm run build
npm start
# Ouvrez http://localhost:3000 dans Lighthouse (Chrome DevTools)
```

Objectifs:
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: 100

## 6. Configuration post-déploiement

### Google Search Console

1. Allez sur https://search.google.com/search-console
2. Ajoutez votre domaine
3. Vérifiez la propriété (par DNS)
4. Soumettez le sitemap: `/sitemap.xml`

### Google Business Profile

1. Allez sur https://business.google.com
2. Créez/modifiez votre profil
3. Complétez tous les détails de contact et horaires
4. Demandez des avis clients

### Google Analytics (optionnel)

Pour suivre les visiteurs:

1. Créez un compte sur https://analytics.google.com
2. Obtenez votre Measurement ID
3. Installez le tag: `npm install @react-google-analytics`
4. Configurez dans `layout.tsx`

## 7. Maintenance régulière

### Mensuel

- [ ] Vérifier les erreurs dans Search Console
- [ ] Vérifier les analytics pour les tendances de trafic
- [ ] Valider que le formulaire de contact fonctionne

### Trimestriel

- [ ] Actualiser les articles de blog avec nouvelles tendances
- [ ] Mettre à jour les avis clients
- [ ] Vérifier et mettre à jour les photos de projets

### Annuel

- [ ] Audit SEO complet
- [ ] Lighthouse audit
- [ ] Mise à jour des dépendances npm

## 8. Troubleshooting

### Le formulaire ne reçoit pas les emails

1. Vérifiez que `CONTACT_EMAIL` est défini
2. Testez les credentials du service email
3. Consultez les logs: `vercel logs`

### Les images ne s'affichent pas

1. Vérifiez que les fichiers existent dans `/public/images/`
2. Vérifiez les chemins exacts (case-sensitive)
3. Vérifiez que `next.config.js` n'a pas de restrictions d'images

### Le site est lent

1. Comprimez les images (max 100KB par image)
2. Vérifiez que les fonts se chargent correctement
3. Analysez avec Lighthouse et PageSpeed Insights

## 9. Support et ressources

- **Docs Next.js**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Resend Docs**: https://resend.com/docs
- **Vercel Docs**: https://vercel.com/docs

---

**Prochaine étape**: Commencez par étape 1 (images) ou étape 2 (email), selon votre priorité.
