// program.js
var math = require('./math'); // ./ 同级目录
// exports.increment = function (val) {
//     return math.add(val, 1);
// };

function increment (val) {
    return math.add(val, 1);
};

function increment2 (val) {
    return math.add(val, 1);
};

module.exports = { increment }

