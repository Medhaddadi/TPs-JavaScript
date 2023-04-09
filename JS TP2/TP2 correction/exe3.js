// une fonction qui génère x chiffre de manière aléatoire sans doublons.
function generat_random(x){
  let tab = new Array();
  var i;
  i=0;
  while(i<x){
    var a = Math.round(Math.random() * 9);
    var index=tab.indexOf(a);
    if(index==-1){
      tab.push(a);
      i++;
    }
  }
  console.log(tab)
  return tab;

}

function compareNbr(tab1, tab2){
  var a=0; //le nbre de chiffres qui existent dans les deux tableaux et qui ont le meme emplacement
  var b=0; //le nbre de chiffres qui existent dans les deux tableaux mais n'ont pas le meme emplacement
  let l = Math.min(tab1.length, tab2.length);
  for(var i=0;i<l;i++){
     if(tab1[i]==tab2[i]){
       a++;
     }
  }
  for(var i=0;i<l;i++){
    if((tab1[i] in tab2) && (tab1[i]!=tab2[i])){
      b++;
    }
  }
  tab=[a,b];
  console.log(a);
  console.log(b);
  return tab;


}

function getScore(diff,tries){
  var score=0;
  if(diff=="Facile"){
    score=(20-tries)*3;
  }
  if(diff=="Moyen"){
    score=(15-tries)*10;
  }
  if(diff=="Difficile"){
    score=(10-tries)*20;
  }
  return score;
}
function main(){
   var arr=generat_random(4);
   var diff = prompt("Choisir un niveau de difficulté : ")
   var n=prompt("devinez un nombre de 4 chiffres : ");
   var nom = prompt("Votre nom : ")
   var prenom = prompt("Votre prenom : ")
   const joueur={
     nom:nom,
     prenom:prenom
   };
   // Getting the string as a parameter
   // and typecasting it into an integer
   let myFunc = num => Number(num);
   var devineArr = Array.from(String(n), myFunc);
   //on compare alors le nombre devine devinArr ou n au nombre genere aleatoirement par le programme
   var tab = compareNbr(devineArr, arr);
   var tentat=1;
   while(true){
       if(tab[0]==4){
         console.log("Bravo! vous avez devinez ne nombre après "+tentat+" tentatives")
         console.log("Votre Score est : "+getScore(diff,tentat))
         console.log("Bonjour "+joueur.nom+" "+joueur.prenom+", vous avez choisi le niveau «"+diff+"» et bravo vous avez gagné avecun score de "+getScore(diff,tentat))
         break;
       }
       else{
         console.log("le nbre de chiffres qui existent dans les deux tableaux et qui ont le meme emplacement : "+tab[0]);
         console.log("le nbre de chiffres qui existent dans les deux tableaux et qui ont pas le meme emplacement : "+tab[1]);
         n=prompt("devinez un nombre de 4 chiffres : ");
         devineArr = Array.from(String(n), myFunc);
         tab = compareNbr(devineArr, arr);
         console.log(arr);
         tentat++;
       }
   }
}

main();
