function full_sentence() {
    var part_1 = "i have ";
    var part_2 = "GiTar StrAnG";
    var whole_sentence = part_1.concat(part_2); // var x = y_1.concat(y_2); -> i have gitar strang.
    document.getElementById("concatenate").innerHTML = whole_sentence;
}


function slice_method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);//not index?
    document.getElementById("slice").innerHTML = Section;
}

var str = "Hihihihihi";

document.write(str.toUpperCase());

var sti = "hi im paul";

document.write(sti.search("paul"));// should return 6? searches a string for a specified value, and returns the position

function string_method() {
    var x = 182;//define x
    document.getElementById("numbers_to_string").innerHTML = x.toString();//x = 182, displays 182 as a string not a value? "182" for ex
    //returns number as a string
}

function precision_method() {
    var x = 12345.678910111213;
    document.getElementById("precision").innerHTML = x.toPrecision(9);//12345.6789
}

var num = 1.23645
document.write(num.toFixed(2))//should dsplay 1.24

let stk = "YOwaddup";
document.write(stk.valueOf());//returns "YOwaddup", just returns string i guess...