function my_dictionary() {
    var a = {
        species: "dog",
        color: "white",
        breed: "beagle",
        age: 2,
        noise: "ahoooo!",
        //noise: "yo," //runs this one 
    }
    delete a.noise;//returns undefined
    document.getElementById("dictionary").innerHTML = a.noise;
}

document.write(typeof "yo");
document.write(typeof 3);
document.write(10 + "5");