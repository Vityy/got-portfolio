# 🧪 TP numéro 1

![funny gif](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRyc21uejE3dnRidWYxczB2Yjk4bW42amVlMjlzOGhuYzltam1rZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif)

## 🚀 Mission

Votre mission, si vous l'acceptez, est la suivante.

Le but est de récupérer tous les continents disponibles depuis notre API Game Of Thrones.

Pour se faire, vous allez utiliser ce lien, qui permet de récupérer les continents : https://thronesapi.com/api/v2/Continents

## ✅ Critères d'acceptation

Voici les critères d'acceptation de cette mission :

1. Vous devez typer fortement, en créant une interface `Continent` ou `ContinentModel`, dans le dossier models.

2. Dans un nouveau service (attention de bien nommer votre service pour que ce soit explicite), récupérer, grâce à l'`httpClient` les continents, dans une fonction nommée `getAllContinents()`.

3. Utiliser ce service dans `app.ts`.

4. Créer un nouveau composant, dans le dossier components, qui s'appellera `continents-list`.

5. Faites en sorte que `continents-list` soit un enfant de app.

6. Transmettre depuis app, tous les continents récupérés, à `continents-list`, qui va s'occuper de les afficher.

7. Les continents doivent être visibles dans l'interface, à l'endroit de votre choix, et avec le style de votre choix.

## 💡Rappels

- Utilisez `@Input` pour la passation de données entre parent et enfant.
- Pensez au fait qu'une réponse API est un **Observable**. Et qu'on y souscrit **(subscribe)**.
- Pour le type d'un continent (dans le but de créer une interface), vous pouvez voir ce que l'API retourne [ici](https://thronesapi.com/documentation#continent).
- N'oubliez pas les imports.

## 🎁 Bonus

<details closed>
<summary>Si vous avez du temps 🌟</summary>

- Pour les personnages, affichez à l'écran les propriétés manquantes.
- Appliquez un beau design aux continents (regardez comment fonctionne les fichiers .scss).
</details>

## 🔗 Liens utiles

- [Lien de l'API GOT](https://thronesapi.com)
- [RxJs - Observable](https://rxjs.dev/guide/observable)
- [RxJs - Subscribe](https://rxjs.dev/guide/subscription)
- [Hooks Lifecycle](https://angular.dev/guide/components/lifecycle)
- [HttpClient](https://angular.dev/guide/http)
- [ChangeDetectorRef](https://angular.dev/api/core/ChangeDetectorRef)
