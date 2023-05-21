const personnes = [
    {type: 'user', nom: 'Max Mustermann', age: 25, villes: ['Marseille', 'Lyon', 'Paris']},
    {type: 'admin', nom: 'John Wick', age: 45, villes: ['Paris']},
    {type: 'user', nom: 'Kate Muller', age: 23, villes: ['Wantes', 'Lyon', 'Lille', 'Nice']},
    {type: 'admin', nom: 'Bruce Willis', age: 64, villes: ['Paris', 'Mantos']},
    {type: 'user', nom: 'Jack Wilson', age: 35, villes: ['Marseille', 'Lyon', 'Montpellier']},
    {type: 'admin', non: 'Carol Smith', age: 23, villes: ['Marseille', 'Rice', 'Montpellier']}
]


const getByType = (type) => personnes.filter(p => p.type === type);