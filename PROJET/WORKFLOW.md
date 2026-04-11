# Workflow de Développement

Guide pour les modifications futures du site Horizon Habitat Projet.

## Structure des branches

- `main`: Production (version en ligne)
- `develop`: Développement (base pour les nouvelles features)
- `feature/XXX`: Nouvelles features
- `fix/XXX`: Corrections de bugs

## Processus de développement

### 1. Commencer un travail

```bash
# Assurez-vous d'être sur develop
git checkout develop
git pull origin develop

# Créez une nouvelle branche
git checkout -b feature/description-du-travail
# ou
git checkout -b fix/description-du-bug
```

Exemples:
```bash
git checkout -b feature/add-testimonials
git checkout -b fix/mobile-menu-responsive
git checkout -b feature/blog-article-about-kitchens
```

### 2. Faites vos modifications

```bash
# Vérifiez que le code compile
npm run build

# Testez localement
npm run dev
# Ouvrez http://localhost:3000

# Faites vos modifications dans l'éditeur
```

### 3. Commitez vos changements

```bash
# Vérifiez les changements
git status

# Ajoutez les fichiers
git add .

# Committez avec un message clair
git commit -m "Ajout: nouvelle section testimonials

- Crée un composant TestimonialCard
- Ajoute 5 nouveaux avis clients
- Intègre dans la page d'accueil"
```

Format des commits:
- `Ajout:` pour une nouvelle feature
- `Fix:` pour une correction
- `Amélioration:` pour une optimization
- `Refactor:` pour une restructuration
- `Docs:` pour la documentation
- `Style:` pour des changements de style (CSS, formatage)

### 4. Préparez pour la mise en ligne

```bash
# Assurez-vous que tout compile
npm run build

# Poussez vers votre branche
git push origin feature/description-du-travail

# Sur GitHub, créez une Pull Request (PR)
# - Décrivez les changements
# - Liez les issues si applicable
# - Demandez une review
```

### 5. Fusion sur main

```bash
# Une fois approuvé, fusionnez sur develop
git checkout develop
git merge feature/description-du-travail

# Pour la production, fusionnez develop → main
git checkout main
git merge develop
git push origin main

# Déploiement automatique sur Vercel
```

## Commandes utiles

### Développement

```bash
# Démarrer le serveur dev
npm run dev

# Build de production
npm run build

# Vérifier la build de production localement
npm run build && npm start

# Vérifier le type (TypeScript)
npm run type-check
```

### Git

```bash
# Voir l'historique des commits
git log --oneline

# Voir les changements non committés
git diff

# Stash des changements temporaires
git stash
git stash pop

# Annuler le dernier commit (mais garder les changements)
git reset --soft HEAD~1

# Rebaser sur develop
git rebase develop
```

## Points de contrôle avant déploiement

Avant de fusionner sur `main`:

- [ ] `npm run build` réussit sans erreurs
- [ ] Pas d'avertissements TypeScript (`npm run type-check`)
- [ ] Les tests passent (s'il y en a)
- [ ] Code reviewé et approuvé
- [ ] Features testées en local sur desktop et mobile
- [ ] Pas de console errors ou warnings
- [ ] Liens internes et externes valides
- [ ] Formulaire de contact fonctionne
- [ ] Images sont optimisées et présentes
- [ ] Meta descriptions et OpenGraph configurées

## Fichiers modifiés couramment

### Pages et sections

```
src/components/sections/
├── HeroSection.tsx         # Section héro
├── AboutSection.tsx        # À propos
├── ServicesSection.tsx     # Services (6 services)
├── ReviewsSection.tsx      # Avis (24 avis)
├── ContactSection.tsx      # Formulaire de contact
└── MapSection.tsx          # Localisation et carte
```

### Données

```
src/lib/
├── reviews.ts              # 24 avis clients
├── services.ts             # 6 services
├── blog-posts.ts           # 10 articles de blog
└── schema.ts               # JSON-LD pour SEO
```

### Configuration

```
src/app/
├── globals.css             # Design tokens et styles globaux
├── layout.tsx              # Metadata et fonts
└── actions/contact.ts      # Server Action du formulaire
```

## Ajouter une nouvelle page

```typescript
// src/app/nouvelle-page/page.tsx

import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Nouvelle Page | Horizon Habitat Projet',
  description: 'Description pour SEO',
}

export default function NouvellePagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Contenu */}
      </main>
      <Footer />
    </div>
  )
}
```

## Ajouter un nouvel article de blog

1. **Ajoutez l'article à `src/lib/blog-posts.ts`**:

```typescript
{
  slug: 'nouveau-article-slug',
  title: 'Titre de l\'article',
  description: 'Description courte',
  date: '2025-04-15',
  author: 'Horizon Habitat Projet',
  readingTime: 8,
  featured: false,
}
```

2. **Ajoutez le contenu HTML à `src/app/blog/[slug]/page.tsx`**:

```typescript
const articleContent: Record<string, string> = {
  // ... articles existants
  'nouveau-article-slug': `
    <h2>Titre de section</h2>
    <p>Contenu HTML...</p>
  `,
}
```

3. **Committez et pushez**:

```bash
git add src/lib/blog-posts.ts src/app/blog/\[slug\]/page.tsx
git commit -m "Ajout: article de blog sur [sujet]"
git push origin feature/add-blog-article
```

## Styles et CSS

Utilisez les classes Tailwind définies dans `src/app/globals.css`:

```tsx
// Couleurs
<div className="bg-charcoal text-ivory">  {/* Dark sections */}
<div className="bg-gold">                  {/* Accents et CTA */}

// Typographie
<h1 className="font-display text-4xl">   {/* Titles (Cormorant) */}
<p className="font-sans text-base">       {/* Body (DM Sans) */}

// Composants
<button className="px-4 py-2 bg-gold hover:bg-gold-light transition-colors">
```

## Support et questions

Pour des questions sur:
- **Architecture Next.js**: Consultez la [doc officielle](https://nextjs.org/docs)
- **Tailwind CSS**: Consultez la [doc Tailwind](https://tailwindcss.com)
- **Déploiement Vercel**: Consultez la [doc Vercel](https://vercel.com/docs)
- **SEO et schema**: Consultez [structured-data.org](https://www.structured-data.org)

---

**Bonne chance dans le développement!** 🚀
