var x = 10;
function add_1() {
    document.write(20 + x + "<br>");
}

function add_2() {
    var y = 10;
    document.write(20 + y);
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
        
    }
}


function newIf() {
    if(new Date().getHours() < 23) {
        document.getElementById("hi").innerHTML = "good day to you sir";
    }
}

function Age_Function() {
    Age = document.getElementById("age").value;
    if (Age >= 18) {
        Vote = "You are old enought to vote!";
    }
    else {
        Vote = "You are not old enought to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();//var time = current hour
    var Reply;//define reply
    if (Time < 12 == Time > 0) {//if time then this string
        Reply = "It i morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//replace button text (same id) with the string the function chooses
}
