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