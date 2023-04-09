
function Etudiant(nom,notes){
    this.nom=nom;
    this.notes=notes;
}

Etudiant.prototype.calculerMoyenne=function (){
    let somme=0;
    this.notes.map(
        (i)=>{
            somme+=i;
        }
    )
    return somme/this.notes.length;
}

Etudiant.prototype.afficherEtudiant=function (){
    return `Les notes de ${this.nom} sont :[${this.notes}] et sa moyenne est ${this.calculerMoyenne() }`;
}

function creerEtudiants(tabNom){
    let etudiats=[];
    for (const elem of tabNom) {
        let  notes =[0,0,0,0,0].map(
            ()=>{
                return +Math.round( Math.random()*20* 100)/100;
            }
        )
        let et=new Etudiant(elem,notes);
        etudiats.push(et);
    }
    return etudiats;
}

function calculMinMax(tabObj){
    let  min=tabObj[0].calculerMoyenne();
    let  max=tabObj[0].calculerMoyenne();
    let  etMin =new Etudiant (tabObj[0].nom,tabObj[0].notes);
    let  etMax =new Etudiant (tabObj[0].nom,tabObj[0].notes);
    tabObj.map(
        (v)=>{
            let moy=v.calculerMoyenne();
            if (moy>max){
                max=moy;
                etMax =new Etudiant (v.nom,v.notes);
            }

            if (moy<min)
            {
                min=moy;
                etMin =new Etudiant (v.nom,v.notes);
            }
        }
    );
    console.log(etMin);
    console.log(etMax);
    return res=`La moyenne minimale est ${Math.round(etMin.calculerMoyenne()*100)/100} et c'est ${etMin.nom} qui l'a obtenue \n\n La moyenne maximale est ${Math.round(etMax.calculerMoyenne()*100)/100}  et c'est ${etMax.nom} qui l'a obtenue`;
}

console.log(calculMinMax(creerEtudiants(["med","ch","adil"])));

function alertData(tab){
    let  affich="";
    tab.map(
        (v)=>{
            affich+=v.afficherEtudiant()+"\n";
        }
    )
    affich+=calculMinMax(tab);
    alert(affich);
}
alertData(creerEtudiants(["med","ch","adil"]));
