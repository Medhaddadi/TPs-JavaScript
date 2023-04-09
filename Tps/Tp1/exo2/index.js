function surface(){
    let L=Number (document.getElementById("largeur").value);
    let l=Number (document.getElementById("longueur").value);
    alert("la surface est :" +L*l);
}

function primaire(){
    let L=Number (document.getElementById("largeur").value);
    let l=Number (document.getElementById("longueur").value);
      alert("le primaitre est :" +2*(L+l));
}
document.getElementById("surface").addEventListener("onclick",surface);
document.getElementById("perimetre").addEventListener("onclick",primaire);