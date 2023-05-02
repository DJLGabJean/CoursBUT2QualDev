// Exercice 1

// Vous devez modéliser un portefeuille de devises. Ce portefeuille peut contenir un certain nombre de devises, stockées dans une liste .
// A chaque devise correspond un montant et le nom de la devise (Euros, Roubles, etc.). 
// On peut ajouter des devises à ce portefeuille ou en sortir, et afficher le contenu du portefeuille. 
// Il n'y a qu'une seule entrée de chaque devise dans le portefeuille. 
// On ne peut sortir des Euros que s'il y a déjà des Euros dans le portefeuille, et seulement s'il y en a suffisamment.

//Ecrire les classes Devise et Portefeuille, et un main qui utilise le tout.


class Devise {
    private _montant : number;
    private _nom : string;

    constructor (montant = 0, nom = "Dollards"){
        this._montant = montant
        this._nom = nom;
    }

    public get montant() : number{
        return this._montant;
    }

    public get nom () : string{
        return this._nom;
    }

    public set montant(montant : number){
        if (montant >= 0){
            this._montant = montant;
        }
        else {
            throw new Error("Le montant doit être positif");
        }
        this._montant = montant;

    }

    public set nom (nom : string){
        if (this._nom.trim().length != nom.length){
            throw new Error("Le nom de devise ne doit pas comporter d'espaces")
        }
        else {
            this._nom = nom;
        }
    }

}

class Portefeuille {
    private _listeDevises : Array<Devise>;

    public constructor(){
        this._listeDevises = [];
    }
}

let devise_1 = new Devise(50,"Dollards");