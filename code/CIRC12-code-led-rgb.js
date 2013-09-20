var j5 = require("johnny-five");

j5.Board().on("ready", function() {
  var myLed = new j5.Led.RGB([ 9, 10, 11 ]);

  // make the LED red
  myLed.color("#ff0000");

  this.wait( 1000, function() {
    // make the LED blue after 1 second
    myLed.color("#00ff00");
  });

  this.wait(2000, function(){
    // make the LED green after 2 seconds
    myLed.color("#0000ff");
  });

  this.wait(3000, function(){
    // turn the LED off after 3 seconds
    myLed.off();
  });

  // make myLED available as "r" in REPL
  
  // try "on", "off", "toggle", "brightness",
  // "fade", "fadeIn", "fadeOut", "color",
  // "pulse", "strobe", "stop"
  this.repl.inject({
    r: myLed
  });
  console.log("You can interact with the RGB LED via the variable 'r' e.g. r.pulse();\n>> ");
});
