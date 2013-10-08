var j5 = require("johnny-five");
var myBoard, leds=[], ledPins = [2,3,4,5,6,7,8,9];

myBoard = new j5.Board();

myBoard.on("ready", function() {
  // initialize LEDs
  for (var i = 0; i < ledPins.length; i++){
  	var myLed = new j5.Led(ledPins[i]);
  	leds.push(myLed);
  }
 
  function allOn(){
    for (var i = 0; i < leds.length; i++) {
    	leds[i].on();
    }
  } 

  function allOff(){
    for (var i = 0; i < leds.length; i++) {
    	leds[i].off();
    }
  }

  function oneAfterAnother() {
  	var delay = 1;
  	board.counter = 0;
  	for (var i = 0; i < leds.length; i++) {
  	  var led = leds[i];

  	  board.wait(delay,function(){
  	    console.log(this.counter + " on")
  	  	leds[this.counter].on();
  	  })
  	  board.wait(delay + 200,function(){
  	  	console.log(this.counter + " off")
  	  	leds[this.counter].off();
  	  	this.counter = (this.counter + 1) % leds.length;
  	  })
  	  delay += 500;
  	}
  }

  // allOn();
  // board.wait(1000,allOff);

  oneAfterAnother();
  board.loop(4500, oneAfterAnother);
});