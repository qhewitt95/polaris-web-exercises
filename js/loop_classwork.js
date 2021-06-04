"use strict"

// alert("this works")
/*var message = '';
//var howMany=prompt("how many");

for (let index = 0; index < 10; index++) {
    message = message + index + "\n";

}

alert(message);

alert(index); */
/*let index = 0;
while (index >10) {
    //do something
    alert("index: " + index + '\n');
    index++
}
*/
var notDone = true
while (notDone) {
    alert("having fun ?");
    notDone = confirm("Play again?");
}while (notDone);

var badData = false;

function validateNumber() {
    var value = Prompt("Enter the number")
    badData = typeof value != "number";
    while (!badData);
    return value;
}

for
