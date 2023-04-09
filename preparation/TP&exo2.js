const NombreNotes=5;
function Etudiant ( nom ,notes ){
    this.nom=nom;
    this.notes=notes;
}
// caculate somme
Etudiant.prototype.calculerMoyenne=function (){
    let somme=0;
    this.notes.map((e)=>{
        somme+=e;
    });
    return somme/this.notes.length;
}
let et =new Etudiant("mohed",[2,1,2])


Etudiant.prototype.afficherEt=function (){
     return "Etudiant : Nom : "+this.nom+ " Notes : "+
         this.notes+" Moyenne : "+this.calculerMoyenne().toFixed(2);
}
function creerEtudiants(tabNom)
{
    let EtTab =[];
    tabNom.map((e)=>{
        let tabNote=new Array(NombreNotes);
        tabNote.fill(0);
       tabNote = tabNote.map(()=>{
            return Math.round(Math.random()*20*100)/100;
        });
        console.log(tabNote);
        EtTab.push(new Etudiant(e,tabNote));
    });
    return EtTab;
}
function calculMinMax(tabObj){
    let minMoyenne = Number.MAX_VALUE;
    let maxMoyenne=Number.MIN_VALUE;
    tabObj.map((e)=>{
         if (minMoyenne> e.calculerMoyenne())
             minMoyenne=e.calculerMoyenne();
         if (maxMoyenne<e.calculerMoyenne())
             maxMoyenne=e.calculerMoyenne();
        }
    );
    console.log(minMoyenne);
    return {"Min":minMoyenne,"Max":maxMoyenne};
}
let nameTab=["med","med","kk"];
function alterData(nameTab){
    let st="++++++++++++++++++++ Etudiants ++++++++\n";
    let TabEt=creerEtudiants(nameTab);
    TabEt.map((e)=>{
        st+=e.afficherEt()+"\n";
    });
    let minMax=calculMinMax(TabEt);
    st+="\n La moyeene Maximal :"+minMax.Max.toFixed(2)+" la moyeene Minimal :"+minMax.Min.toFixed(2);
    alert(st);
}
alterData(nameTab);
