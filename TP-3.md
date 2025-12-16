# 🧪 TP numéro 3

![funny gif](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjk0bzY2djUyNDJ4dTU5a3UzaG02ajYxazBqZGliZ2ZyNTV5aWNlcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEduKVQdG4c0JVPSo/giphy.gif
)

## 🚀 Mission

Tu as maintenant vu le routing dans (presque) sa globalité, il va falloir maintenant que :

- Tu créés un nouveau composant qui s'appelle `cities`.
- Un nouveau composant qui s'appelle `cities-list`.
- Tu devras créer une nouvelle route, enfant de `/countries`, qui seras `'cities'` : En Lazy loading, ajouter comme titre `'Cities'` et une liste de pays, la suivante :
```
data: {
  cities: [
    { id: 1, name: 'Paris', inhabitants: 2161000, typicalDish: 'Croissant', currency: 'EUR', flag: '🇫🇷' },
    { id: 2, name: 'Lyon', inhabitants: 522000, typicalDish: 'Quenelles', currency: 'EUR', flag: '🇫🇷' },
    { id: 3, name: 'Marseille', inhabitants: 873000, typicalDish: 'Bouillabaisse', currency: 'EUR', flag: '🇫🇷' },
    { id: 4, name: 'New York', inhabitants: 8336000, typicalDish: 'New York-style pizza', currency: 'USD', flag: '🇺🇸' },
    { id: 5, name: 'Los Angeles', inhabitants: 3899000, typicalDish: 'Tacos', currency: 'USD', flag: '🇺🇸' },
    { id: 6, name: 'Chicago', inhabitants: 2660000, typicalDish: 'Deep-dish pizza', currency: 'USD', flag: '🇺🇸' },
    { id: 7, name: 'Berlin', inhabitants: 3755000, typicalDish: 'Currywurst', currency: 'EUR', flag: '🇩🇪' },
    { id: 8, name: 'Munich', inhabitants: 1510000, typicalDish: 'Weißwurst', currency: 'EUR', flag: '🇩🇪' },
    { id: 9, name: 'Madrid', inhabitants: 3223000, typicalDish: 'Cocido madrileño', currency: 'EUR', flag: '🇪🇸' },
    { id: 10, name: 'Barcelona', inhabitants: 1620000, typicalDish: 'Pa amb tomàquet', currency: 'EUR', flag: '🇪🇸' }
  ]
}
```
- Le composant `cities` doit récupérer la liste ci dessus (n'oubliez pas le **ngOnInit**) et transmettre les données au comoposant `cities-list`, qui va les afficher.
- Le composant `cities` est donc le composant parent de `cities-list`.
- Dans `cities`, vous devrez, tout en haut de la page, afficher le titre dans une balise `'h1'`, titre récupéré depuis la route.
- Rediriger l'utilisateur vers la liste des villes s'il tape dans l'url `/pays`


🎯 Le but : pouvoir naviguer vers countries/cities depuis ton header, sans aucun problème, et avoir la liste des villes affichées.

## ✅ Critères d’acceptation

### 1. Architecture

- Le composant cities doit s'occupper de récupérer les villes depuis la route, et les transmettre au composant `cities-list`.
- Le composant cities-list doit afficher les informations des villes, et être enfant du composant cities.

### 2. Navigation

- Au click sur Cities depuis le Header, nous devrions être redirigés vers la route cities.
- Si l'utilisateur écrit `/pays` dans l'URL, il devrait être redirigé vers la route qui affiche les villes.

### 3. Affichage

- Un balise `'h1'` doit s'afficher en haut de la page, avec le titre de la route.
- En dessous, nous devrions voir la liste des villes.

## 💡 Rappels

- Transmission de données parent-enfant : `@Input()`
- Utiliser le `ChangeDetectorRef` si la passation ne se fait pas.
- Bien architecture sa navigation.

## 🎁 Bonus

<details closed>
<summary>Si vous avez du temps 🌟</summary>

- Appliquer du style sur la page pour rendre le tout joli et agréable.
- Implémenter une barre de recherche qu'on puisse filtrer les villes par nom.
- Appliquer du style sur la page 404.
</details>

## 🔗 Liens utiles

- [Angular - Navigation](https://angular.dev/guide/routing/navigate-to-routes)
- [Angular - @Input()](https://angular.dev/api/core/Input)
