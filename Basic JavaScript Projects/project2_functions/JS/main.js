function my_function() {
    var str = "Now im purple!";
    var result = str.fontcolor("purple");
    document.getElementById("purple-text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am maybe learning";
    sentence += " a lot or little from this guy.";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function myMult (a, b) {
    return a * b;
}

document.write(myMult(2, 4));

function myColor() {
    var sentence = "I guess i changed";
    sentence += " not really."
    document.getElementById("yes").innerHTML = sentence;
}

function addition_function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 =" + addition;
}