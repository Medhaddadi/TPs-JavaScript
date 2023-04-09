class Jeu {
    #nombreSecret = 0;
    #tentativesRestantes = 0;
    deviner(nombre) {

        if(this.tentativesRestantes!==0)
        {
            console.log("nb :"+nombre);
            if (nombre === this.#nombreSecret) {
                document.getElementById("proposer").disabled=true;
                return "BRAVO vous trover le nombre :" + nombre;
            } else {
                this.#tentativesRestantes--;
                if (nombre > this.#nombreSecret) {
                    return "plus petite";
                } else
                {
                    return "plus grand";
                }
            }
        }  else {
            return  "le nomre de tentative est teminer "
        }

    }

    get nombreSecret(){
        return this.#nombreSecret;
    }
    get tentativesRestantes() {
        return this.#tentativesRestantes;
    }

    constructor() {
        this.#nombreSecret = Math.floor(Math.random() * 100);
        this.#tentativesRestantes = 10;
    }
}

let jeu = new Jeu();

function proposerNombre() {
    let number = parseInt(document.getElementById("nombre-propose").value);
    let res = document.getElementById("resultat");
    res.textContent = jeu.deviner(number);
    console.log(jeu.deviner(number));
    let nb = document.getElementById("tentatives-restantes");
    nb.textContent=jeu.tentativesRestantes+"";
    console.log(jeu.nombreSecret);

}