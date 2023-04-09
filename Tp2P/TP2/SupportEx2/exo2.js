class Chronometre{
    #heure;
    #minute;
    #seconde;
    #milliSeconde;

    get heure() {
        return this.#heure;
    }

    set heure(value) {
        this.#heure = value;
    }

    get minute() {
        return this.#minute;
    }

    set minute(value) {
        this.#minute = value;
    }

    get seconde() {
        return this.#seconde;
    }

    set seconde(value) {
        this.#seconde = value;
    }

    get milliSeconde() {
        return this.#milliSeconde;
    }

    set milliSeconde(value) {
        this.#milliSeconde = value;
    }

    constructor(h,m,s,ms) {
        this.#heure=h;
        this.minute=m;
        this.seconde=s;
        this.milliSeconde=ms;
    }

}
let ch=new Chronometre(0,0,0,0);
function  update_chrono(millisecondes){

    ch.milliSeconde+=millisecondes;
    if (ch.milliSeconde >= 1000){
        ch.seconde+=1;
        ch.milliSeconde-=1000;
        if (ch.seconde>=60){
            ch.minute+=1;
            ch.seconde-=60;
            if (ch.minute>=60){
                ch.heure+=1;
                ch.minute-=60;
                if (ch.heure>=24){
                    ch.heure=0;
                    ch.minute=0;
                    ch.seconde=0;
                    ch.milliSeconde=0;
                }
            }
        }
    }
    let h=document.getElementById("heur");
     let m=document.getElementById("min");
     let s=document.getElementById("sec"  );
        let ms=document.getElementById("msec");
    h.textContent=ch.heure+"";
    m.textContent=ch.minute+"";
    s.textContent=ch.seconde+"";
    ms.textContent=ch.milliSeconde+"";
}
let id=0;
function start(){
   id= setInterval(update_chrono,10,10)
}
function pause()
{
    clearInterval(id);
}
function reset()
{
    ch.heure=0;
    ch.minute=0;
    ch.seconde=0;
    ch.milliSeconde=0;
    update_chrono(0);

}