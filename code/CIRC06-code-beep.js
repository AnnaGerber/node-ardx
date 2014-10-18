var five = require("johnny-five");

five.Board().on("ready", function() {
  var piezo = new five.Piezo(9);
  var val = 0;

  this.loop(200, function() {
    if (val ^= 1) {
      // Play note a4 for 1/5 second
      piezo.frequency(five.Piezo.Notes["a4"], 200);
    }
  });
});
