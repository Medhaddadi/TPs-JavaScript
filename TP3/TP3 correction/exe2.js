class Cycliste{
  #matricule;
  #nom;
  #scor;
  constructor(matricule,nom, score ) {
      this.#matricule = matricule;
      this.#nom = nom;
      this.#scor = score;
  }
  affichage(){
    return "Matricule : "+this.#matricule+"-Nom : "+this.#nom+"-Score : "+this.#scor
  }
  get matricule(){
     return this.#matricule;
  }
  set matricule(value){
      this.#matricule = value
  }
  get nom(){
     return this.#nom;
  }
  set nom(value){
       this.#nom = value;
  }
  get score(){
      return this.#scor;
  }
  set score(value){
      this.#scor = value;
  }
}





class Classement{
  listCycliste=[];
  n;
  addCycliste(cycliste){
     this.listCycliste.push(cycliste);
  }
  recompenseCycliste(){
    var liste = this.listCycliste.sort(function(a, b){return b.score - a.score});
    return liste;
  }
  disqualification(matricule){
    var newArr = this.listCycliste.filter(obj => obj.matricule != matricule);
    this.listCycliste = newArr;
  }
  affichage(){
    var liste = this.recompenseCycliste();
    for(var i=0;i<liste.length;i++){
      console.log(liste[i].affichage());
    }
  }
}

function main(){
  var classement = new Classement();
  var obj1 = new Cycliste(1,"mohammed",10);
  var obj2 = new Cycliste(2,"noura",15);
  var obj3 = new Cycliste(3,"abdeslam",11);
  classement.addCycliste(obj1);
  classement.addCycliste(obj2);
  classement.addCycliste(obj3);
  classement.affichage();
  classement.disqualification(1);
  console.log("apres suppression");
  classement.affichage();

}
