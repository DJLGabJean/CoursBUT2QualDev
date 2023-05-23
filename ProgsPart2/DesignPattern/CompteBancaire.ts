export class CompteBancaire {
    private _numero : number;
    private _solde : number;

    public constructor (numero : number, solde = 0){
        this._numero = numero;
        this._solde = solde;
    }

    public get numero() : number {
        return this.numero;
    }

    public get solde() : number {
        return this.solde;
    }

    public debiter (montant : number) : void {
        if (this._solde < montant) throw new Error ("Solde insuffissant");
        this._solde -= montant;
    }

    public crediter(montant : number) : void {
        this._solde += montant;
    }
}