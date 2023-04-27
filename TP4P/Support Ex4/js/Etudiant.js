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
        return val.length > 3;
    }

    static EmailValid(val) {
        if (val == "") return 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val);
    }

    static NoteValid(val) {
        if (val == "") return 0;
        if (val => 0 && val <= 20) return 1; else return 0;
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
