/*
* constante declaration :
*  - NOMBRE_MAXIMALE_NOTE : the number of note max to 4 to be easy to change it in the future
* */
const NOMBRE_MAXIMALE_NOTE = 4;



/*
* declaration of the class Etudiant :
* */
class Etudiant {
    #Nom = "";
    #Prenom = "";
    #DateNaissance = "";
    #Filiere = "";
    #Tel = "";
    #Note = [];
    #Moyenne = 0.0;

    constructor(Nom, Prenom, DateNaissance, Filiere, Tel, Note) {
        this.#Nom = Nom;
        this.#Prenom = Prenom;
        this.#DateNaissance = DateNaissance;
        this.#Filiere = Filiere;
        this.#Tel = Tel;
        this.#Note = Note;
        this.#Moyenne = (() => {
            let sum = 0;
            this.#Note.map((i) => {
                sum += i;
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
        console.log(age);
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
    console.log(e.target.value);
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
function validateNotes(){
    let noteInputs = document.getElementsByClassName("note");
    for (let i of noteInputs) {
        i.addEventListener("input", function (e) {
            if (Etudiant.NoteValid(e.target.value)) {
                e.target.className = "success";
                // we call the function to calculate the moyenne evrey time we change the note by a valid value
                calculateAndChangeMoyeene();
                // enable the button ajouter
                document.getElementById("ajouterNote").disabled = false;
            } else {
                e.target.className = "failed";
                // disable the button ajouter
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
        alert("Vous avez atteint le nombre maximale de notes");
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
    btnDelete.style.background = "red";
    btnDelete.addEventListener("click", deleteNoteNodeInput);
    e.after(btnDelete);
}


/*
* we add the first btn to delete the first input note that is created by default
* */
ajouterBtnDeleteNote(document.getElementById("divNote").firstElementChild.nextElementSibling);
ajouterNote.addEventListener("click", ajouterChampNote);

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
    if (nbActuelNotes < NOMBRE_MAXIMALE_NOTE) {
        let btnAjouterNote = document.createElement("button");
        btnAjouterNote.innerText = "+";
        btnAjouterNote.id = "ajouterNote";
        btnAjouterNote.addEventListener("click", ajouterChampNote);
        document.getElementById("divNote").lastElementChild.after(btnAjouterNote);
    }
}

/*
* function calculateAndChangeMoyeene:
* * calculate the moyenne and change the value of the input moyenne
*  * also this funcation used to help obtimize the code from the repetition of the code
 */
function calculateAndChangeMoyeene(){
    let notes = divNote.getElementsByTagName("input");
    let moyenne = 0;
    for (let i of notes) moyenne += parseInt(i.value);
    moyenne /= notes.length;
    document.getElementById("moyenne").value = moyenne;
}

/*
* Know we move next step : validation of the form on submit
 */

function validateData() {
    let Etu = {
        Nom: nom.value,
        Prenom: prenom.value,
        DateNaissance: dateNaissance.value,
        Filiere: filiere.value,
        Tel: tel.value,
        Note: (
            function () {
                let notes = [];
                let inputsNotes = document.getElementsByClassName("note");
                for (let i of inputsNotes) notes.push(parseInt(i.value));
                return notes;
            }
        )(),
        moyenne: moyenne.value
    }
    let errorMessage = "";
    let errorCode = 0;
    for (let key in Etu) {
        switch (key) {
            case "Nom":
                if (!Etudiant.NomPrenomValid(Etu[key])) {
                    errorMessage += "Nom should be more than 2 letters\n";
                    nom.className = "failed";
                }
                break;
            case "Prenom":
                if (!Etudiant.NomPrenomValid(Etu[key])) {
                    errorMessage += "Prenom should be more than 2 letters\n";
                    prenom.className = "failed";
                }
                break;
            case "DateNaissance":
                if (!Etudiant.DateValid(Etu[key])) {
                    errorMessage += "DateNaissance should be more than 18 years\n";
                    dateNaissance.className = "failed";
                }
                break;
            case "Filiere":
                if (!Etudiant.FiliereValid(Etu[key])) {
                    errorMessage += "Filiere should be more than 3 letters \n";
                    filiere.className = "failed";
                }
                break;
            case "Tel":
                if (!Etudiant.TelValid(Etu[key])) {
                    errorMessage += "Tel should be 10 numbers \n";
                    tel.className = "failed"
                }
                break;
            case "Note":
                for (let i of Etu[key]) {
                    if (!Etudiant.NoteValid(i)) {
                        errorMessage += "Note should be between 0 and 20 \n";
                        break;
                    }
                }
                break;
            default: {
                errorCode = 1;
            }
                break;
        }
    }
    if (errorCode === 0) {
        alert("Student added successfully");
    } else {
        alert(errorMessage);
    }
}

/*
* this code to enable the sbmit button when all the input are valid
* */
formEtudiant.addEventListener("submit", function (e) {
    e.preventDefault();
    validateData();
});