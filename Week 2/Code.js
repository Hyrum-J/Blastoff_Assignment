function blastoff() {

    console.log("blastoff() started");

    var i = 50;

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 5000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 10000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 15000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 20000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 25000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 30000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 35000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 40000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
    }, 45000);

    setTimeout(function () {
        i = i - 5;
        document.getElementById("Blastoff Text").innerHTML = i;
        if(i == 0){
            document.getElementById("Blastoff Text").innerHTML = "Blastoff!";
        };
    }, 50000);
   
};