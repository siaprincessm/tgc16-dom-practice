// USE THOSE VARIABLES TO MODIFY THE DOM ELEMENTS
let header = document.querySelector('h1').innerText = "Hello World!";
let important = document.querySelector('span#important').style.backgroundColor = "red";
 document.querySelector('li.todo').style.fontFamily = "verdana";
 document.querySelector('li.todo').style.fontSize = "16px";

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}