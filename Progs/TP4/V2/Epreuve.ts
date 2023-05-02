import { Resultat } from "./Resultat";


export abstract class Epreuve {
    protected _unite : string;
    protected _recordMondial : number;

    public constructor (unite : string) {
       this._unite = unite;
    }

    public get unite() : string{
        return this._unite;
    }

    public set unite(valeur : string){
        if (valeur === "seconde"){
            this._unite = "s";
        }
        else if (valeur === "mètre"){
            this._unite = "m";
        }
        else {
            throw new Error("Veuillez donner une unite de mesure valide !");
        }
    }
    }
    public get recordMondial() : number{
        return this._recordMondial;
    }

    public set recordMondial(valeur : number){
        if (valeur >= 0){
            this._recordMondial = valeur;
        }
        else {
            throw new Error("Le record mondial doit être supérieur ou égal à 0 !")
        }
    }

}





