class Horloge {
  constructor(heure, minute, seconde) {
    this.heure = heure;
    this.minute = minute;
    this.seconde=seconde;
  }
  afficheHorloge(){
    var s = this.heure+" : "+this.minute+" : "+this.seconde;
    return s;
  }
  dynamiqueHorloge(){
    console.log("dynamic");
    var currentDate = new Date();
    var time = currentDate.getHours() + " : " + currentDate.getMinutes() + " : " + currentDate.getSeconds();
    document.body.firstElementChild.textContent=time;
  }
}
let myInterval;
var myHorloge = new Horloge(20, 54,12);
function start(){
   myInterval=setInterval(myHorloge.dynamiqueHorloge, 1000);
}
function stop(){
   clearInterval(myInterval)
}
