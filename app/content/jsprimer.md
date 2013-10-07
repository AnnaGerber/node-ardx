
## Variables

    var myVar;
Use the comma operator to declare multiple variables in a single declaration e.g.
    var x, y;

## Variable assignment

    var myVar = 0;

## Types

    var myInt = 0;
    var myFloat = 2.5;
    var myBoolean = true;
    var myString = "This is a string";
    var myArray = [1,2,3];
    var myJSONObject = {
    	myField : "Some value"
    };
    // Object instantiation using new
    var myDate = new Date();

## Operators

Numeric operators include + (addition) - (subtraction) / (division) * (multiplication) % (modulo)

    var x = 4;
    x = x + 1; // x is 5
    y = x % 2; // y is 1
    x++; // x is 6
    x--; // x is 5
    x += 3; // x is 8
    var aString = "The value of x is " + x

The `this` operator refers to the current execution context

The `typeof` operator returns the type
    
    typeof aString // returns "string"

## Math

   Math.floor(myInt)
   Math.ceil(myInt)
   Math.min(x, y)
   Math.random() // returns random number between 0 and up to but not equal to 1
   Math.PI

## Comments

    // Comment until the end of the line

    /* 
     *  Comment block
     */

## Writing to the console

    console.log("Hello World");

## Conditional Behaviour

    if (x > 0) {
	    // do something
    } else {
	    // do something else
    }

#### Conditional operator:

    var myString = "I have " + (x == 1 ? x + "thing" : x + "things");

## Loops

    for (var i = 0; i < myArray.length; i++) {
    	console.log(myArray[i]);
    }

    while (x < 10) {
    	x++
    }

## Functions

    function myIncrementFunction (x) {
    	return x + 1;
    }

## Calling functions

    myIncrementFunction( 1000 );

Functions defined as part of an Object are known as methods, and can be called as follows:
   
   myDate.getFullYear();

## Exception Handling

    try {

    } catch (e) {

    } finally {

    }

## Require

Include a library in a node.js program

    var five = require("johnny-five");
    var myLib = require("mylib");

## Handling events

The callback function will be executed whenever the event occurs:

    var myBoard = new five.Board();
    myBoard.on("ready", function() {
    	// code to be executed when the board is ready
    });

See the [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) for more