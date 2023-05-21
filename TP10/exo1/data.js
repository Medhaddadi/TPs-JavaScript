const personnes = [
    {type: 'user', nom: 'Max Mustermann', age: 25, villes: ['Marseille', 'Lyon', 'Paris']},
    {type: 'admin', nom: 'John Wick', age: 45, villes: ['Paris']},
    {type: 'user', nom: 'Kate Muller', age: 23, villes: ['Nantes', 'Lyon', 'Lille', 'Nice']},
    {type: 'admin', nom: 'Bruce Willis', age: 64, villes: ['Paris', 'Nantes']},
    {type: 'user', nom: 'Jack Wilson', age: 35, villes: ['Marseille', 'Lyon', 'Montpellier']},
    {type: 'admin', nom: 'Carol Smith', age: 23, villes: ['Marseille', 'Nice', 'Montpellier']}
];

// Ecrivez une fonction fléchée getByType(type) qui retourne la liste des personnes selon le type
// passe en paramètre.


const getByType = type => personnes.filter(per => per.type == type);


//Ecrivez une fonction fléchée getByVille(ville) qui retourne la liste des personnes ayant dans
// villes la ville passée en paramètre


const getByVille = ville => personnes.filter(per => per.villes.indexOf(ville) !== -1)

//Ecrivez une fonction fléchée getOtherVilleThan(ville) qui retourne la liste des personnes
// n’ayant pas dans villes la ville passée en paramètre.


const getOtherVilleThan = ville => personnes.filter(per => per.villes.indexOf(ville) === -1)


let tab = [];

const countVilles = personnes.map(per => {
    let dic = {};
    dic['nom'] = per.nom;
    dic['nbrVilles'] = per.villes.length;
    tab.push(dic);
})

const getByVillesNumber = nbr => personnes.filter(per => per.villes.length === nbr)


//Ecrivez une fonction fléchée countCharacterInVilles() qui retourne un tableau
// d’objets : chaque objet contient le nom d’une personne ainsi que le nombre total de
// caractères de ses villes (voir ci-dessous).

let tab2 = [];

const countCharacterInVilles = personnes.map(per => {
    let dic = {};
    dic['nom'] = per.nom;
    dic['total'] = per.villes.reduce((v, t)=>{
          return v + t.length;
    } ,0);
    tab2.push(dic);
})


// Ecrivez une fonction fléchée countByVille(ville) qui retourne le nombre de personnes
// qui interviennent dans la ville passée en paramètre (ici c’est 3 pour Marseille par
// exemple).


const  countByVille = ville=> personnes.filter(per=>  per.villes.indexOf(ville) !== -1  ).length ;


// Ecrivez une fonction fléchée findHavingMaxVille() qui permet de retourner le nombre
// max de villes d’intervention de toutes les personnes (ici c’est 4)

const nbVille ={};
const  findHavingMaxVille = personnes.map((per) =>{
    per.villes.map(v =>{
        if(!(v in nbVille))
            nbVille[v]=1;
        else
            nbVille[v]++;
    })
})
console.log(nbVille)



