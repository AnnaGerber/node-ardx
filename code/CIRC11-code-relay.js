var j5 = require("johnny-five");
var myBoard;

myBoard = new j5.Board();
var relayPin = 2;
var val = 0;
myBoard.on("ready", function() {
  this.pinMode( relayPin, 1 );
  this.loop( 1000, function() {
    this.digitalWrite( relayPin, (val = val ? 0 : 1) );
  });
});