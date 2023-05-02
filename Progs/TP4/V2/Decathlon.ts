import { Athelete } from "../Athelete";
import { Epreuve } from "../Epreuve";


export class Decathlon {
    private _nom : string;
    private _date : number;
    private _lieu : string;
    private _epreuves : Array<Epreuve>;
    private _atheletes : Array<Athelete>;

    constructor (nom : string, date : number, lieu : string) {
        this._nom = nom;
        this._date = date;
        this._lieu = lieu;
    }

    get nom (): string {
        return this._nom;
    }
    get date (): number {
        return this._date;
    }
    get lieu (): string {
        return this._lieu;
    }
    get epreuves (): Array<Epreuve> {
        return this._epreuves;
    }
    get atheletes () : Array<Athelete> {
        return this._atheletes;
    }


    set nom (valeur : string) {
        this._nom = valeur;
    }
    set date (valeur : number) {
        this._date = valeur;
    }
    set lieu (valeur : string) {
        this._lieu = valeur;
    }


    



}