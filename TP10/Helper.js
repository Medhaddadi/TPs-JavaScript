module.exports = function() {
    console.log('Hello, world!');
};


module.exports = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

exports.add = function (a, b) {
    return a + b;
};
exports.subtract = function (a, b) {
    return a - b;
};

const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
module.exports = {
    add,
    subtract,
};