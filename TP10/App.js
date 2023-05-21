module.exports = function() {
    console.log('Hello, world!');
};


const fct = require("./helper");
console.log(fct.add(1, 2));
console.log(fct.subtract(1, 2));