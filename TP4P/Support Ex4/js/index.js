/*
* constante declaration :
*  - NOMBRE_MAXIMALE_NOTE : the number of note max to 4 to be easy to change it in the future
* */
const NOMBRE_MAXIMALE_NOTE = 4;
let BTN_AJOUTER_NOTE_EXIST = 1;


// delete all the student from the table
//get by class name e all the supprimer btn
let supprimerBtn = document.getElementsByClassName("supprimer");
for (let i of supprimerBtn) {
    i.parentElement.parentElement.remove();
}

/*
* declaration of the class Etudiant :
* */
class Etudiant {
    #Nom = "";
    #Prenom = "";
    #DateNaissance = "";
    #Filiere = "";
    #Email = "";
    #Tel = "";
    #Note = [];
    #Moyenne = 0.0;

    get Email() {
        return this.#Email;
    }

    set Email(value) {
        this.#Email = value;
    }

    constructor(Nom, Prenom, DateNaissance, Filiere, email, Tel, Note) {
        this.#Nom = Nom;
        this.#Prenom = Prenom;
        this.#DateNaissance = DateNaissance;
        this.#Filiere = Filiere;
        this.#Email = email;
        this.#Tel = Tel;

        this.#Note = Note;
        this.#Moyenne = (() => {
            let sum = 0;
            this.#Note.map((i) => {
                sum += parseFloat(i);
            });
            return sum / this.#Note.length;
        })();
    }


    // getter and setter
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

    //function to validate the nom and prenom
    static NomPrenomValid(val) {
        return val.length >= 3;
    }

    //function to validate the email

    static EmailValid(val) {
        if (val == "") return 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val);
    }

    //function to validate the note
    static NoteValid(val) {
        if (val == "") return 0;
        if (val >= 0 && val <= 20) {
            return 1;
        } else return 0;
    }

    //function to validate the date
    static DateValid(val) {

        if (val == "") return 0;
        let d = new Date(val);
        let date = Date.now()
        let age = (date - d) / (1000 * 60 * 60 * 24 * 365);
        if (age > 18) return 1; else return 0;
    }

    //function to validate the phone number
    static TelValid(val) {
        if (val == "") return 0;
        const regex = /^06\d{8}$/;
        return regex.test(val);
    }

    static FiliereValid(val) {
        if (val == "") return 0;
        if (val.length < 3) return 0; else return 1;
    }

    //function to string the Etudiant

    toString() {
        return `Nom: ${this.#Nom} Prenom: ${this.#Prenom} DateNaissance: ${this.#DateNaissance} Filiere: ${this.#Filiere} Tel: ${this.#Tel} Note: ${this.#Note} Moyenne: ${this.#Moyenne}`;
    }
}

// add event listener to the form to validate the inputs
nom.addEventListener("keyup", function (e) {
    if (Etudiant.NomPrenomValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});
prenom.addEventListener("input", function (e) {
    if (Etudiant.NomPrenomValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});
email.addEventListener("input", function (e) {
    if (Etudiant.EmailValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});

dateNaissance.addEventListener("input", function (e) {
    if (Etudiant.DateValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";

});
tel.addEventListener("input", function (e) {
    if (Etudiant.TelValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});
filiere.addEventListener("input", function (e) {
    if (Etudiant.FiliereValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});


// function validate all inputs note and calculate the moyenne
function validateNotes() {
    let noteInputs = document.getElementsByClassName("note");
    for (let i of noteInputs) {
        i.addEventListener("input", function (e) {
            if (Etudiant.NoteValid(e.target.value)) {
                e.target.className = "success";
                // we call the function to calculate the moyenne evrey time we change the note by a valid value
                calculateAndChangeMoyeene();
                // enable the button ajouter
                if (BTN_AJOUTER_NOTE_EXIST===1)
                    document.getElementById("ajouterNote").disabled = false;
            } else {
                e.target.className = "failed";
                // disable the button ajouter
                if (BTN_AJOUTER_NOTE_EXIST===1)
                    document.getElementById("ajouterNote").disabled = true;
            }
        });
    }
}

validateNotes();

// disable the property copy and paste for all inputs
let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("copy", (e) => {
        e.preventDefault();
    });
    input.addEventListener("paste", (e) => {
        e.preventDefault();
    });
});

/*
 * Exigences pour la fonctionnalité note :
 * algorithm de session :
 * * function to create champ of note and btn to add and btn to delete
 * * * Add butun to delete the last note on click delete the last input
 * * * create delete btn all times
 * * Add event when the  note all field validate enable btn add and diable the field input note
 * * Add butun to delete the last note
 * * when we click add :
 * * * disable

 */

// this variable present the number of note input
let nbActuelNotes = 1;


/*
* this funcation ajouterChampNote:
* * add a new input note and a btn to delete the last input note
* * validate the note input and calculate the moyenne
*/


function ajouterChampNote(e) {
    if (nbActuelNotes < NOMBRE_MAXIMALE_NOTE) {
        let divNote = document.getElementById("divNote").lastElementChild.previousElementSibling;
        let inputNote = document.createElement("input");
        inputNote.type = "number";
        inputNote.className = "note";
        inputNote.name = "note";
        divNote.after(inputNote);
        ajouterBtnDeleteNote(inputNote);
        validateNotes();
        nbActuelNotes++;
    } else {
        e.target.remove();
    }
}

/*
* this funcation ajouterBtnDeleteNote:
* * add a new btn to delete the last input note
* * this function is called when we add a new input note
* * It is used to Help obtimize the code from the repetition of the code
* */
function ajouterBtnDeleteNote(e) {
    let btnDelete = document.createElement("button");
    btnDelete.innerText = "X";
    btnDelete.className = "btnDeleteInputNote";
    btnDelete.style.background = "red";
    btnDelete.addEventListener("click", deleteNoteNodeInput);
    e.after(btnDelete);
    AJOUTER_BTN_ADD_NOTE();
}


/*
* we add the first btn to delete the first input note that is created by default
* */
ajouterBtnDeleteNote(document.getElementById("divNote").firstElementChild.nextElementSibling);
ajouterNote.addEventListener("click", ajouterChampNote);

function AJOUTER_BTN_ADD_NOTE(){
    if (BTN_AJOUTER_NOTE_EXIST === 0 ){
        let btnAjouterNote = document.createElement("button");
        btnAjouterNote.innerText = "+";
        btnAjouterNote.id = "ajouterNote";
        btnAjouterNote.addEventListener("click", ajouterChampNote);
        document.getElementById("divNote").lastElementChild.after(btnAjouterNote);
        BTN_AJOUTER_NOTE_EXIST = 1;
    }
}
/*
* function deleteNoteNodeInput:
* * delete the input note and the btn delete
* * if the number of note input is less than the max number of note input we add the btn ajouter because we delete it when we reach the max number of note input
* */
function deleteNoteNodeInput(e) {
    let confirmDelete = confirm("Voulez vous supprimer cette note ?");
    if (confirmDelete) {
        e.target.previousElementSibling.remove();
        e.target.remove();
        nbActuelNotes--;
    }
    AJOUTER_BTN_ADD_NOTE();
}

/*
* function calculateAndChangeMoyeene:
* * calculate the moyenne and change the value of the input moyenne
*  * also this funcation used to help obtimize the code from the repetition of the code
 */
function calculateAndChangeMoyeene() {
    let notes = divNote.getElementsByTagName("input");
    let moyenne = 0;
    for (let i of notes) moyenne += parseInt(i.value);
    moyenne /= notes.length;
    document.getElementById("moyenne").value = moyenne;
}

//get all notes input
function getNotes() {
    let notes = divNote.getElementsByTagName("input");
    let notesArray = [];
    for (let i of notes) notesArray.push(i.value);
    return notesArray;
}



/*
* Know we move next step : validation of the form on submit
 */
let MODEFIED_BUTTON_WAS_CLICED = 0;
let EtudiantToModefier = "";

function validateData() {
    let Etu = {
        Nom: nom.value,
        Prenom: prenom.value,
        DateNaissance: dateNaissance.value,
        Email: email.value,
        Filiere: filiere.value,
        Tel: tel.value,
        Note: getNotes()
    }
    let etudiant = new Etudiant(Etu.Nom, Etu.Prenom, Etu.DateNaissance, Etu.Filiere, Etu.Email, Etu.Tel, Etu.Note);
    let errorMessage = "";
    let errorCode = 0;
    for (let key in Etu) {
        switch (key) {
            case "Nom":
                if (!Etudiant.NomPrenomValid(Etu[key])) {
                    errorMessage += "Nom should be more than 2 letters\n";
                    nom.className = "failed";
                    errorCode++;
                }
                break;
            case "Prenom":
                if (!Etudiant.NomPrenomValid(Etu[key])) {
                    errorMessage += "Prenom should be more than 2 letters\n";
                    prenom.className = "failed";
                    errorCode++;
                }
                break;
            case "DateNaissance":
                if (!Etudiant.DateValid(Etu[key])) {
                    errorMessage += "DateNaissance should be more than 18 years\n";
                    dateNaissance.className = "failed";
                    errorCode++;
                }
                break;
            case "Filiere":
                if (!Etudiant.FiliereValid(Etu[key])) {
                    errorMessage += "Filiere should be more than 3 letters \n";
                    filiere.className = "failed";
                    errorCode++;
                }
                break;
            case "Tel":
                if (!Etudiant.TelValid(Etu[key])) {
                    errorMessage += "Tel should be 10 numbers \n";
                    tel.className = "failed"
                    errorCode++;
                }
                break;
            case "Note":
                for (let i of Etu[key]) {
                    if (!Etudiant.NoteValid(i)) {
                        errorMessage += "Note should be between 0 and 20 \n";
                        errorCode++;
                        break;
                    }
                }
                break;
        }
    }
    if (errorCode === 0) {
        ajouterEtudiant(etudiant);
        alert("Student added successfully");
    } else {
        alert(errorMessage);
    }
}

function ModifierEtudiant(e) {
    MODEFIED_BUTTON_WAS_CLICED = 1
    /*get all the champ of the row */
    let tr = e.target.parentElement.parentElement;
    let tabElements = tr.getElementsByTagName("td");
    let EtudientModify = tr;
    //Nom, Prenom, DateNaissance, Filiere, email, Tel, Note

    let etuidant = new Etudiant(tabElements[0].innerText, tabElements[1].innerText, tabElements[2].innerText, tabElements[3].innerText, tabElements[4].innerText, tabElements[5].innerText, tabElements[6].innerText.split(","));
    nom.value = etuidant.Nom;
    prenom.value = etuidant.Prenom;
    dateNaissance.value = etuidant.DateNaissance;
    filiere.value = etuidant.Filiere;
    email.value = etuidant.Email;
    tel.value = etuidant.Tel;
    let notes = divNote.getElementsByTagName("input");
    // delete the input notes that we don't need
    while (notes.length > etuidant.Note.length) {
        notes[notes.length - 1].previousElementSibling.remove();
        notes[notes.length - 1].remove();
        nbActuelNotes--;
        AJOUTER_BTN_ADD_NOTE();
    }
    // add the input notes that we need
    while (notes.length < etuidant.Note.length) {
        AJOUTER_BTN_ADD_NOTE();
        ajouterChampNote(ajouterNote);
    }

    // add the notes to the input notes
    for (let i = 0; i < notes.length; i++) {
        notes[i].value = etuidant.Note[i];
    }

    submitBtn.value = "Modifier";
    EtudiantToModefier = EtudientModify;
}

// function to add etudiant to the table
function ajouterEtudiant(et) {
    if (MODEFIED_BUTTON_WAS_CLICED === 0) {
        let tbody = tableEtudiants.getElementsByTagName("tbody")[0];
        let tr = document.createElement("tr");
        let tdNom = document.createElement("td");
        tdNom.innerText = et.Nom;
        let tdPrenom = document.createElement("td");
        tdPrenom.innerText = et.Prenom;
        let tdDateNaissance = document.createElement("td");
        tdDateNaissance.innerText = et.DateNaissance;
        let tdFiliere = document.createElement("td");
        tdFiliere.innerText = et.Filiere;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = et.Email;
        let tdTel = document.createElement("td");
        tdTel.innerText = et.Tel;
        let tdNote = document.createElement("td");
        tdNote.innerText = et.Note;
        let tdMoyenne = document.createElement("td");
        tdMoyenne.innerText = et.Moyenne;
        //create the delete button
        let tdAction = document.createElement("td");
        let btnModifier = document.createElement("button");
        btnModifier.innerText = "Modifier";
        btnModifier.className = "modifier";
        btnModifier.style.marginRight = "5px";
        btnModifier.style.backgroundColor = "green";
        btnModifier.addEventListener("click", ModifierEtudiant);
        let btnDelete = document.createElement("button");
        btnDelete.innerText = "X";
        btnDelete.className = "supprimer";
        btnDelete.style.backgroundColor = "red";
        btnDelete.addEventListener("click", function (e) {
            e.target.parentElement.parentElement.remove();
        });
        tdAction.appendChild(btnModifier);
        tdAction.appendChild(btnDelete);
        tr.append(tdNom);
        tr.append(tdPrenom);
        tr.append(tdDateNaissance);
        tr.append(tdFiliere);
        tr.append(tdEmail);
        tr.append(tdTel);
        tr.append(tdNote);
        tr.append(tdMoyenne);
        tr.append(tdAction);
        tbody.appendChild(tr);
        resetForm();
    } else {
        console.log("modefied was clicked");
        console.log(EtudiantToModefier);
        EtudiantToModefier= EtudiantToModefier.childNodes;
        console.log(EtudiantToModefier);
        EtudiantToModefier[0].innerText = et.Nom;
        EtudiantToModefier[1].innerText = et.Prenom;
        EtudiantToModefier[2].innerText = et.DateNaissance;
        EtudiantToModefier[3].innerText = et.Filiere;
        EtudiantToModefier[4].innerText = et.Email;
        EtudiantToModefier[5].innerText = et.Tel;
        EtudiantToModefier[6].innerText = et.Note+"";
        EtudiantToModefier[7].innerText = et.Moyenne+"";
        resetForm();
        MODEFIED_BUTTON_WAS_CLICED = 0;
    }

}

// function to reset the form
function resetForm() {
    nom.value = "";
    prenom.value = "";
    dateNaissance.value = "";
    filiere.value = "";
    email.value = "";
    tel.value = "";
    moyenne.value = "";
    let notes = divNote.getElementsByTagName("input");
    for (let i = 0; i < notes.length; i++) {
        notes[i].value = "";
    }
}

/*
* this code to enable the sbmit button when all the input are valid
* */
formEtudiant.addEventListener("submit", function (e) {
    e.preventDefault();
    validateData();
});