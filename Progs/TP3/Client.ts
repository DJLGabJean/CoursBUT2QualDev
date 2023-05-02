export class Client {
    private _nom : string;
    private _prenom : string;
    private _ca : number;
    private _achat : number;

    public constructor(nom : string, prenom : string, ca : number, achat : number) {
        this._nom = nom;
        this._prenom = prenom;
        this._ca = ca;
        this._achat = achat;
    }


    public get nom (): string{
        return this._nom;
    }

    public get prenom () : string{
        return this._prenom;
    }

    public get ca () : number{
        return this._ca;
    }

    public get achat () : number{
        return this._achat;
    }


    public set nom (nom : string){
        if (nom.trim().length > 0) {
            this._nom = nom.trim();
        } 
        else {
            throw new Error("Le nom ne peut pas être vide");
          }
    }

    public set prenom (prenom : string){
        if (prenom.trim().length > 0) {
            this._prenom = prenom.trim();
        } 
        else {
            throw new Error("Le prénom ne peut pas être vide");
          }

    }

    public set ca (ca : number){
        if (ca > 0){
            this._ca = ca;
        }
        else {
            throw new Error("Le chiffre d'affaires ne peut pas être inférieur à 0 pour un client");
        }
    }

    public set achat (achat : number){
        if (this._ca instanceof Bon_Client){
            
        }
    }
}


class Bon_Client extends Client {
    protected constructor (nom : string, prenom : string, ca : number, achat : number){
        if (ca > 1000){
            achat *= 0.05;
        }
        super(nom, prenom, ca, achat);
    }
} 

class Client_Exceptionnel extends Client {
    protected constructor (nom : string, prenom : string, ca : number, achat : number){
        if (ca > 3000){
            achat *= 0.15;
        }
        super(nom, prenom, ca, achat);
    }
}

class VIC extends Client {
    protected constructor (nom : string, prenom : string, ca : number, achat : number){
        if (ca > 10000){
            achat *= 0.30;
        }
        super(nom, prenom, ca, achat);
    }
}