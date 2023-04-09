let listOl = document.getElementById("quiz-response")
//create li node
let liNode = document.createElement("li")
let liNode1 = document.createElement("li")
liNode1.innerText = "Autre"
liNode.innerText = "push";
liNode.setAttribute("onclick", "validate(this)");
liNode1.setAttribute("onclick", "validate(this)");
listOl.lastChild.previousSibling.before(liNode)
listOl.lastChild.after(liNode1)
let bonReponse = "Autre";

function validate(re) {
    let res = document.createElement("div");
    res.id = "resultat";
    res.className = "resultat";
    res.style.display="block";
    if (re.innerText == bonReponse){
        res.classList.add("correct");
        res.innerText="correct";
    }
    else{
        res.classList.add("incorrect");
        res.innerText="incorrect";
    }
    re.after(res);
}