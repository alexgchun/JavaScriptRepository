function my_dictionary() {
    var a = {
        species: "dog",
        color: "white",
        breed: "beagle",
        age: 2,
        noise: "ahoooo!",
        //noise: "yo," //runs this one 
    }
    delete a.noise;
    document.getElementById("dictionary").innerHTML = a.noise;
}