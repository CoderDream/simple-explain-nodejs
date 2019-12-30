// program.js
var math = require('./math'); // ./ 同级目录
// exports.increment = function (val) {
//     return math.add(val, 1);
// };

function increment (funNum,val,...params) {
    if(funNum===1){
        return increment2(val,...params);
    }else{
        return increment3(val,...params);
    }
};

function increment2 (...params) {
    return math.add(val, 1);
};
function increment3 (...params) {
    return math.add(val, 1);
};

module.exports = { increment }

