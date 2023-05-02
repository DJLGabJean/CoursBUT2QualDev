import { Resultat} from "./Resultat";


export class Athelete{
    private _nomAthelete : string;
    private _prenomAthelete : string;
    private _nationalite : string;
    private _dossard : number;

    public constructor (nomAthelete : string, prenomAthelete : string, nationalite : string, dossard : number){
        this._nomAthelete = nomAthelete;
        this._prenomAthelete = prenomAthelete;
        this._nationalite = nationalite;
        this._dossard = dossard;
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
}