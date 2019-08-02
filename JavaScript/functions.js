// funtion declaration
function sayHello() {
    console.log("Hello");
}
sayHello();

//funtion expression
var sayBye = function() {
    console.log("Bye")
}
sayBye();

//putting arguments in fuction
// function sing() {
//     console.log("AAAHHHHHHHH");
//     console.log("TEEEEEEEEEE");
// }
// sing();
//if you have multiple lyrics you's have to put many console logs,
//or write many functions
//dry: do not repeat yourself

function sing(song) {
    console.log(song);
}
sing("AAAHHHHHHHH");
sing("La di da");
sing("Do Re Mi");
//arguments allow us to customize and not repeat yourself

// function multiply(a,b) {
//     a * b;
// }
// multiply(5,10);
//returns undefined because there is no return value

function multiply(a,b) {
    return(a * b);
}
//instead of having:var total(multiply(4,5)) then alert(total); we can do:
alert(multiply(5,10));