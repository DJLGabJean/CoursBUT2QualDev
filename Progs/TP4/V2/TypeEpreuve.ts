// On s'en fout

export class TypeEpreuve {
    private _nom : string;

    get nom (): string{
        return this._nom;
    }

    set nom (valeur : string) {
        this._nom = valeur;
    }
}