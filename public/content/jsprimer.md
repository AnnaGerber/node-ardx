

No previous coding experience is required to work through the exercises in this guide. This primer summarises some of the basics of the JavaScript language that we will use to program our NodeBots. 

See the [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) and <a href="https://github.com/rwaldron/johnny-five">Johnny-Five</a> docs for more detail.


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
    var aString = "The value of x is " + x;

The `this` operator refers to the current execution context

The `typeof` operator returns the type
    
    typeof aString; // returns "string"

## Math

    Math.floor(myInt);
    Math.ceil(myInt);
    Math.min(x, y);
    Math.random(); // random number between 0 and up to but not equal to 1
    Math.PI;

## Comments

    // Comment until the end of the line

    /* 
     *  Comment block
     */

## Writing to the console

    console.log("Hello World");

## Conditional Behaviour

Use comparison operators < (less than) > (greater than) <= (less than or equal) >= (greater than or equal) == (equals) != (not equals) 

    if (x > 0) {
	    // do something
    } else {
	    // do something else
    }

#### Conditional operator:

The conditional operator provides an inline shorthand: `(condition? expressionWhenTrue : expressionWhenFalse )` e.g.

    var myString = "I have " + (x == 1 ? x + "thing" : x + "things");


## Loops

    for (var i = 0; i < myArray.length; i++) {
    	console.log(myArray[i]);
    }

    while (x < 10) {
    	console.log(x++);
    }

## Functions

    function myIncrementFunction (x) {
    	return x + 1;
    }

## Calling functions

    myIncrementFunction(1000);

Functions defined as part of an Object are known as methods, and can be called as follows:
   
    myDate.getFullYear();

## Exception handling

    try {
        // try to do something
    } catch (e) {
        // handle errors
    } finally {
        // this block is executed regardless of whether there was an exception
    }

## Require

Include a library in a node.js program

    var five = require("johnny-five");
    var myLib = require("some-other-lib");

## Handling events

Use `on` to attach a callback function that will be executed whenever the event occurs:

    var myBoard = new five.Board();
    myBoard.on("ready", function() {
    	// code to be executed when the board is ready
    });

