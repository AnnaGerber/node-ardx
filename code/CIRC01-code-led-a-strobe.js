var j5 = require("johnny-five");
var myBoard, myLed;

myBoard = new j5.Board();

myBoard.on("ready", function() {

  myLed = new j5.Led(13)

  myLed.strobe( 1000 );

  // make myLED available as "led" in REPL

  // try "on", "off", "toggle", "strobe", "stop" (stops strobing)
  
  this.repl.inject({
  	led: myLed
  });
  console.log("You can interact with the RGB LED via the variable 'led' e.g. led.on();\n Hit control-D to exit.\n >> ");
});