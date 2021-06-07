"use strict"

/*var random = Math.floor((Math.random()*50)+1)

console.log("Random number to skip is: " + random);
var stopNumber = prompt("Enter odd number ")
i = stopNumber;
if ( stopNumber = "" )
for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (random === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i >= 49) {
        break;
    }

} */
// This skips odd number from user.
/*var oddNumber;
while(true) {
    oddNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    if (oddNumber % 2 != 0) {
        break;
       // console.log("The odd number skipped is " + oddNumber);
    }
}

for (let index = 0; index < 50; index++) {
    if(index == oddNumber) {
        continue;
    }
    if(index % 2 !=0)  {
        // console.log("The odd number skipped is " + oddNumber);
        console.log("here is an odd number " + index);
    }
}
*/




let totalCanSell = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("The the number of cones I can sell " + totalCanSell);

let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5- 1) + 1);


    if((totalSold + conesBought) > totalCanSell) {
        console.log(" im sorry i cant do that right now ");
        continue;
    }
    console.log("My customer bought " + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many " + totalSold)

}while (totalSold < totalCanSell);