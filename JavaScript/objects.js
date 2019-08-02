//property key:value pairs
var user = {
    name : "John",
    age : 34,
    hobby : "Soccer",
    isMarried: false,
    //can have an array in an object
    spells : ["abakadabra", "shazam", "boo"],
    //can have function inside object
    shout: function() {
        console.log("AAHHHH!");
    }
};

//to grab the values
user.name;
user.age;
user.isMarried;

//methods
user.favoriteFood = "Spinach"; //adds 
user.isMarried = true //change a value

//access function shout
user.shout();

//access a spell
user.spells[1];

//what if you have multiple users
var list = [
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jesse",
        password: "123"
    }
];

//access andy's password
list[0].password;

//there can be empty objects
var emptyObj = {}
//empty user
user2 = {};
//null obj: there is nothing
var nullObj = null //returns null

//even in arrays you can have an empty array
list2 = [];
