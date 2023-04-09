//on cree d'abord les fils a ajouter
let li1 = document.createElement("li");
li1.innerHTML = "push";

let li2 = document.createElement("li");
li2.innerHTML = "Autre";


let ol = document.getElementById("quiz-response");
let li3 = ol.lastElementChild;

//ajouter li1 juste avant la puce append cad la puce li3
li3.before(li1);


//ajouter a la fin li2
ol.append(li2);
