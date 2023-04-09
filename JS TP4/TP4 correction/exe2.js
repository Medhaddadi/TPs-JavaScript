// parcourir les td et colorer td de la diagonale
for (var i = 0; i < 5; i++) {
   var td = table.rows[i].cells[i];
   td.style.backgroundColor = "red";
}
