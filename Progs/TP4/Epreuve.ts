import { TypeEpreuve } from "./TypeEpreuve";


export class Epreuve extends TypeEpreuve{
    private _nomEpreuve : string;
    private _pointsEpreuve : Map<string, number>

    public constructor (te : TypeEpreuve, nomEpreuve : string){
        super(te.typeEpreuve);
        this._nomEpreuve = nomEpreuve;
    }

    public get nomEpreuve () : string{
        return this._nomEpreuve;
    }
    
    public set nomEpreuve (valeur : string){
        this._nomEpreuve = valeur;
    }

    public get pointsEpreuve () : Map<string, number>{
        return this._pointsEpreuve;
    }


    // public toString(): string{
    //     return super(te)
    // }

    
}