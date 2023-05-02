// // Exercice 1

// function deb1() : number {
//     let j = 200
//     for (let i = 0; i < 10; i++){
//         j -= 10
//     }
//     return j;
// }

// console.log(deb1());


// // Exercice 2

// function deb1_5() : number {
//     let j = 200;
//     let tab = [];

//     for (let i = 0; i < 10; i++){
//         j -= 10;
//         tab[i] = j;
//     }
//     console.log(tab);
//     return j;
// }

// console.log(deb1_5());


// Exercice 3

// function deb2(x : number, y : number): void {
//     const tmp = y;
//     y = x;
//     x = tmp;
//     console.log(x, y);
// }

// let x = 10;
// let y = 20;
// deb2(x, y);
// console.log(x, y);

// On ajoute les déclarations de variables dans la fonction pour évitder les effets de bords.


// Exercice 4

// function deb3(xy: number[]) : void {
//     let tmp = xy[0];
//     xy[0] = xy[1];
//     xy[1] = tmp;
//     return console.log(xy);
// }

// let xy = [10, 20]
// deb3(xy);

// On ajoute les déclarations de variables dans la fonction pour éviter les effets de bords.


// Exercice 5 

let j = 10;
deb4();
console.log(j);

function deb4() : number {
    let j = 25;
    for (let i = 0; i < 10; i++){
        let j = 2 * i; // Il faut enlever le let qu'il y a dans la fonction sinon il y a du shadowing
        console.log(j);
    }
    return j;
}

// Exercice 6 



