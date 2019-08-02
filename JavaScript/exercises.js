//name prompt using ifelse 

// var firstnumber = prompt("Enter first number");
// var secondnumber = prompt("Enter second number");
// var choice = prompt("Add(1), Subtract(2), Multiply(3) or Divide(4)?");
// if (choice === "1") {
//     sum = Number(firstnumber) + Number(secondnumber);
// alert("The sum is " + sum); }
// else if (choice === "2") {
//     diff = Number(firstnumber) - Number(secondnumber);
//     alert("The difference is " + diff); }
// else if (choice === "3") {
//     mult = Number(firstnumber) * Number(secondnumber);
//     alert("The result is " + mult); }
// else { div = Number(firstnumber) / Number(secondnumber);
// alert("The result is " + div); }


//name prompt using switch case

var firstnumber = prompt("Enter first number");
var secondnumber = prompt("Enter second number");
var choice = prompt("Add(1), Subtract(2), Multiply(3) or Divide(4)?");
switch(choice) {
    case '1': 
        sum = Number(firstnumber) + Number(secondnumber);
        alert("Sum is " + sum);
    case '2':
        diff = Number(firstnumber) - Number(secondnumber);
        alert("difference is " + diff);
    case '3':
        mult = Number(firstnumber) * Number(secondnumber);
        alert("result is " + mult);
    case '4':
        div = Number(firstnumber) / Number(secondnumber);
        alert("Result is " + div);
    default: alert("Incorrect number");
}

//keyless car
var age = prompt("What is your age?");
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {
    alert("Powering on. Enjoy the ride!");
}

//keyless car with functions
//using function declaration
function checkDriverAge(ageofDriver) {
    var ageofDriver = prompt("What is your age?");
    if (ageofDriver < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (ageofDriver == 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else {
        alert("Powering on. Enjoy the ride!");
    }  
}
checkDriverAge();

//using function expression
var checkDriverAge = function() {

    var ageofDriver = prompt("What is your age?");
    if (ageofDriver < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (ageofDriver == 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else {
        alert("Powering on. Enjoy the ride!");
    }
} 
checkDriverAge();

//using console.log instead prompt
function checkDriverAge(ageofDriver) {
    var ageofDriver = console.log("What is your age?");
    if (ageofDriver < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (ageofDriver == 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else {
        alert("Powering on. Enjoy the ride!");
    }  
}
checkDriverAge(92);