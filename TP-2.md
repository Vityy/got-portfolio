# 🧪 TP numéro 2

![funny gif](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExemU4M3hydGl1ZWx2bzNraTk0eDd0dmtrZ3VvaDVhbmhmbmxzcGNrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HKL07xwvfPiFI0Ti71/giphy.gif
)

## 🚀 Mission

Tu as maintenant un composant parent, des composants enfants, et tu affiches déjà des données dans l’interface.
Pour ce nouveau TP, l’objectif est de comprendre comment fonctionnent les styles dans Angular :

- Les styles globaux applicables à toute l'application
- Les styles locaux propres à un composant

🎯 Le but : rendre ton interface plus agréable visuellement tout en maîtrisant où écrire quoi pour styliser un projet Angular.

## ✅ Critères d’acceptation

### 1. Ajouter des styles globaux

Dans le fichier `src/styles.scss`, ajoute des styles qui s’appliquent à l’ensemble de l’application.

Tu es libre du design, mais tu dois :

- Modifier au moins un style global (ex : body, h1, h2, etc.)
- Créer des variables utilisables dans tous les fichiers SCSS (ex : $primary-color)
- 
Cela se fait comme ceci :
Dans style `styles.scss`, ajoutez cette ligne : `$primary-color: #1d4ed8;`
Pour l'utiliser, rendez-vous dans `characters-list.scss`.
Ensuite, en haut du fichier, importez le fichier global avec : `@import '../../../styles.scss';`


**L'objectif est de voir clairement l’impact visuel global sur l'app.**

### 2. Styliser un composant via son propre fichier SCSS

- Choisis un de tes composants enfants (par exemple continents-list, characters-list) et :
  - Ajoute des styles dans son propre fichier .scss
  - Applique-les dans le HTML du composant

- Tu es complètement libre des classes, de la structure et du style :
- Liste simple, Cartes, Grille, Ombres, Couleurs… à toi de jouer.

🎨 **Be creative** 🎨

Le résultat doit être clairement visible :
➡️ « Ce composant a son style propre ».

### 3. Mettre en évidence la différence global vs local

- Tu dois montrer une différence claire entre :
- Un style appliqué via styles.scss (global)
- Un style appliqué via un fichier SCSS d'un composant

Pour valider :

- Utilise un style global sur un élément (ex : une balise h2)
- Utilise un style local sur un élément similaire dans un composant

👉 On doit comprendre immédiatement que les deux n’ont pas le même style ni la même portée.

> ### 4. Conserver le fonctionnement du TP-1
>
> ⚠️ Attention :
> - ✔️ L’affichage des continents / personnages doit continuer à fonctionner
> - ✔️ Tes services, tes subscribe et ton passage Parent → Enfant doivent rester inchangés

Tu travailles uniquement sur la présentation, pas sur la logique.

## 💡 Rappels

- styles.scss = styles globaux, appliqués à tout le projet
- *.scss dans un composant = styles encapsulés, propres à chaque composant
- Angular empêche par défaut les styles d’un composant de déborder sur les autres (encapsulation)

## 🔗 Liens utiles

- [Angular - Styling](https://v17.angular.io/guide/component-styles)
- [Angular - View Encapsulation](https://angular.dev/guide/components/styling)
- [SCSS - CheatSheet](https://gist.github.com/fredsiika/2958726da1f94a9bd447f4f7bd03a852)

