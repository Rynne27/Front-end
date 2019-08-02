// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!");
// })
//others:
//mouseenter
//mouseleave

var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

//cleaned up version
button.addEventListener("click", function () { //when the user clicks enter..
    //test console.log("click is working");
    //input.value is the value of the input duh
    if (inputLength()> 0) { //dont add if the user does not input anything
      createListElement();
    }
})

//original version
//button.addEventListener("click", function () { //when the user clicks enter..
    //test console.log("click is working");
    //input.value is the value of the input duh
   // if (input.value.length > 0) { //dont add if the user does not input anything
      //  var li = document.createElement("li"); //create another list element
      //  li.appendChild(document.createTextNode(input.value)); //attach text to to the the li 
      //  ul.appendChild(li); //attach the li to the general unordered list element ul
     //   input.value = ""; //clear input value after adding the item 
  //  }
//})

//we also want to add items when the enter key is pressed, use keyboard events
input.addEventListener("keypress", function (event) {
    //how do we know when the enter key is pressed though?
    //listen to character codes enter is keycode 13
    //event.which(keycode number) or keycode itself
    if (inputLength() > 0 && event.keyCode === 13) {
       createListElement();
    }
})

var myToggle = document.querySelector('.done');
myToggle.addEventListener("click", function(event) {
    myToggle.classList.toggle('.done');
})

var delButtons = document.getElementsByClassName("delete");
delButtons.addEventListener("click", function() {
    delButton.removeChild(li)
})