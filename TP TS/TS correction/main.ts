import Stagiaire from "./Stagiaire";
import Formation from "./Formation";

let stagiaire = new Stagiaire("Anna", [19, 14, 12]);
let stagiaire2 = new Stagiaire("Dupont", [12, 18, 12]);

let f1 = new Formation("Java", 100, [stagiaire, stagiaire2]);

console.log(`L'indice de la note maximal est : ${f1.getIndexMax()}`);
console.log(`Celui qui a la note Max est : ${f1.afficherNomMax()}`);
console.log(
  `La note minimal de ${f1.afficherNomMax()} est : ${f1.afficherMinMax()}`
);

console.log(`La moyenne d'Anna est : ${f1.trouverMoyenneParNom("Anna")}`);
