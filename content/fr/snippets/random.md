---
id: 1
title: "Random"
description: "Générer un nombre aléatoire dans une range. On aimerait tous que Math.random fonctionne ainsi."
category: "Javascript"
last_updated: "6 Septembre 2022"
---

```js
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
```

## Contexte

En JavaScript, nous pouvons générer des nombres aléatoires à l'aide de la fonction [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random). Malheureusement, cette fonction ne génère que des nombres flottants compris entre 0 et 1.

En pratique, il est beaucoup plus courant d'avoir besoin d'un nombre entier aléatoire dans une fourchette donnée. Par exemple, un nombre aléatoire compris entre 1 et 10.

Ce snippet nous permet de le faire !

::note
**A noter :**
Cette fonction **random** inclut le premier paramètre dans le tirage mais, exclut le second. Par exemple, random(1, 3) tombera sur 1 ou 2, mais jamais sur 3.

Cela a été fait intentionnellement pour correspondre au comportement de [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), ainsi qu'aux méthodes comme [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).
::

## Utilisation

```js
// Obtient un nombre aléatoire entre 1 et 100
random(1, 101);
// Obtient un nombre aléatoire entre -100 et 99
random(-100, 100);
```

## Explication

Cette fonction s'appuie sur un flottant entre 0..1 généré par Math.random à un intervalle que vous spécifiez. Si vous n'avez jamais vu cette pratique auparavant, elle peut paraître étonnante !

Disons que nous souhaitons obtenir un nombre aléatoire compris entre 0 et 5. Étant donné que Math.random nous donne un nombre flottant aléatoire compris entre 0 et 1, il suffit de multiplier le résultat par 5 et l'arrondir au chiffre inférieur pour obtenir le nombre entier :

```js
const max = 5;
// Obtient une valeur aléatoire entre 0 et 0.999999
const random_float = Math.random();
// Multipliez-le par notre max, ici 5.
// Obtient un flottant compris entre 0 et 4.999999
const multiplied = random_float * max;
// Arrondissez-le en utilisant Math.floor.
// Obtient ainsi 0, 1, 2, 3 ou 4.
const random_number = Math.floor(multiplied);
```

Comment obtenir un minimum différent de 0 ? Ou encore un nombre compris entre 1 et 5 ?

L'astuce est que nous d'obtenir le delta. ici 5 - 1 est égal à 4, nous obtiendrons donc une valeur aléatoire entre 0 et 3.99999. Nous pouvons ensuite l'augmenter par notre valeur minimale, pour la placer dans la bonne range :

```js
const min = 1;
const max = 5;
// Calculer le delta
const delta = max - min;
// Obtient une valeur aléatoire entre 0 et 0.999999
const random_float = Math.random();
// Multipliez-le par notre delta, 4
// Sera compris entre 0 et 3.999999
const multiplied = random_float * delta;
// Arrondissez-le à l'aide de Math.floor
// Nous donnera ainsi 0, 1, 2 ou encore 3.
const random_number = Math.floor(multiplied);
// Un nombre aléatoire auquel nous ajouter le min
// Nous donnera finalement 1, 2, 3 ou encore 4.
const final = random_number + min;
```

## Conclusion

Le snippet final en une expression compacte :

```js
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
```
