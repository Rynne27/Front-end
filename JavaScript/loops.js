var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study some js",
    "eat healthy"
];

//add exclamation marks on all items in the todo list
//for loop
for (var i=0; i < todos.length; i++) {
    todos[i] = (todos[i] + "!");
    console.log(todos);
}

//while loop
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

var counterTwo = 10;
while (counterTwo > 0) {
    console.log(counterTwo);
    counterTwo--;
}

//dowhile
let counterThree = 10;
do {
    console.log(counterThree);
   counterThree--;
} while (counterTwo > 0);

//foreach (ECMASript5)

todos.forEach(function(todo) {
    console.log(todo);
})