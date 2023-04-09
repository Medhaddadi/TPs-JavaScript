let divs = document.querySelectorAll(".pane");

let a = document.createElement("a");

a.setAttribute("class", "close");

for( let i = 0; i < divs.length; i++ ) {
    a.setAttribute("id", "btn" + i);
    divs[i].prepend(a.cloneNode(true));
    let id = "btn" + i

    document.getElementById(id).addEventListener("click", () => {divs[i].style.display = "none"})
}

