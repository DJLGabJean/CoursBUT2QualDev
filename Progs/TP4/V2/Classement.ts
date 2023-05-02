import { Athelete } from "../Athelete"


class Classement {
    private _meilleur_c : Athelete;
    private _meilleur_s : Athelete;
    private _meilleur_l : Athelete;
    private _meilleur_fr : boolean;

    public get meilleur_c () : Athelete {
        return this._meilleur_c;
    }
    public get meilleur_s () : Athelete {
        return this._meilleur_s;
    }
    public get meilleur_l () : Athelete {
        return this._meilleur_l;
    }
    public get meilleur_fr () : boolean {
        return this._meilleur_fr;
    }

    public set meilleur_c (valeur : Athelete) {
        this._meilleur_c = valeur;
    }
    public set meilleur_s (valeur : Athelete) {
        this._meilleur_s = valeur;
    }
    public set meilleur_l (valeur : Athelete) {
        this._meilleur_l = valeur;
    }
    public set meilleur_fr (valeur : boolean) {
        this._meilleur_fr = valeur;
    }


}