
let personnes=[]
function ajouterPersonne(){
  let person=prompt("les personnes :"+personnes+"\n donnez le nom de person ajouter : ");
  personnes.push(person);
}

function tirerPersonne(){
    let person=personnes[Math.floor(Math.random()*personnes.length)]

    alert(" Le person Tire est :"+person);
}


