var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);


//array of arrays
var list2 = [["tiger", "cat", "bear", "bird"]];
console.log(list2[0][2]);

//array methods
var list3 = ["tiger", "cat", "bear", "bird"];
list3.shift(); //removes tiger from the start of list and shifts it to the left
list3.pop(); //removes bird from end of array
list3.push("elephant") //adds item to the end of array
list3.concat(["bee","deer"]) //creates a new array and adds the new items
//to the array. need to be defined list4 = list3.concat(["bee","deer"]) 
list.sort() //returns a sorted list
//look at w3schools for a list od array methods


//Array Exercise
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

//remove banana
array.shift();

//sort the array in order
array.sort();

//Put "Kiwi" at the end of the array.
array.push("Kiwi");

//Remove "Apples" from the array.
array.shift();

//Sort the array in reverse order. (Not alphabetical, but reverse)
array.reverse();

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges"

//console.log(array2[2][0]);
array2[1][1][0];