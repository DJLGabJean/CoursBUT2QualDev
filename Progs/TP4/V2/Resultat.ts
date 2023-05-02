import { Athelete } from "../Athelete";
import { Epreuve } from "./Epreuve";
import { Course } from "./Course";
import { Saut } from "./Saut";
import { Lancer } from "./Lancer";


export class Resultat {
    private _resultat : Map<Epreuve,number>;
    private _score : number;

    public constructor (resultat : Map<Epreuve, number>, score : number){
        this._resultat = resultat;
        this._score = score;
    }


    public get resultat () : Map<Epreuve,number>{
        return this._resultat;
    }
    public get score () : number {
        return this._score;
    }

    public set resultat (valeur: Map<Epreuve,number>) {
        this._resultat = valeur;
    }

    calcul (resultat : Map<Epreuve, number>, type : string, points : number) : void{
        if (type === "100m" || type === "400m" || type === "110m haies" || type === "1500m"){ //Si le type d'épreuve est de la classe Course
            let ep = new Course(type);
            resultat.set(ep, points);
        }
        else if (type === "saut en longueur" || type === "saut en hauteur" || type === "saut à la perche"){ //Si le type d'épreuve est de la classe Saut
            let ep = new Saut(type);
            resultat.set(ep, points);
        }
        else if (type === "lancer du disque" || type === "lancer du javelot" || type === "lancer du poids"){ //Si le type d'épreuve est de la classe Lancer
            let ep = new Lancer(type);
            resultat.set(ep, points);
        }
    }
}