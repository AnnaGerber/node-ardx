var j5 = require("johnny-five");
var myBoard, relayPin, val;

myBoard = new j5.Board();
relayPin = 2;
val = 0;

myBoard.on("ready", function() {
  this.pinMode( relayPin, 1 );
  this.loop( 1000, function() {
    this.digitalWrite( relayPin, (val = val ? 0 : 1) );
  });
});