/* add code below this */
// STRING OBJECTS
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("<p>typeof stringOne = " + typeof stringOne + "</p>");
document.write("<p>typeof stringThree = " + typeof stringThree + "</p>");

// Comparing values
if (stringOne == stringTwo)
    document.write("<p>stringOne has = value to stringTwo</p>");

if (stringOne == stringFour)
    document.write("<p>stringOne has = value to stringFour</p>");

if (stringOne === stringTwo)
    document.write("<p>stringOne has = value AND = type to stringTwo</p>");

if (stringTwo === stringThree)
    document.write("<p>stringTwo has = value AND = type to stringThree</p>");

if (stringTwo === stringFour)
    document.write("<p>stringTwo has = value AND = type to stringFour</p>");


// DATE OBJECT
var dateOne = new Date();
document.write("<p>Current Date and Time: " + dateOne + "</p>");


// MATH OBJECT
document.write("<p>Value of PI: " + Math.PI + "</p>");
document.write("<p>Square Root of 4: " + Math.sqrt(4) + "</p>");
document.write("<p>Random Number: " + Math.random() + "</p>");

