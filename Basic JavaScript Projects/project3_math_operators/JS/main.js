function add_function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function sub_function() {
    var subtract = 4 - 2;
    document.getElementById("sub").innerHTML = "4 - 2 = " + subtract;
}

function mult_function() {
    var multiply = 6 * 8;
    document.getElementById("mult").innerHTML = "6 * 8 = " + multiply;
}

function div_function() {
    var divide = 80 / 5;
    document.getElementById("div").innerHTML = "80 / 5 = " + divide;
}

function more_Math() {
var simple_Math = (1+ 3) * 15/3 -5;
document.getElementById("more").innerHTML = "one plus 3 times 15 divide by 3 minus 5 equals: " + simple_Math;
}

function rem_function() {
    var remainder = 26 % 6;
    document.getElementById("rem").innerHTML = "the remainder of 26 / 6 is: " + remainder;
}

function neg_function() {
    var negative = 10;
    document.getElementById("neg").innerHTML = "negative 10 is: " + -negative;
}

var q = 6;
q++;
document.write(q);

var w = 5;
w--;
document.write(w);

function randomNum () {
    random = Math.random() * 100;
    document.getElementById("rand").innerHTML = random
}