// math.js
// exports.add = function () {
//     var sum = 0,
//         i = 0,
//         args = arguments,
//         l = args.length;
//     while (i < l) {
//         sum += args[i++];
//     }
//     return sum;
// };

function add (...params) {
    var sum = 0,
        i = 0,
        args = params,
        l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};

module.exports = { add }