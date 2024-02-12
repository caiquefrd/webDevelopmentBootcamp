prompt = require('prompt-sync')();


var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason", "Ananda"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    console.log("Fedorenta")
}