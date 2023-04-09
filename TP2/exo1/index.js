let sports=["tennis", "basket", "foot"]
console.log(sports);

while (confirm("votre lsit de sport contient :"+sports+"\nVoulez-vous ajouter/supremer un elemen?")===true){
    let elem=prompt("Votre tableau contient :\n"+sports+"\n Veillez saisisr l'element a supremer !!").trim();
    if (sports.indexOf(elem)===-1){
        sports.push(elem);
    }else
        sports.splice(sports.indexOf(elem),1);
}