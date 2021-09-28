function rideFunction() {
    var height, can_ride;//declaring 2 variables
    height = document.getElementById("height").value;//gets the value for the ternary op
    can_ride = (age < 52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
} 

function ageFunction() {
    var age, can_vote;//declaring 2 variables
    age = document.getElementById("age").value;//gets the value for the ternary op
    can_vote = (age <= 17) ? "you are too young":"you are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
} 


function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("dodge", "viper", 2020, "red");
var Emily = new vehicle("jeep", "trail hawk", 2019, "black and white");
var Erik = new vehicle("ford", "pinto", 1971, "mustard");

function myFunction() {
    document.getElementById("key_and_constructors").innerHTML = "Erik drives a " + Erik.vehicle_color + "-colored" + Erik.vehicle_model +
    "manufactured in " + Erik.vehicle_year;
}

function pen(make, model, year, color) {
    this.pen_make = make;
    this.pen_model = model;
    this.pen_year = year;
    this.pen_color = color;
}

var Erik = new pen("walmart", "g2", 2012, "black");

function myPen() {
    document.getElementById("key_and_constructors").innerHTML = "Erik writes with a " + Erik.pen_color + "-colored" + Erik.pen_model +
    "manufactured in " + Erik.pen_year;
}

//var var = 3;
//document.write(var);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

var myfather = new Person("Mason", "free", 18, "green");

document.write(myfather.age);

function countFunction() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1}
        plus_one();
        return starting_point;
    }
}