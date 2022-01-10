// 1

console.log(hello);
var hello = 'world';

// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);
// hello = "world";
// out = "undefined"
// ========================

// 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// AFTER HOISTING BY THE INTERPRETER
// var needle;
// needle = "haystack";
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// out = "magnet"
// ========================

// 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// brendan = "super cool";
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// out = "super cool"
// ========================


// 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// AFTER HOISTING BY THE INTERPRETER
// var food;
// food = "chicken";
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// out = "chicken", "half-chicken"
// ========================

// 5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// AFTER HOISTING BY THE INTERPRETER
// mean(); // mean is not a funtion, stops here.
// var mean;
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// out = "mean is not a funtion" Error
// ========================

// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// AFTER HOISTING BY THE INTERPRETER
// var genre;
// genre = "disco";
// console.log(genre);
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// out = undefined, "rock", "r&b", "disco"
// ========================

// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// out = "san jose", "seattle", "burbank", "san jose"
// ========================

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
// var makeDojo; not sure if this is right???
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// out = TypeError: Assignment to constant variable.
// ========================
