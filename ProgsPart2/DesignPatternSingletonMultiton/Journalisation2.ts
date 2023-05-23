export class Journalisation2 {
    private static _instances : Map<string, Journalisation2> = new Map<string, Journalisation2>;
    private _operations : Array<string>;

    private constructor() {
        this._operations = new Array<string>();
    }

    public static getInstance(clef : string): Journalisation2 {
        if (!Journalisation2._instances.has(clef)) {
            Journalisation2._instances.set(clef, new Journalisation2());
        }
        return Journalisation2._instances.get(clef)!;
    }

    public journaliser(operation : string) : void {
        let d = new Date().toLocaleDateString();
        this._operations.push("[ " + d + " ]" + " " + operation);
    }

    public afficher() : void {
        for (let x of this._operations){
            console.log(x);
        }
    }

}