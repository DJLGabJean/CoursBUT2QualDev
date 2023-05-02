export function multAdd(x: number, y: number): number {
  let val = 0;

  for (let i = 0; i < y; i++) {
    val += x;
  }
  return val;
}

export function puissanceMult(x: number, y: number) : number {
  let val = 1;

  for (let i = 0; i < y; i++) {
    val *= x;
  }

  if (y < 0 && x < 0){
    throw new Error("Vous ne pouvez pas calculer une puissance d'un nombre négatif par un nombre négatif");
  }

  else if (x < 0){
    throw new Error("Vous ne pouvez pas calculer une puissance d'un nombre négatif par un nombre positif");
  }

  else if (x === 0 && y === 0){
    throw new Error("Vous ne pouvez pas calculer une puissance de 0 par 0");
  }

  else {
    return val;
  }

}

export function creeInitiales(nom: string, prenom: string): string {
  if (nom.length === 0 || prenom.length === 0) {
    throw new Error("Impossible de créer les initiales !");
  }
  
  return prenom[0].toUpperCase() + nom[0].toUpperCase();
}

// puissanceMult(2, 3);

/* val = 1
val = 2
val = 4
val = 8
*/

// Detect a negatif number 

// if (y < 0) {
