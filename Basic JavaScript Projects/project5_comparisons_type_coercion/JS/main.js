document.write(typeof "yo");
document.write(typeof 3);
document.write(10 + "5");

function my_function() {
    document.getElementById("test").innerHTML = 0/0;
}


function ny_function() {
    document.getElementById("mess").innerHTML = isNaN('This is a string');
}

function la_function() {
    document.getElementById("best").innerHTML = isNaN('008');
}

document.write(2E320);
document.write(-2E320);
document.write(10>2);
document.write(10 < 2);

console.log(2 + 5);
console.log(2>5);

document.write(10 == 10);
document.write(10 == 11);
document.write("10" === 10);
document.write(10 === 10);
document.write("mag" === "mag");
document.write("m" === "M"); //false


document.write(5 > 2 && 10 > 4);//true
document.write(5 != 2);//true
document.write(5 < 2 && 5 > 1);//false
document.write(5 > 10 || 10 > 4);//true
document.write(5 > 10 || 1 > 4);//false

function notFunction() {
    document.getElementById("not").innerHTML = !(20 > 10);//false
}

/*function notFunction() {
    document.getElementById("not").innerHTML = !(5 > 10);//true
}*/