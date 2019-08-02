// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "jesse",
        password: "love"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "john",
        password: "boy"
    }
];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
    {
        username: "bobby",
        timeline: "I'm so freaking tired",
    },

    {
        username: "Maze",
        timeline: "Better the devil you know",
    },
    {
        username: "james",
        timeline: "Cruel Intentions",
    },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);