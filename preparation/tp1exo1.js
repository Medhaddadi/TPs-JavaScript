let sports = [];

function add(sp) {

    let go = true;
    while (go) {
        let elem = prompt("" +
            "Votre Tableau contient " + sp.length + " et : " + sp + "\n" + " 1. Ajouter un element \n 2. Supprimer un element \n 3. Afficher le tableau \n 4. Quitter");
        console.log(elem);
        switch (elem) {
            case "1": {
                let elemAdded = prompt("donnez l'element a ajouter : ");
                sp.splice(0, 0, elemAdded);
            }
                break;
            case "2": {
                let elemDelete = prompt("donnez elemnt a supremer");
                sp.splice(sp.indexOf(elemDelete.trim()), 1);
            }
                break;
            case "3": {
                alert(" les elements de tableau :" + sp);
            }
                break;
            case "4":
                go = false;
                break;
            default:
                alert("le choix sasir invalide !!");
        }
    }
}

add(sports);