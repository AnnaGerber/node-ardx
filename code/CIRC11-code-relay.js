var j5 = require("johnny-five");
var myBoard = new j5.Board();

myBoard.on("ready", function() {
  var val = 0;
  var relay = new j5.Relay(2);
  this.loop(1000, function() {
    if (val ^= 1) {
      relay.on();
    } else {
      relay.on();
    }
  });
});
