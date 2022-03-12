const l = "4";

const a = ["1", "2", "3", "6", "9", "8", "7", "4"];

const b = ["1", "2", "3", "6", "9", "8", "7", "4"];



const rotate = function() {

    for (var i = 7; i > 0; i--) {

        a[i] = a[i - 1];

    }

    a[0] = l;

    l = a[7];

    for (var i = 0; i < 8; i++) {

        document.getElementById("btn" + b[i]).innerText = a[i];

    }

}