function IMC(){
    let user={
        nom:document.getElementById("nom").value,
        prenom : document.getElementById("prenom").value,
        genre:document.getElementById("genre").value,
        taille:parseFloat(document.getElementById("taille").value)/100,
        pois:parseFloat(document.getElementById("pois").value),
        IMC:0.0
    }
    user.IMC=user.pois/(user.taille**2);
    return user;
}

function showIMC(){
    let uer=IMC();
    alert("heloo , "+uer.nom+" , "+uer.prenom+"\n votre IMC : "+uer.IMC);
    
}