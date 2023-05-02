import { TypeEpreuve } from "./TypeEpreuve";
import { Epreuve } from "./Epreuve";

export class Athelete {
    private _nomAthelete : string;
    private _prenomAthelete : string;
    private _nationalite : string;
    private _dossard : number;
    private _resultats : Map<Epreuve, number>;

    public constructor (nomAthelete : string, prenomAthelete : string, nationalite : string, dossard : number, resultats : Map<Epreuve, number>) {
        this._nomAthelete = nomAthelete;
        this._prenomAthelete = prenomAthelete;
        this._nationalite = nationalite;
        this._dossard = dossard;
        this._resultats = resultats;
    }

    public get nomAthelete () : string{
        return this._nomAthelete;
    }
    
    public set nomAthelete (valeur : string){
        this._nomAthelete = valeur;
    }

    public get prenomAthelete () : string{
        return this._prenomAthelete;
    }

    public set prenomAthelete (valeur : string){
        this._prenomAthelete = valeur;
    }

    public get resultats () : Map<Epreuve, number>{
        return this._resultats;
    }

}