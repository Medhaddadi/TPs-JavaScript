class Personnage{
    #Nom="";
    #Niveau="";
    #Pv=0;
    #PM=0;
    #Competence=[]
    get Competences() {
        return this.#Competence;
    }

    set Competences(value) {
        this.#Competence.push(value);
    }

    constructor(nom="",Niveau="",Pv=0,PM=0) {
        this.#PM=PM;
        this.#Pv=Pv;
        this.#Niveau=Niveau;
        this.#Nom=nom;
   }
    get Nom() {
        return this.#Nom;
    }

    set Nom(value) {
        this.#Nom = value;
    }

    get Niveau() {
        return this.#Niveau;
    }

    set Niveau(value) {
        this.#Niveau = value;
    }

    get Pv() {
        return this.#Pv;
    }

    set Pv(value) {
        this.#Pv = value;
    }

    get PM() {
        return this.#PM;
    }
     affichage(){
        return `${this.#Nom} (${this.#Niveau}), x ${this.#Pv}, x ${this.#PM} [${this.#Competence}] `
     }
    set PM(value) {
        this.#PM = value;
    }

    diminuerPv(n){
       if ( this.#Pv-n>0)
         this.#Pv-=n;
       else
         alert("rien Pv")
    }
    diminuerPM(n){
        if ( this.#Pv-n>0)
            this.#Pv-=n;
        else
            alert("rien PM")
    }
    augmenterPv(n){
        this.#Pv+=n;
    }
    augmenterPM(n){
        this.#PM+=n;
    }


}


class Groupe{
  #listPersonnages=[];
  ajouterPersonnages(Person){
      this.#listPersonnages.push(Person);
  }
  supprimerPersonnages(Person){
      this.#listPersonnages.map(
          (v)=>
          {
              if (Person.Nom===v.Nom)
              {
                  let i=this.#listPersonnages.indexOf(v);
                  this.#listPersonnages.splice(i,1);
              }
          }
      );
    }

    get listPersonnages() {
        return this.#listPersonnages;
    }

    plusFort(){
      let p=this.#listPersonnages[0];
      this.#listPersonnages.map(
          (v)=>{
             if (p.Pv<v.Pv && p.PM <v.PM)
                 p=v;
          }
      )
        return p;
    }

    affich(){
      let s="";
      this.#listPersonnages.map(
          (v)=>
          {
             s+= v.affichage();
          }
      );
        return s;
    }

}

let p=new Personnage("d","d",3,4)
p.Competences="med";
p.Competences="dede";


let p2=new Personnage("dv","dv",3,4)
p2.Competences="mved";
p2.Competences="devde";


let gr=new Groupe();
gr.ajouterPersonnages(p);
gr.ajouterPersonnages(p2);
gr.affich();
console.log(gr.affich())