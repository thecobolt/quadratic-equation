module.exports = function solveEquation(equation) {

    var equationArray = equation.split(' ');

    var x = (equationArray[0]);
    var y = (equationArray[3] + equationArray[4]);
    var a = (equationArray[7] + equationArray[8]);
    var d = Math.pow((equationArray[3] + equationArray[4]), 2) - 4 * (equationArray[0])* (equationArray[7] + equationArray[8]);

    var rootsArray = [];

    rootsArray[0] = Math.round(-y - Math.sqrt(d)) / (2 * x);
    rootsArray[1] = Math.round(-y + Math.sqrt(d)) / (2 * x);

    rootsArray.sort(number);

    return rootsArray;
}

function number(x, y) {
    return x - y;
}