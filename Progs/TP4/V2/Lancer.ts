import { Epreuve } from "./Epreuve";


export class Lancer extends Epreuve{
    private _type : string;

    constructor(type : string){
      super("mètre");
      this._type = type;
    }
    
    public get type () : string{
        return this._type;
    }

    public set type (valeur : string){
        if (valeur.trim().length > 0) {
            this._type = valeur.trim();
          } else {
            throw new Error("La saisie du type d'épreuve ne peut pas être vide !");
          }
    }

    toString() : string{
      const red = "\u001b[31m";
      const yellow = "\u001b[33m";
      const green = "\u001b[32m";
      const reset = "\u001b[0m";
      
      return `${red}Epreuve${reset}[${yellow}Lancer${reset}[${green}unite${reset}=${super.unite}, ${green}type${reset}=${this.type}]]${reset}`
    }
   
}
