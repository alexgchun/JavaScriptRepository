function count_To_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {//While x < 11
        Digit += "<br>" + x; //Digit (empty string) = "", new line, write x
        x++;//then, increment x by 1 
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;//display new Digit (1), the repeat loop for the condition
}

var str = "Yowaddup";
document.write(str.length);//should return 8

var Instruments = ["Guitar", "Bass", "Drums", "Flute", "Organ", "Conga"];//Array
var Content = "";//Empty String
var Y;//declaration
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {//declaring y = 0, when y < instrument length(6), run loop, iterate y by 1 at the end.
        Content += Instruments[Y] + "<br>";//Content = instruments[0](first item guitar, then next line)
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;//then write guitar in the p element with the same id tag, then iterate y ^^^
}

function pics() {
    var picture = [];
    picture[0] = "fun";
    picture[1] = "sad";
    picture[2] = "bad";
    picture[3] = "mad";
    picture[4] = "lad";
    document.getElementById("pic").innerHTML = "Here, boy is " + picture[2] + ".";
}


function constant_function() {
    const Instrument = {type:"guitar", brand:"fender", color:"white"};
    Instrument.color = "blue";//changed from black to blue, but cannot change identifier Instrument
    Instrument.price = "$600";
    document.getElementById("constant").innerHTML = "The cost of the " + Instrument.type + " was " + Instrument.price;
}

const x = 10;//rid of thie displays 2
//x = 2;//rid of this displays 10
document.write(x);//nothing displayed



var y = 8;
y = 10;//redeclare
document.write(y);//reads 8 not 10...


var z = 5;
document.write(z);
{
    let z = 52;
    document.write("<br>" + z);
}
document.write("<br>" + z);


function my_return(x) {
    if (x < 5 && x > -4) {
        return true;
    }
    return false;
}

document.write(my_return(3));



let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2020 ",
    color: "red ",
    description : function() {
        return "The care is a " + this.year + this.color + this.make + this.model;
    }

};
document.getElementById("Car_Object").innerHTML = car.description();
/*
function my_break() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }//stops when i = 3
        text += "The number is " + i + "<br>";
      }
      document.getElementById("poke").innerHTML = text;
}


function my_continue() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; } //skips i = 3 until condition is met
        text += "The number is " + i + "<br>";
      }
}*/