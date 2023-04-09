// var tab =new Array();
// var i=0;
// function ajouterPersonne(){
//   var name = prompt("Enter a name : ");
//   tab[i]=name;
//   i++;
//   console.log(tab)
// }
// function addUsers(){
//   var name = prompt("Enter a name : ");
//   tab[i]=name;
//   i++;
//   while(confirm("You want to add an other name ?")==true){
//     ajouterPersonne()
//   }
// }
//
// function tirerPersonne(){
//    var rand = Math.floor(Math.random()*tab.length-1);
//    var rName = tab[rand];
//    console.log(rName)
// }


var tab =new Array();
var i=0;
function ajouterPersonne(){
  var name = prompt("Enter a name : ");
  tab[i]=name;
  i++;
  console.log(tab)
}
function tirerPersonne(){
   var rand = Math.floor(Math.random()*tab.length-1);
   var rName = tab[rand];
   console.log(rName)
}
