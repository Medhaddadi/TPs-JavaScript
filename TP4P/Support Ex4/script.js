/*
class Etudiant {
    #Nom = "";
    #Prenom = "";
    #DateNaissance = "";
    #Filiere = "";
    #Tel = "";
    #Note = [];
    #Moyenne = 0.0;


    get Nom() {
        return this.#Nom;
    }

    set Nom(value) {
        this.#Nom = value;
    }

    get Prenom() {
        return this.#Prenom;
    }

    set Prenom(value) {
        this.#Prenom = value;
    }

    get DateNaissance() {
        return this.#DateNaissance;
    }

    set DateNaissance(value) {
        this.#DateNaissance = value;
    }

    get Filiere() {
        return this.#Filiere;
    }

    set Filiere(value) {
        this.#Filiere = value;
    }

    get Tel() {
        return this.#Tel;
    }

    set Tel(value) {
        this.#Tel = value;
    }

    get Note() {
        return this.#Note;
    }

    set Note(value) {
        this.#Note = value;
    }

    get Moyenne() {
        return this.#Moyenne;
    }

    set Moyenne(value) {
        this.#Moyenne = value;
    }

    constructor(Nom, Prenom, DateNaissance, Filiere, Tel, Note) {
        this.#Nom = Nom;
        this.#Prenom = Prenom;
        this.#DateNaissance = DateNaissance;
        this.#Filiere = Filiere;
        this.#Tel = Tel;
        this.#Note = Note;
    }

    calculateMoyeene() {
        let somme = 0;
        this.#Note.map((i) => {
                somme += i;
            }
        )
        this.#Moyenne = somme;
    }
}

class validation {
    static NomPrenomValid(val) {
        if (val == "") return 0;
        if (val.length < 2)
            return 0;
        else return 1;
    }

    static EmailValid(val) {
        if (val == "") return 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val);
    }

    static NoteValid(val) {
        if (val == "") return 0;
        if (val > 0 && val < 20)
            return 1;
        else return 0;
    }

    static DateValid(val) {
        console.log(val);
        if (val == "") return 0;
        let d = Date(val);
        let date = Date.now() - val;
        if (date > 0) {
            if (date > 1000 * 60 * 60 * 24 * 365 * 18)
                return 1;
            else return 0;
        } else return 0;
    }

    static TelValid(val) {
        if (val == "") return 0;
        const regex = /^06\d{8}$/;
        return regex.test(val);
    }

    static FiliereValid(val) {
        if (val == "") return 0;
        if (val.length < 3)
            return 0;
        else return 1;
    }
}

function addStudentToTable(student) {
    let trElem = document.createElement("tr");
    let tdElem = document.createElement("td");
    tdElem.innerText = student.getNom();
    trElem.append(tdElem);
    tdElem.innerText = student.getPrenom();
    trElem.append(tdElem);
    tdElem.innerText = student.getDateNaissance();
    trElem.append(tdElem);
    tdElem.innerText = student.getFiliere();
    trElem.append(tdElem);
    tdElem.innerText = student.getTel();
    trElem.append(tdElem);
    tdElem.innerText = student.getNote();
    trElem.append(tdElem);
    tdElem.innerText = student.getMoyenne();
    trElem.append(tdElem);
    let btn = document.createElement("button");
    btn.innerText = "Modifier";
    btn.className = "modifier";
    tdElem.append(btn);
    btn.innerText = "Supprimer";
    btn.className = "supprimer";
    tdElem.append(btn);
    trElem.append(tdElem);
    tableEtudiants.lastChild.lastChild.after(trElem);
}

function deleteStudent(elem) {
    elem.parent.remove();
}

nom.addEventListener("input", function (e) {
    if (validation.NomPrenomValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";
});
prenom.addEventListener("input", function (e) {
        if (validation.NomPrenomValid(e.target.value))
            e.target.className = "success";
        else e.target.className = "failed";
    }
);
email.addEventListener("input", function (e) {
    if (validation.EmailValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";
});

dateNaissance.addEventListener("input", function (e) {
    if (validation.DateValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";

});
tel.addEventListener("input", function (e) {
    if (validation.TelValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";
});
filiere.addEventListener("input", function (e) {
    if (validation.FiliereValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";
});
note1.addEventListener("input", function (e) {
    if (validation.NoteValid(e.target.value))
        e.target.className = "success";
    else e.target.className = "failed";
});
// list , set , map
let map =new Map()


function validatwData() {
    let Etu = {
        Nom: nom.value,
        Prenom: prenom.value,
        DateNaissance: dateNaissance.value,
        Filiere: filiere.value,
        Tel: tel.value,
        Note: [note1.value]
    }
    let errorMessage = "";
    let errorCode = 0;
    for (let key in Etu) {
        console.log(key);
        switch (key) {
            case "Nom":
                if (!validation.NomPrenomValid(Etu[key])) {
                    errorMessage += "Nom should be more than 2 letters\n";
                    nom.className="failed";
                }
                break;
            case "Prenom":
                if (!validation.NomPrenomValid(Etu[key])) {
                    errorMessage += "Prenom should be more than 2 letters\n";
                    prenom.className="failed";
                }
                break;
            case "DateNaissance":
                if (!validation.DateValid(Etu[key])) {
                    errorMessage += "DateNaissance should be more than 18 years\n";
                    dateNaissance.className="failed";
                }
                break;
            case "Filiere":
                if (!validation.FiliereValid(Etu[key])) {
                    errorMessage += "Filiere should be more than 3 letters \n";
                    filiere.className="failed";
                }
                break;
            case "Tel":
                if (!validation.TelValid(Etu[key])) {
                    errorMessage += "Tel should be 10 numbers \n";
                    tel.className="failed"
                }
                break;
            case "Note":
                if (!validation.NoteValid(Etu[key])) {
                    errorMessage += "Note should be between 0 and 20 \n";
                }
                break;
            default: {
                errorCode = 1;
            }
                break;
        }
    }
    if (errorCode === 1) {
        alert("Student added successfully");
    } else {
        alert(errorMessage);
    }
    console.log()
}

formEtudiant.addEventListener("submit", function (e) {
    e.preventDefault();
    validatwData();
});

let nombreNote=1;
ajouterNote.addEventListener("click" ,function (e){
    nombreNote+=1;
    if(nombreNote<=3){
        let btn=document.createElement("input");
        btn.type="number";
        btn.name="note";
        btn.id="note"+nombreNote;
    }

});*/

let testttt=filiere.cloneNode();
console.log(testttt);