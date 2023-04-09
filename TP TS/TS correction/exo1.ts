const personnes = [
  {
    type: "user",
    nom: "Max Mustermann",
    age: 25,
    villes: ["Marseille", "Lyon", "Paris"],
  },
  { type: "admin", nom: "John Wick", age: 45, villes: ["Paris"] },
  {
    type: "user",
    nom: "Kate Muller",
    age: 23,
    villes: ["Nantes", "Lyon", "Lille", "Nice"],
  },
  { type: "admin", nom: "Bruce Willis", age: 64, villes: ["Paris", "Nantes"] },
  {
    type: "user",
    nom: "Jack Wilson",
    age: 35,
    villes: ["Marseille", "Lyon", "Montpellier"],
  },
  {
    type: "admin",
    nom: "Carol Smith",
    age: 23,
    villes: ["Marseille", "Nice ", "Montpellier"],
  },
];

//1.	Ecrivez une fonction getByType(type: string): Array<Object>
//qui retourne la liste des personnes selon le type passé en paramètre.
function getByType(type: string): Array<Object> {
  return personnes.filter((personne) => personne.type === type);
}

console.log(getByType("admin"));

//2.	Ecrivez une fonction getByVille(ville: string): Array<Object>
//qui retourne la liste des personnes ayant dans villes la ville passée en paramètre.
function getByVille(ville: string): Array<Object> {
  return personnes.filter((personne) => {
    if (personne.villes.indexOf(ville) !== -1) return personne;
  });
}
console.log(getByVille("Lyon"));

//3.	Ecrivez une fonction getOtherVilleThan(ville: string): Array<Object>
// qui retourne la liste des personnes n’ayant pas dans villes la ville passée en paramètre.
function getOtherVilleThan(ville: string): Array<Object> {
  return personnes.filter((personne) => {
    if (personne.villes.indexOf(ville) === -1) return personne;
  });
}

//countVilles(): Array<Object>
//qui retourne un tableau d’objets : chaque objet contient
//le nom d’une personne ainsi que son nombre de villes (voir ci-dessous).
function countVilles(): Array<Object> {
  let villes = [];
  personnes.forEach((personne) => {
    let obj = { nom: personne.nom, nbVilles: personne.villes.length };
    villes.push(obj);
  });
  return villes;
}

function countVilles1(): Array<Object> {
  return personnes.map((personne) => {
    return {
      nom: personne.nom,
      nbrVilles: personne.villes.length,
    };
  });
}

console.log(countVilles1());
console.log(countVilles());

//5.	Ecrivez une fonction getByVillesNumber(nbr: number): Array<Object>
//qui retourne les personnes dont le nombre de villes d’intervention correspond au paramètre nbr.
function getByVillesNumber(nbr: number): Array<Object> {
  return personnes.filter((personne) => personne.villes.length === nbr);
}

console.log(getByVillesNumber(2));

//6.  Ecrivez une fonction countCharacterInVilles(): Array<Object>
//qui retourne un tableau d’objets : chaque objet contient le nom d’une personne ainsi que
//le nombre total de caractères de ses villes (voir ci-dessous).
function countCharacterInVilles(): Array<Object> {
  return personnes.map((personne) => {
    return {
      nom: personne.nom,
      total: personne.villes.reduce((a, b) => a + b.length, 0),
    };
  });
}

console.log(countCharacterInVilles());

//7.   Ecrivez une fonction countByVille(ville: string): number
//qui retourne le nombre de personnes qui interviennent dans la ville passée en paramètre
//(ici c’est 3 pour Marseille par exemple)
function countByVille(ville: string): number {
  return getByVille(ville).length;
}

console.log(countByVille("Marseille"));

//8.  Ecrivez une fonction findHavingMaxVille(): number
//qui permet de retourner le nombre max de villes d’intervention de toutes les personnes (ici c’est 4)
function findHavingMaxVille(): number {
  return personnes
    .map((personne) => personne.villes.length)
    .reduce((a, b) => {
      if (a < b) return b;
      else return a;
    });
}
console.log(findHavingMaxVille());
