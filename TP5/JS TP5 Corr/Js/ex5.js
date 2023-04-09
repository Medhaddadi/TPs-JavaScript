
let inputs = document.querySelectorAll("input");

function displayInputs() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;
    let password = document.getElementById("password").value;

    document.getElementById("res-nom").innerText = nom;
    document.getElementById("res-prenom").innerText = prenom;
    document.getElementById("res-adresse").innerText = adresse;
    document.getElementById("res-pass").innerText = password;
}

window.addEventListener("load", function() {
    document.getElementById('my-form').addEventListener("submit", function(event) {
        event.preventDefault();
        processForm();
        if(is_valid) {
            result.hidden = false;
            displayInputs();
        } else
            result.hidden = true;
    })
});


let is_valid = true;

function processForm() {
    if(is_valid)
        for (let input of inputs) {
            input.setAttribute("autocomplete", "on")
            if (input.value === "") {
                document.getElementById("s" + input.name).hidden = false;
                input.style.borderColor = "red";
                is_valid = false;
            }
        }
    return is_valid;
}


for (let input of inputs) {
    input.onblur = function () {
        if(input.value === "") {
            input.style.borderColor = "red";
            document.getElementById("s" + input.name).hidden = false;
            document.getElementById("s" + input.name).innerText = "Ce champs doit etre rempli"
            is_valid = false;
            return;
        }
        if(input.name.indexOf("nom") !== -1) {
            if (!input.value.match("^[A-Z]+$")) {
                input.style.borderColor = "red";
                document.getElementById("s" + input.name).hidden = false;
                document.getElementById("s" + input.name).innerText = "Ce champ doit contenir que des maj ..";
                is_valid = false;
            } else {
                input.style.borderColor = "lime"
                document.getElementById("s" + input.name).hidden = true;
                is_valid = true;
            }
        } else if (input.name.indexOf("pass") !== -1) {
            if (!input.value.match("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")) {
                input.style.borderColor = "red";
                document.getElementById("s" + input.name).hidden = false;
                document.getElementById("s" + input.name).innerText = "Le mot de passe doit contenir au moins 8 caracteres & au moins un/e de ( lettre -Maj & Min-, chiffre, caracteres spéciaux ) !";

                is_valid = false;
            } else {
                input.style.borderColor = "lime"
                document.getElementById("s" + input.name).hidden = true;
                is_valid = true;
            }
            if(input.name === "password2") {
                let secondPassword = document.getElementById("password");
                if(secondPassword.value !== "") {
                    if(input.value !== secondPassword.value) {
                        input.style.borderColor = "red";
                        secondPassword.borderColor = "red";
                        document.getElementById("s" + input.name).hidden = false;
                        document.getElementById("s" + input.name).innerText = "Mots de passe ne sont pas identiques !";
                        is_valid = false;
                    } else {
                        input.style.borderColor = "lime"
                        document.getElementById("s" + input.name).hidden = true;
                        is_valid = true;
                    }
                }
            } else {
                let secondPassword = document.getElementById("password2");
                secondPassword.borderColor = "red";
                if(secondPassword.value !== "") {
                    if(input.value !== secondPassword.value) {
                        secondPassword.style.borderColor = "red";
                        document.getElementById("s" + secondPassword.name).hidden = false;
                        document.getElementById("s" + secondPassword.name).innerText = "Mots de passe ne sont pas identiques !";
                        is_valid = false;
                    } else {
                        secondPassword.style.borderColor = "lime"
                        document.getElementById("s" + secondPassword.name).hidden = true;
                        document.getElementById("s" + input.name).hidden = true;
                        is_valid = true;
                    }
                }
            }
        } else {
            if(input.value !== "") {
                input.style.borderColor = "lime";
                document.getElementById("s" + input.name).hidden = true;
            }
        }
    }
}
