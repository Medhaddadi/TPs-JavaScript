
gender.addEventListener("change", (event) => {retrieveElements(event)})

function retrieveElements(event) {
    let name = document.getElementById("nameInput").value;
    let gender = document.getElementById("gender").value;

    document.getElementById("res-name").innerText = name;
    document.getElementById("res-gender").innerText = gender;
}

document.getElementById("result").addEventListener("mousemove", (event) =>  {
    document.getElementById("mouse-x").innerText = event.clientX;
    document.getElementById("mouse-y").innerText = event.clientY;
})