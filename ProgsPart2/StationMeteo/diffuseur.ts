import { ISouscripteur } from "./ISouscripteur";

export class Diffuseur {
    private _souscripteurs: Array<ISouscripteur> = [];

    inscrire(souscripteur: ISouscripteur): void {
        this._souscripteurs.push(souscripteur);
    }
  
    déinscrire(souscripteur: ISouscripteur): void {
        const index = this._souscripteurs.indexOf(souscripteur);
        if (index !== -1) {
            this._souscripteurs.splice(index, 1);
        }
    }
  
    notifierChangement(temperature: number, humidité: number): void {
        this._souscripteurs.forEach((souscripteur) => {
            souscripteur.mettreAJour(temperature, humidité);
        });
    }
}