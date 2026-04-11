# Checklist de Déploiement Final

Utilisez cette checklist avant de déployer en production.

## Phase 1: Code et Compilation

- [ ] Tous les fichiers sont committés: `git status` est propre
- [ ] Code compile sans erreurs: `npm run build`
- [ ] Pas de warnings TypeScript: `npm run type-check`
- [ ] Tests locaux réussissent: `npm run dev` fonctionne
- [ ] Pas de console errors ou warnings en ouvrant le site

## Phase 2: Contenu et SEO

- [ ] **Homepage (`/`)**
  - [ ] Title: "Rénovation Intérieure à Argenteuil | Horizon Habitat Projet"
  - [ ] Description: Présent et informatif
  - [ ] OpenGraph image: Définie (si applicable)
  - [ ] JSON-LD LocalBusiness: Vérifié sur https://search.google.com/test/rich-results
  - [ ] H1 unique présent
  - [ ] Headings hiérarchiquement corrects (H1 → H2 → H3)

- [ ] **Blog (`/blog`)**
  - [ ] Page charge correctement
  - [ ] Tous les 10 articles listés
  - [ ] Featured articles en vedette
  - [ ] Metadata correctes

- [ ] **Articles de blog (`/blog/[slug]`)**
  - [ ] Au moins 3 articles ont du contenu complété
  - [ ] Chaque article a un lien "Retour" fonctionnel
  - [ ] CTA vers contact form visible

## Phase 3: Formulaire et Email

- [ ] **Contact Form**
  - [ ] Tous les champs se remplissent
  - [ ] Validation côté client fonctionne (test avec données invalides)
  - [ ] Honeypot silencieusement rejeté (ne pas afficher d'erreur si rempli)
  - [ ] Réponse de succès affichée après soumission
  - [ ] Réponse d'erreur affichée en cas de problème

- [ ] **Email Configuration**
  - [ ] Service email choisi (Resend / Nodemailer / SendGrid)
  - [ ] Variables d'environnement configurées dans `.env.local`
  - [ ] Email test envoyé avec succès
  - [ ] Email format HTML lisible
  - [ ] Reply-to fonctionne

## Phase 4: Images et Performance

- [ ] **Images**
  - [ ] Toutes les images hero/about présentes dans `/public/images/`
  - [ ] Images optimisées (< 150KB par image)
  - [ ] Format recommandé: JPG/PNG (pas BMP)
  - [ ] Slideshow fonctionne si images présentes

- [ ] **Performance (Lighthouse)**
  - [ ] Performance: ≥ 90
  - [ ] Accessibility: ≥ 90
  - [ ] Best Practices: ≥ 90
  - [ ] SEO: 100
  - [ ] Fonts chargent via next/font (pas de FOUT)

## Phase 5: Responsive et Compatibilité

### Desktop (1920x1080)

- [ ] Layout s'affiche correctement
- [ ] Tous les éléments visibles et alignés
- [ ] Hover states fonctionnent (boutons, liens)
- [ ] Header sticky fonctionne
- [ ] Formulaire utilisable

### Tablet (768x1024)

- [ ] Layout responsive correct
- [ ] Menu navigation adapté
- [ ] Images redimensionnées correctement
- [ ] Formulaire reste utilisable

### Mobile (375x812)

- [ ] Menu hamburger apparaît
- [ ] Menu s'ouvre/ferme correctement
- [ ] Contenu lisible (texte pas trop petit)
- [ ] Images carousel fonctionne
- [ ] CTA buttons assez grands (min 44x44px)
- [ ] Formulaire rempli sans zooming

### Cross-browser

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Phase 6: Sécurité et Configuration

- [ ] **Headers de sécurité**
  - [ ] X-Content-Type-Options: nosniff
  - [ ] X-Frame-Options: SAMEORIGIN
  - [ ] Referrer-Policy: présente
  - [ ] No exposed API keys in frontend code

- [ ] **Fichiers statiques**
  - [ ] `/sitemap.xml` accessible et valide
  - [ ] `/robots.txt` accessible
  - [ ] Humans.txt (optionnel): créé

- [ ] **Domaine et HTTPS**
  - [ ] Domaine acheté
  - [ ] Certificat SSL valide (HTTPS obligatoire)
  - [ ] Redirection HTTP → HTTPS
  - [ ] WWW vs non-WWW cohérent (exemple: https://example.com)

## Phase 7: Métadonnées et Analytique

- [ ] **Métadonnées**
  - [ ] `<html lang="fr">` présent
  - [ ] `<meta charset="utf-8">` présent
  - [ ] `<meta viewport>` pour mobile
  - [ ] Canonical URLs correctes

- [ ] **OpenGraph** (pour partage social)
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (1200x630px)
  - [ ] og:type
  - [ ] og:url

- [ ] **Twitter Card** (optionnel mais recommandé)
  - [ ] twitter:card
  - [ ] twitter:title
  - [ ] twitter:description

## Phase 8: Déploiement Vercel

- [ ] Repository GitHub créé et public
- [ ] Code pushé sur main branch
- [ ] Compte Vercel créé
- [ ] Repository connecté à Vercel
- [ ] Environment variables configurées:
  - [ ] RESEND_API_KEY (ou SMTP_*)
  - [ ] CONTACT_EMAIL
- [ ] Build preview réussit
- [ ] Deploy en production déclenché

## Phase 9: Post-Déploiement

- [ ] **Test sur production**
  - [ ] Site accessible sur domaine
  - [ ] Pas d'erreur 404 ou 500
  - [ ] HTTPS active
  - [ ] Tous les éléments chargent (images, fonts, CSS)

- [ ] **Outils SEO**
  - [ ] Google Search Console: domaine ajouté et vérifié
  - [ ] Sitemap soumis à Google
  - [ ] Google Business Profile: complété
  - [ ] Schema.org rich results: validé

- [ ] **Monitoring**
  - [ ] Vercel Analytics activé (optionnel)
  - [ ] Google Analytics configuré (optionnel)
  - [ ] Contact form: test submission
  - [ ] Email notification reçue

## Phase 10: Maintenance Post-Launch

### Premiers jours

- [ ] Monitorer les erreurs dans Vercel logs
- [ ] Vérifier les emails de contact reçus
- [ ] Tester le formulaire quotidiennement

### Première semaine

- [ ] Attendre l'indexation Google (2-5 jours)
- [ ] Vérifier Google Search Console pour erreurs
- [ ] Analyser le trafic initial

### Premier mois

- [ ] Ajouter plus d'articles de blog
- [ ] Mettre à jour les avis clients
- [ ] Collecter du feedback utilisateur
- [ ] Optimiser based on analytics

## Dépannage rapide

### Erreur: Build échoue

```bash
# Vérifiez les dépendances
npm install

# Nettoyez le cache
rm -rf .next node_modules
npm install

# Re-build
npm run build
```

### Erreur: Formulaire ne reçoit pas les emails

1. Vérifiez variables d'env: `vercel env ls`
2. Vérifiez logs: `vercel logs`
3. Testez les credentials du service email
4. Vérifiez que CONTACT_EMAIL est défini

### Erreur: Images ne s'affichent pas

1. Vérifiez le chemin exact (case-sensitive)
2. Vérifiez que les fichiers existent: `ls public/images/`
3. Vérifiez la configuration dans `next.config.ts`

### Performance lente

1. Comprimez les images
2. Vérifiez Lighthouse audit
3. Vérifiez les dépendances npm inutiles
4. Contactez support Vercel si serveur lent

## Contacts et Support

- **Issue urgent**: Contactez Vercel support (si hébergé sur Vercel)
- **Besoin technique**: Consultez documentation Next.js et Tailwind
- **SEO questions**: Consultez Google Search Central

---

**Status**: ⏳ En attente de configuration des images et email
**Prochaine étape**: Configurez email service + ajoutez images
**Date cible**: À définir après configuration

---

**Signature déploiement**:
- Date: _______________
- Déployé par: _______________
- Version: _______________
