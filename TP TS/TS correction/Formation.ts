import Stagiaire from "./Stagiaire";

export default class Formation {
  constructor(
    private _intitule: string,
    private _nbrJours: number,
    private _stagiaires: Array<Stagiaire>
  ) {}

  get intitule(): string {
    return this._intitule;
  }
  set intitule(intitule: string) {
    this._intitule = intitule;
  }
  get nbrJours(): number {
    return this._nbrJours;
  }
  set nbrJours(nbrJours: number) {
    this._nbrJours = nbrJours;
  }
  get stagiaires(): Array<Stagiaire> {
    return this._stagiaires;
  }
  set stagiaires(stagiaires: Array<Stagiaire>) {
    this._stagiaires = stagiaires;
  }

  calculerMoyenneFormation(): number {
    return (
      this._stagiaires.reduce((a, b) => a + b.calculerMoyenne(), 0) /
      this._stagiaires.length
    );
  }

  getIndexMax(): number {
    let obj = this._stagiaires.reduce((a, b) => {
      if (a.calculerMoyenne() < b.calculerMoyenne()) return b;
      else return a;
    });
    return this._stagiaires.indexOf(obj);
  }

  afficherNomMax(): string {
    return this._stagiaires[this.getIndexMax()].nom;
  }

  afficherMinMax(): number {
    let indexMax = this.getIndexMax();
    return this._stagiaires[indexMax].trouverMin();
  }

  trouverMoyenneParNom(nom: string): number {
    let stagiaire = this._stagiaires.find((stagiaire) => stagiaire.nom === nom);
    return stagiaire.calculerMoyenne();
  }
}
