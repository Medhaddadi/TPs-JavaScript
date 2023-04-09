let nodes = Array.from(ul.children);

for ( let node of nodes ) {
    node.addEventListener("click", (event) => {
        if (!event.ctrlKey)
            nodes.map(node => node.classList.remove("selected")
        );

        node.classList.toggle("selected")
    });
}