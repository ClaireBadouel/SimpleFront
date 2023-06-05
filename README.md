# SimpleFront

La page HTML select.html renvoie à :

- scripts/updateSession.js
- scripts/select.js

Je t’ai mis la db sur laquelle j’ai testé mon code
Pour la run, tu dois installer quelques librairies:

```
npm install express
npm install morgan
npm install cors --save
```

Puis pour la lancer :

```

node .\database\serveur.js

```

A l’aide de morgan, elle renvoie les requêtes sur le stdout pour vérifier que le rechargement de la page ne renvoie pas de nouvelles requêtes.
