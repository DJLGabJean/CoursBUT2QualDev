// Instance of a class in parameters where there is an object and a string in TypeScript?      


import { TypeEpreuve } from "./TypeEpreuve";
import { Epreuve } from "./Epreuve";
import { Athelete } from "./Athelete";


let te1 = new TypeEpreuve("Course");
let te2 = new TypeEpreuve("Saut");
let te3 = new TypeEpreuve("Lancer");


let m100 = new Epreuve(te1, "100m");
let m400 = new Epreuve(te1, "400m");
let m110Haies = new Epreuve(te1, "110m haies");
let m1500 = new Epreuve(te1, "1500m");


let sautLong = new Epreuve(te2, "Saut en longueur");






// Il existe 3 types d'épreuves :
//   1) les courses :
//      - 100m
//      - 400m
//      - 110m haies
//      - 1500m

//   2) les sauts :
//      - Saut en longueur
//      - Saut en hauteur
//      - Saut à la perche

//   3) les lancers :
//      - lancer du disque
//      - lancer du javelot
//      - lancer du poids