let player={
    compt :0,
    x:4,
    niv:"",
    nbTentativeMax:0,
    score:0,
    nom:"",
    prenom:"",
}
let niveau={
    facile:20,
    moyen:15,
    difficile:10
}
function initialiseNiveau(){
    let niveauName=document.getElementById("niveau").selectedIndex+1;
    console.log(niveauName);
    if (niveauName==1){
        player.niv="facile";
        player.nbTentativeMax=niveau.facile;
    }else if (niveauName==2){
        player.niv="moyen";
        player.nbTentativeMax=niveau.moyen;
    }else if (niveauName==3){
        player.niv="difficile";
        player.nbTentativeMax=niveau.difficile;
    }else{
        console.log("Je suis initialiseNiveau aucun niveau selectio !!!");
    }
}
function  generat_random(x) {
    let number=[];
    let i=0;
    while (i<x){
        let n=Math.floor(Math.random()*9);
        if (number.indexOf(n)===-1){
            number.push(n);
            i++;
        }

    }
    return number;

}
function compareNbr(tab1, tab2){
    let  ExistSame={
       CP:0,
       CnP:0
    }
    for (const elem of tab1) {
        if (tab2.indexOf(elem)!==-1){
            if (tab1.indexOf(elem)===tab2.indexOf(elem)){
                ExistSame.CP++;
            }else{
                ExistSame.CnP++;
            }
        }
    }
    return ExistSame;
}
function diaplayResultMessage(i){
    player.nom=prompt("donnez votre nom :");
    player.prenom=prompt("donnez votre prenom:");
    if (i==true){
        document.getElementById("result").innerHTML="Bonjour " + player.nom + " " + player.prenom + ", vous avez choisi le niveau « " + player.niv + " » et bravo vous avez gagné avec\n" +
            "un score de " + player.score;
        document.getElementById("result").className="alert alert-success";
    }else {
        document.getElementById("result").innerHTML="Bonjour " + player.nom + " " + player.prenom + ", vous avez choisi le niveau « " + player.niv + " » et désolé vous avez perdu ";
        document.getElementById("result").className="alert alert-danger";
    }

}
let numbreToFind=generat_random(player.x);
console.log(numbreToFind);
 function main(){
     if (player.compt==0){
         initialiseNiveau();
         document.getElementById("niveau").disabled;
     }
    let userNumber=String(document.getElementById("userNumber").value).split("").map(i=>Number(i));
    if (userNumber.length!==player.x){
        alert("Donez un numero de "+player.x+" character .")
    }else{

        let result=compareNbr(numbreToFind,userNumber);
        if (result.CP===player.x){
            getScore();
            alert("Felicitation!! ,vous avez terminer en "+player.compt+" tentative ! \n Votre Score :"+player.score);
            diaplayResultMessage(true);
        }else{
            if (player.compt<player.nbTentativeMax){
                console.log(player);
                let ResultMessage="le resultat est "+result.CP+" nombre correct ,and "+result.CnP+" nombre exist mais pas correctement placer !!\n vous rest : "+(player.nbTentativeMax-player.compt)+" tentive ";
                document.getElementById("textResult").innerText=ResultMessage;
                document.getElementById("userNumber").innerText="";
                player.compt++;
            }else {
                let ResultMessage="Il vous rest pas assez des tentative";
                document.getElementById("textResult").innerText=ResultMessage;
                diaplayResultMessage(false);
            }

        }

    }
 }

 function getScore(){
     let diff=player.niv;
     let tries=player.nbTentativeMax-player.compt;
   if (diff==="facile"){
       player.score=tries*3;
   }else if(diff==="moyen")
       player.score=tries*10;
   else
       player.score=tries*20;
   return player.score;
 }