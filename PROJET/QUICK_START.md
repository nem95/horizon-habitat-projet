# Quick Start - Horizon Habitat Projet

Commencez ici pour les étapes immédiates.

## Installation (première fois)

```bash
# 1. Clonez le repo (si pas déjà fait)
git clone <your-repo-url>
cd horizon-habitat-projet

# 2. Installez les dépendances
npm install

# 3. Créez .env.local
cp .env.example .env.local
# Éditez .env.local avec vos credentials email
```

## Développement local

```bash
# Démarrez le serveur
npm run dev

# Ouvrez http://localhost:3000
# Modifiez les fichiers, sauvegardez
# Les changements se reflètent automatiquement
```

## Avant de déployer

```bash
# 1. Vérifiez que tout compile
npm run build

# 2. Vérifiez pas d'erreurs TypeScript
npm run type-check

# 3. Testez la build en local
npm start
```

## Configuration Email (OBLIGATOIRE)

### Option 1: Resend (5 min)

```bash
# 1. Allez sur https://resend.com
# 2. Créez un compte (gratuit)
# 3. Générez une API key
# 4. Dans .env.local:
RESEND_API_KEY=re_votre_cle

# 5. Dans src/lib/send-email.ts, décommentez le bloc Resend
# 6. Dans src/app/actions/contact.ts, décommentez l'appel sendContactEmail
```

### Option 2: Nodemailer (Gmail)

```bash
# 1. Activez "App passwords" dans Google Account:
#    https://myaccount.google.com/apppasswords
# 2. Obtenez votre app password (16 caractères)
# 3. Dans .env.local:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=les-16-caracteres-generes

# 4. Installez nodemailer: npm install nodemailer
# 5. Décommentez le bloc Nodemailer dans src/lib/send-email.ts
# 6. Décommentez l'appel sendContactEmail dans src/app/actions/contact.ts
```

## Ajoutez vos images

```bash
# 1. Créez le dossier images
mkdir -p public/images/{hero,about,projects}

# 2. Placez vos images JPG/PNG
cp /chemin/vers/images/*.jpg public/images/hero/
cp /chemin/vers/images/*.jpg public/images/about/

# 3. Optimisez les images (max 150KB)
# Utilisez TinyPNG (tinypng.com) ou ImageOptim

# 4. Redémarrez npm run dev
```

## Déploiement sur Vercel

```bash
# 1. Poussez le code sur GitHub
git add .
git commit -m "Préparation pour deployment"
git push origin main

# 2. Allez sur https://vercel.com/new
# 3. Importez votre repository GitHub
# 4. Settings → Environment Variables
#    Ajoutez: RESEND_API_KEY (et autres si besoin)
# 5. Déployez!

# Ou avec la CLI:
npm install -g vercel
vercel deploy --prod
```

## Tester le formulaire

```bash
# 1. Sur http://localhost:3000, scroll jusqu'au formulaire
# 2. Remplissez:
#    Nom: "Test"
#    Prénom: "User"
#    Téléphone: "0766415639"
#    Email: "votre-email@example.com"
#    Message: "Message de test"
# 3. Cliquez "Envoyer"
# 4. Vous devriez voir "Merci! Votre message a été envoyé"
# 5. Vérifiez votre email (peut être dans les spams)
```

## Tester sur mobile

```bash
# Sur le même réseau WiFi:
npm run dev
# Notez l'URL affichée: http://192.168.x.x:3000
# Sur votre mobile: ouvrez http://192.168.x.x:3000
# Testez le menu hamburger et le formulaire
```

## Commandes utiles

```bash
npm run dev          # Démarrer le serveur dev
npm run build        # Build de production
npm run type-check   # Vérifier TypeScript
npm start            # Démarrer l'app built

git status           # Voir les changements
git diff             # Voir les détails
git log --oneline    # Historique des commits
```

## Structure des fichiers importants

```
src/
├── app/
│   ├── page.tsx              # Accueil
│   ├── globals.css           # Styles et couleurs
│   ├── layout.tsx            # Config root (metadata, fonts)
│   ├── actions/contact.ts    # Formulaire backend
│   └── blog/
│       ├── page.tsx          # Blog listing
│       └── [slug]/page.tsx   # Articles individuels
├── components/
│   ├── sections/             # 6 sections principales
│   └── ui/                   # Composants réutilisables
├── lib/
│   ├── send-email.ts         # ← À configurer
│   ├── blog-posts.ts         # Articles (à éditer)
│   ├── reviews.ts            # Avis (à éditer)
│   └── services.ts           # Services (à éditer)
└── types/index.ts            # Types TypeScript

public/
└── images/                   # ← À remplir
    ├── hero/
    ├── about/
    └── projects/
```

## Points clés à retenir

1. **Email**: OBLIGATOIRE pour que le formulaire fonctionne
2. **Images**: Optimisez-les! TinyPNG peut vous aider
3. **SEO**: Vérifiez les metadata dans `src/app/layout.tsx`
4. **Mobile**: Testez toujours sur vrai téléphone/tablet
5. **Build**: Toujours `npm run build` avant de déployer

## Troubleshooting rapide

### "npm install" ne fonctionne pas
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001  # Utiliser port 3001
```

### Images ne s'affichent pas
```bash
# Vérifiez le chemin exact (case-sensitive)
ls public/images/hero/   # Le fichier existe?
# Redémarrez: npm run dev
```

### Formulaire ne reçoit pas les emails
```bash
# Dans .env.local, vérifiez:
# 1. RESEND_API_KEY est présent
# 2. CONTACT_EMAIL est défini
# 3. Redémarrez: npm run dev
```

## Prochaines étapes

1. ✅ Configurez email
2. ✅ Ajoutez les images
3. ✅ Testez le formulaire
4. ✅ Déployez sur Vercel
5. ✅ Configurez Google Search Console

## Ressources

- [README.md](./README.md) - Documentation complète
- [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) - Guide détaillé
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Avant lancement
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Vue d'ensemble

---

**Besoin d'aide?** Consultez PROJECT_SUMMARY.md Section "Support et questions"
