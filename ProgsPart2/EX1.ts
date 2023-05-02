export class Triple<T, U, V>{
    private _first: T;
    private _second: U;
    private _third: V;

    constructor(first: T, second: U, third: V) {
        this._first = first;
        this._second = second;
        this._third = third;
    }

    get first(): T {
        return this._first;
    }
    get second(): U {
        return this._second;
    }
    get third(): V {
        return this._third;
    }

    set first(value: T) {
        this._first = value;
    }
    set second(value: U) {
        this._second = value;
    }
    set third(value: V) {
        this._third = value;
    }

    toString(): string {
        return "(" + this._first + "," + this._second + "," + this._third + ")";
    }
}


// Créez une instance de Triple avec des types string, number et boolean. Créez une instance de Triple avec des types
// number, number et number. Créez une instance de Triple avec des types string, string et string.

let triple1: Triple<string, number, boolean> = new Triple<string, number, boolean>("Michel", 1, true);
let triple2: Triple<number, number, number> = new Triple<number, number, number>(25, 12, 2022);
let triple3: Triple<string, string, string> = new Triple<string, string, string>("NAE", "Gabriel", "22ans");