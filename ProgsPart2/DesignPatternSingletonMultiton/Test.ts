import { CompteBancaire } from "./CompteBancaire";
import { Journalisation } from "./Journalisation";
import { Journalisation2 } from "./Journalisation2";


let c1 = new CompteBancaire(123456789, 100);
let c2 = new CompteBancaire(987654321, 100);

c1.crediter(100);
c1.debiter(80);
c2.debiter(20);

const logs = Journalisation.instance

logs.journaliser("Compte 123456789 : Crédit de 100€");
logs.journaliser("Compte 123456789 : Débit de 80€");
logs.journaliser("Compte 987654321 : Débit de 20€");
logs.afficher(); //Journalisation.instance.afficher()