export class Journalisation {
    private static _instance: Journalisation;
    private operations : Array<string>

    private constructor() {
        this.operations = new Array<string>();
    }
    
    public static get instance(): Journalisation {
        if (!Journalisation._instance) {
            Journalisation._instance = new Journalisation();
        }
        return Journalisation._instance;
    }

    public journaliser(operation: string): void {
        let d = new Date().toLocaleDateString();
        this.operations.push("[ " + d + " ]" + " " + operation);
    }

    public afficher(): void {
        for (let x of this.operations){
            console.log(x);
        }
    }
}

