var getHttpRequest = function () {
    var httpRequest = false;
  
    if (window.XMLHttpRequest) {
      // Mozilla, Safari,...
      httpRequest = new XMLHttpRequest();
      if (httpRequest.overrideMimeType) {
        httpRequest.overrideMimeType("text/xml");
      }
    } else if (window.ActiveXObject) {
      // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
  
    if (!httpRequest) {
      alert("Abandon :( Impossible de créer une instance XMLHTTP");
      return false;
    }
  
    return httpRequest;
  };
  
  function loadData() {
    document.getElementById("listStudent").innerHTML = "";
    var xhr = getHttpRequest();
    url = "./PHP/traitement.php";
    data = new FormData();
    data.append("action", "5");
    xhr.open("POST", url, true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var reponse = xhr.responseText;
        console.log(reponse);
        var table = document.getElementById("listStudent");
        var tab = JSON.parse(reponse);
        for (let i = 0; i < tab.length; i++) {
          let tr = lineOfTable(
            tab[i].id,
            tab[i].nom,
            tab[i].prenom,
            tab[i].email,
            tab[i].dateNaissance,
            tab[i].filiere
          );
          table.appendChild(tr);
        }
      }
    };
  }
  
  function lineOfTable(id, nom, prenom, email, DOfbirth, filiere) {
    let tr = document.createElement("tr");
    createTD(tr, id);
    createTD(tr, nom);
    createTD(tr, prenom);
    createTD(tr, email);
    createTD(tr, DOfbirth);
    createTD(tr, filiere);
    let tdOptions = document.createElement("td");
  
    let btnSupp = createOption("Supprimer", "btn-danger");
    btnSupp.classList.add("mx-2");
    btnSupp.addEventListener("click", function () {
      deleteStudent(id);
    });
  
    let btnUpdate = createOption("Modifier", "btn-primary");
    btnUpdate.addEventListener("click", function () {
      remplirForm(id);
      document.getElementById("id").value = id;
    });
  
    tdOptions.appendChild(btnUpdate);
    tdOptions.appendChild(btnSupp);
    tr.appendChild(tdOptions);
    return tr;
  }
  
  function createTD(tr, value) {
    let td = document.createElement("td");
    td.innerHTML = value;
    tr.appendChild(td);
  }
  
  function createOption(value, classe) {
    let btn = document.createElement("button");
    btn.innerHTML = value;
    btn.classList.add("btn", classe);
    return btn;
  }
  
  loadData();
  
  function deleteStudent(id) {
    let conf = confirm("Voulez-vous vraiment supprimer cet élève ?");
    if (conf) {
      var xhr = getHttpRequest();
      url = "./PHP/traitement.php";
      data = new FormData();
      data.append("action", "3");
      data.append("id", id);
      xhr.open("POST", url, true);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var reponse = xhr.responseText;
          if (reponse == "1") {
            alert("Suppression réussie");
            loadData();
          } else {
            alert("Suppression échouée");
          }
        }
      };
    }
  }
  function remplirForm(id) {
    var xhr = getHttpRequest();
    url = "./PHP/traitement.php";
    data = new FormData();
    data.append("action", "4");
    data.append("id", id);
    xhr.open("POST", url, true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var reponse = xhr.responseText;
        var tab = JSON.parse(reponse);
        console.log(tab[0].filiere);
        document.getElementById("nom").value = tab[0].nom;
        document.getElementById("prenom").value = tab[0].prenom;
        document.getElementById("email").value = tab[0].email;
        document.getElementById("DOfbirth").value = tab[0].dateNaissance;
        document.getElementById("filiere").value = tab[0].filiere;
        document.getElementById("ajouter").innerHTML = "Modifier";
      }
    };
  }
  
  function manipStudent(action, id) {
    var xhr = getHttpRequest();
    url = "./PHP/traitement.php";
    data = new FormData();
    data.append("action", action);
    data.append("nom", document.getElementById("nom").value);
    data.append("prenom", document.getElementById("prenom").value);
    data.append("email", document.getElementById("email").value);
    data.append("DOfbirth", document.getElementById("DOfbirth").value);
    data.append("filiere", document.getElementById("filiere").value);
  
    if (action == 2) {
      data.append("id", id);
    }
    for (let e of data.entries()) {
      console.log(e[0] + " : " + e[1]);
    }
    xhr.open("POST", url, true);
    xhr.send(data);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var reponse = xhr.responseText;
        if (reponse == "1") {
          alert("Opération réussie");
          loadData();
          if (action == 2) {
            document.getElementById("ajouter").innerHTML = "Ajouter";
            document.getElementById("nom").value = "";
            document.getElementById("prenom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("DOfbirth").value = "";
            document.getElementById("filiere").value = "";
            document.getElementById("id").value = "";
          }
        } else {
          alert("Opération échouée");
        }
      }
    };
  }
  
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    if (document.getElementById("ajouter").innerHTML == "Ajouter") {
      manipStudent(1);
    } else {
      manipStudent(2, document.getElementById("id").value);
    }
  });
  