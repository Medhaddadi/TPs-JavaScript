function calculer_total() {
    let somme = 0;
    for (const re of cars.rows) {
        if (re.cells[2]) {
            let n = parseInt(re.cells[2].innerText);
            if (!isNaN(n))
                somme += n;
        }
    }
    let total = null;
    if (!cars.lastChild.classList.contains("totalRow")) {
        total = document.createElement("tr");
        total.className = "totalRow";
        let totalText = document.createElement("td");
        totalText.innerText = "Total";
        total.append(totalText);
    } else {
        total = cars.lastChild;
    }
    if (total){
        console.log(cars.lastChild.lastChild)
        cars.lastChild.lastChild.remove();
    }
    let totalRes = document.createElement("td");
    totalRes.id = "total";
    totalRes.className = "total";
    totalRes.setAttribute("colSpan", "3");
    totalRes.innerText = somme;

    total.append(totalRes);
    cars.lastChild.after(total);
}

calculer_total();

function deleteCar(node) {
    node.parentNode.parentNode.remove();
    calculer_total();
}