// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(input) {
    if(typeof input === "string") {
        let input = "These are my words";
        let spaceCount = (input.split(" ").length-1)
        console.log(spaceCount)
        return spaceCount;
    } else {
        console.log("ERROR")
        return false;
    }
}
var result = countSpaces("These are words")
console.log(result)
// TODO: Add validation to function above, if the argument pass is not a string it should return false.

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ---->
// ["BOB","SETH","TOFU","TOYOTA"]
function capitalizeAllNames(input){
    let names = ["bob", "Seth", "Tofu" , "Toyota"]
    let uppercased = names.map(name => name.toUpperCase())
    console.log(uppercased)
    return uppercased
}


// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ---->
// ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(){

}
// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getfullName: function() {
        return this.firstName + " " + this.lastName;

    }
}
console.log(personOne.getfullName())

// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
function arrayOfStringsToObjects(arrayStrings) {

    var arrayObjects = []

    for (let i = 0; i < arrayStrings.length; i++){
        /*console.log(arrayStrings[i])*/
        arrayObjects.push({originalString:arrayStrings[i], lengthOfOriginalString:arrayStrings[i].length})

    }
    return arrayObjects;

}

var arrayOfObjects = arrayOfStringsToObjects(["hello", "dave"]);
console.log(arrayOfObjects);
// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"


function arrayOfObjectsToStrings(arrayObjectsParam) {

    var results = []

    arrayObjectsParam.forEach(function(singleObject){
        results.push(singleObject.originalString)
    })

    return results.join(" ")

}

console.log(arrayOfObjectsToStrings(arrayOfObjects))

// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//

function getTallUsers(arrayOfObjects) {
    var tallUser = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {
        // console.log(arrayOfObjects[i])

        var currentUser = arrayOfObjects[i];

        var currentUserHeight = currentUser.heightInInches
        console.log(arrayOfObjects[i].heightInInches)
    }
    if(currentUserHeight >= 65){
        tallUser.push(currentUser)
    }
    return tallUsers;
}
document.get

console.log(getTallUsers(people))