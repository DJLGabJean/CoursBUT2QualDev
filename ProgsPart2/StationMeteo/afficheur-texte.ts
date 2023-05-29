import { ISouscripteur } from "./ISouscripteur";


export class AfficheurTexte implements ISouscripteur {
  mettreAJour(temperature: number, humidité: number): void {
    console.log(temperature + "°C\n" + humidité + "%")
  }
}
