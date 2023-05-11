import getXhr from './utilities.js';

let modefierIsClicked = false;

function deleteStudent(e) {
    const xhr = getXhr();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            getAllEtudiant();
            if (xhr.responseText == 'success') {
                document.getElementById("succes").hidden = false;
                document.getElementById("succes").innerText = "Etudiant supprimé avec succès";
                setTimeout(() => {
                    document.getElementById("succes").hidden = true;
                }, 2000);
            } else {
                document.getElementById("failed").hidden = false;
                document.getElementById("failed").innerText = "Erreur lors de la suppression";
                setTimeout(() => {
                    document.getElementById("failed").hidden = true;
                }, 2000);

            }
        }
    });

    const dataform = new FormData();
    dataform.append("action", "supprimer");
    console.log(e.target.parentElement.parentElement.firstChild.innerText);
    dataform.append("id", e.target.parentElement.parentElement.firstChild.innerText);
    xhr.open("POST", "./php/traitement.php", true);
    xhr.send(dataform);
}

function addSudent() {
    const xhr = getXhr();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = document.getElementById('res');
            res.hidden = false;
            getAllEtudiant();
            if (xhr.responseText == 'success') {
                document.getElementById("succes").hidden = true;
                setTimeout(() => {
                    document.getElementById("succes").hidden = true;
                }, 3000);
            } else {
                document.getElementById("failed").hidden = true;
                setTimeout(() => {
                    document.getElementById("failed").hidden = true;
                }, 3000);

            }
        }
    });

    const dataform = new FormData(document.getElementById("formulaire"));

    dataform.append("action", "ajouter");

    xhr.open("POST", "./php/traitement.php", true);

    xhr.send(dataform);
    // create utudiant using ajax send request to data base etudiant
// ** get all student
// ** get datafrom and store in data base

}

//get all student from data base

// update student

function getAllEtudiant() {
    const xhr = getXhr();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = document.getElementById('res');
            res.hidden = false;
            displayEtudiants(JSON.parse(xhr.responseText));
        }
    });
    const dataform = new FormData();
    dataform.append("action", "afficherTous");
    xhr.open("POST", "./php/traitement.php", true);
    xhr.send(dataform);
}

//
ajouter.addEventListener('click', (e) => {
    e.preventDefault();
    if (modefierIsClicked == false) {
        addSudent();
    } else {
        modifierEtudient();


    }
});

function displayEtudiants(arrayStudents) {
    listStudent.innerText = '';
    console.log(arrayStudents);
    arrayStudents.map((e) => {
        listStudent.append(createEtudiant(e));
    });
}

function createEtudiant(arrayEtudiant) {
    console.log(arrayEtudiant);
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.scope = 'row';
    th.innerText = arrayEtudiant['id'];

    let td1 = document.createElement('td');
    td1.innerText = arrayEtudiant['nom'];

    let td2 = document.createElement('td');
    td2.innerText = arrayEtudiant['prenom'];

    let td3 = document.createElement('td');
    td3.innerText = arrayEtudiant['email'];

    let td4 = document.createElement('td');
    td4.innerText = arrayEtudiant['dateNaissance'];

    let td5 = document.createElement('td');
    td5.innerText = arrayEtudiant['filiere'];

    let td6 = document.createElement('td');
    let btn = document.createElement('button');
    btn.addEventListener('click', deleteStudent);
    td6.append(btn);
    btn.className = 'btn btn-danger';
    btn.innerText = 'supprimer';
    let btn1 = document.createElement('button');
    btn1.innerText = 'modifier';
    btn1.className = 'btn btn-primary';
    btn1.addEventListener('click', modifier);
    td6.append(btn, btn1);
    tr.append(th, td1, td2, td3, td4, td5, td6);
    return tr;
}

getAllEtudiant();


// delete student

function modifier(e) {
    modefierIsClicked = true;

    viewStudent(e);
}

function modifierEtudient() {
    const xhr = getXhr();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let res = document.getElementById('res');
            res.hidden = false;
            getAllEtudiant();
            if (xhr.responseText == 'success') {
                document.getElementById("succes").hidden = false;
                document.getElementById("succes").innerText = "Etudiant modifié avec succès";
                setTimeout(() => {
                    document.getElementById("succes").hidden = true;
                }, 3000);
            } else {
                document.getElementById("failed").hidden = false;
                document.getElementById("failed").innerText = "Erreur lors de la modification";
                setTimeout(() => {
                    document.getElementById("failed").hidden = true;
                }, 3000);

            }
        }
    });

    const dataform = new FormData(document.getElementById("formulaire"));


    dataform.append("action", "modifier");
    dataform.append('id', id.value);
    dataform.forEach((e) => {
        console.log(e);
    });
    xhr.open("POST", "./php/traitement.php", true);

    xhr.send(dataform);
    formulaire.reset();
    modefierIsClicked = false;
    // create utudiant using ajax send request to data base etudiant
}


function viewStudent(e) {
    let list = e.target.parentElement.parentElement.children;
    console.log(nom);
    nom.value = list[1].innerText;
    prenom.value = list[2].innerText;
    email.value = list[3].innerText;
    DOfbirth.value = list[4].innerText;
    filiere.value = list[5].innerText;
    id.value = list[0].innerText;
}