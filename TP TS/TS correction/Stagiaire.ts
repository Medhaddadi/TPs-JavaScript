export default class Stagiaire {
  private _nom: string;
  private _note: Array<number>;

  constructor(nom: string, note: Array<number>) {
    this._nom = nom;
    this._note = note;
  }
  get nom(): string {
    return this._nom;
  }
  get note(): Array<number> {
    return this._note;
  }
  set nom(nom: string) {
    this._nom = nom;
  }
  set note(note: Array<number>) {
    this._note = note;
  }

  calculerMoyenne(): number {
    return this._note.reduce((a, b) => a + b, 0) / this._note.length;
  }

  trouverMax(): number {
    //return Math.max(...this._note);

    return this._note.reduce((a, b) => {
      if (a < b) return b;
      else return a;
    });
  }

  trouverMin(): number {
    return Math.min(...this._note);
  }
}
