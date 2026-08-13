# Portfolio de Joseph Edim

Portfolio bilingue français/anglais construit avec Next.js, React et TypeScript.

## Développement local

Prérequis : Node.js 20.9 ou supérieur.

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur [http://localhost:3000](http://localhost:3000).

## Vérifications

```bash
npm run lint
npm test
```

## Déploiement avec GitHub et Vercel

1. Créer un dépôt vide sur GitHub, par exemple `portfolio`.
2. Depuis ce dossier, connecter puis envoyer le projet :

```bash
git remote add origin https://github.com/Kjoris27/portfolio.git
git push -u origin main
```

3. Ouvrir [vercel.com/new](https://vercel.com/new).
4. Connecter le compte GitHub `Kjoris27`, puis importer le dépôt `portfolio`.
5. Conserver les réglages détectés automatiquement :
   - Framework Preset : `Next.js`
   - Build Command : `next build`
   - Output Directory : valeur par défaut
   - Install Command : `npm install`
6. Cliquer sur **Deploy**.

Aucune variable d’environnement n’est nécessaire. Chaque push sur `main` mettra ensuite le site de production à jour automatiquement, et chaque pull request obtiendra une URL de prévisualisation.

## Contenu public

- Photo : `public/joseph-edim.png`
- CV : `public/Joseph-Edim-CV-2026.pdf`
- Carte de partage : `public/og.png`
