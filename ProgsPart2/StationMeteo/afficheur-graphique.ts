import { ISouscripteur } from "./ISouscripteur";

import * as asciichart from "asciichart";

export class AfficheurGraphique implements ISouscripteur {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  setTemperature(temperature: number): void {
    this.tabTemperature.push(temperature);
  }

  setHumidité(humidité: number): void {
    this.tabHumidité.push(humidité);
  }

  mettreAJour(temperature: number, humidité: number): void {
    this.setTemperature(temperature);
    this.setHumidité(humidité); 
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}
