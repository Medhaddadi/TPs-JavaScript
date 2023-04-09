var nomEtudiant = ["Dupont", "Durand", "Petit", "Martin",
    "Legrand", "Lacroix"];

var notes = [[10, 12, 18, 5, 9, 13],[13, 11, 14, 7, 14, 16],[0,
    14, 14, 12, 8, 20]];

// nom, tableau des notes et moyenne
var Etudiant=function (nom,notesTab){
    this.nom=nom;
    this.notes=notesTab;
    this.affichage=function ()
    {
        return `Les notes de <<${this.name}>> sont : ${this.notes} et sa moyennes = ${this.moyene()} `;
    }
}
Etudiant.prototype.moyene=function (){
    let  somme=0;
    for (let n of this.notes) {
        somme+=n;
    }
    return somme/this.notes.length;
};
Etudiant.prototype.creerEtudiant=function (tabNom, tabNotes){
    let tab=[];
    for (let i = 0; i < tabNom.length; i++) {
        let et=new  Etudiant(tabNom[i],Array (tabNotes[0][i],tabNotes[1][i],tabNotes[2][i] ));
        tab.push(et);
    }
    return tab;
}

Etudiant.prototype. calculMinMax=function (data){

    let etMin =new Etudiant("",[0,0,0]);
    Object.assign(etMin,data[0]);
    let etMax =new Etudiant("",[0,0,0]);;
    for (let et of data){
        if (et.moyene()<etMin.moyene()){
            Object.assign(etMin,et);
        }
        if (et.moyene()>etMax.moyene())
        {
            Object.assign(etMax,et);
        }
    }
    return  { "min": etMin,"max":etMax};
}
Etudiant.prototype.alertData=function ()
{
    let data=Etudiant.prototype.creerEtudiant(nomEtudiant,notes);
    let minmax=Etudiant.prototype.calculMinMax(data);
    alert(`La note minimal est ${minmax['min'].moyene()} est c’est << ${minmax['min'].nom} >> \n La note maximal est ${minmax['max'].moyene()} est c’est <<  ${minmax['max'].nom}  >>`)
}

Etudiant.prototype.alertData();
