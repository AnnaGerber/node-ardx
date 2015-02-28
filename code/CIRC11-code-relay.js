var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function() {
  var val = 0;
  var relay = new five.Relay(2);
  this.loop(1000, function() {
    if (val ^= 1) {
      relay.on();
    } else {
      relay.off();
    }
  });
});
