let sports=[]
let  display=1;
function ajouter(elem){
    sports.push(elem);
}
function suppremer(elem){
    let  index=sports.indexOf(elem);
    if (index!==-1)
        sports.splice(index,1);
}

function afficher(){
     alert("votre tableau :"+sports);
}

function menu(n){
    switch (n){
        case 1:{
           let elem =prompt("donnez l'element : ");
           ajouter(elem);
        } break;
        case 2:
        {
            let elem=prompt(" donnez l'elemnet a supremer :");
            suppremer(elem);
        }break;
        case 3:{
            afficher();
        }break;
        case 4:{
            display=Number(alert("quitter ?"));
        }break;
        default:
            alert("veullier saisir un choix corect !!")
    }
}

function diaplayMenu(){
    let choix= Number(prompt(`votre tableau contient ${sports.length} \n quelle action voulez-vous effuctuer?\n 1.ajouter un elemnt \n 2.supremer un element \n 3.afficher ele tableau \n 4.quiter  `));
    menu(choix);
}
while (display===1){
    diaplayMenu();
}

