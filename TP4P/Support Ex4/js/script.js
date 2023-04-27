
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
        this.#Moyenne= (()=>{
            let sum= 0;
            this.#Note.map((i) => {
                sum += i;
            });
            return sum / this.#Note.length;
        })();
    }


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

    static NomPrenomValid(val) {
        return val.length >= 3;
    }

    static EmailValid(val) {
        if (val == "") return 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val);
    }

    static NoteValid(val) {
        console.log(val+"hooo");
        if (val == "") return 0;
        if (val => 0 && val <= 20) return 1;
        else return 0;
    }

    static DateValid(val) {

        if (val == "") return 0;
        let d = new Date(val);
        let date = Date.now()
        let age = (date - d)/(1000*60*60*24*365);
        console.log(age);
        if (age > 18) return 1; else return 0;
    }

    static TelValid(val) {
        if (val == "") return 0;
        const regex = /^06\d{8}$/;
        return regex.test(val);
    }

    static FiliereValid(val) {
        if (val == "") return 0;
        if (val.length < 3) return 0; else return 1;
    }
    //create function to string the object
    toString() {
        return `Nom: ${this.#Nom} Prenom: ${this.#Prenom} DateNaissance: ${this.#DateNaissance} Filiere: ${this.#Filiere} Tel: ${this.#Tel} Note: ${this.#Note} Moyenne: ${this.#Moyenne}`;
    }
    addNote(note) {
        this.#Note.push(note);
    }
    deleteNote(note) {
        this.#Note.splice(this.#Note.indexOf(note), 1);
    }
}

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
note1.addEventListener("input", function (e) {
    if (Etudiant.NoteValid(e.target.value)) e.target.className = "success"; else e.target.className = "failed";
});


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
                if (!Etudiant.NoteValid(Etu[key])) {
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
}

formEtudiant.addEventListener("submit", function (e) {
    e.preventDefault();
    validatwData();
});