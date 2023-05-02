export class Performance {
    private _resultat : number;
    private _nbpoints : number;

    public constructor(nbpoints : number, resultat : number,) {
        this._nbpoints = nbpoints;
        this._resultat = resultat;
    }

    public get nbpoints (): number {
        return this._nbpoints;
    }

    public set nbpoints (valeur : number) {
        this._nbpoints = valeur;
    }

    public get resultat (): number {
        return this._resultat;
    }

    public set resultat (valeur : number) {
        this._resultat = valeur;
    }

}