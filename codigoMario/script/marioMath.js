function maxNumber() {
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var c = document.getElementById("numC").value;
    var max = a;

    if(max <= b) {
         max = b;
    }
    if(max <= c) {
        max = c;
    }
    console.log(document.getElementById("numB").value > document.getElementById("numC").value);

    document.getElementById("numMax").innerHTML = max;
    console.log(document.getElementById("numC").value);
} 