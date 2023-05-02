export abstract class TypeEpreuve {
    private _typeEpreuve : string;

    public constructor (typeEpreuve : string){
        this._typeEpreuve = typeEpreuve;
    }

    public get typeEpreuve () : string{
        return this._typeEpreuve;
    }
    
    public set typeEpreuve (valeur : string){
        this.typeEpreuve = valeur;
    }
}