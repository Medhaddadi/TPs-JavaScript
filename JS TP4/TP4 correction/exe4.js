function ajouterPersonne(){
  var nom = document.getElementById("nom");
  var prenom = document.getElementById("prenom");
  var age = document.getElementById("age");
  var job = document.getElementById("job");


  var i=0;
  if(nom.value == ""){

    document.getElementById("nom").classList.add('failed');
  }
  else{
    document.getElementById("nom").classList.add('success');
    i++;
  }

  if(prenom.value == ""){
    document.getElementById("prenom").classList.add('failed');
  }else{
    document.getElementById("prenom").classList.add('success');
    i++;
  }
  if(age.value == ""){
    document.getElementById("age").classList.add('failed');
  }else{
    document.getElementById("age").classList.add('success');
    i++;
  }
  if(job.value == ""){
    document.getElementById("job").classList.add('failed');
  }else{
    document.getElementById("job").classList.add('success');
    i++;
  }


  if(i==4){
    alert("insert")
  }
  else{
    error.hidden = false;
  }
}
