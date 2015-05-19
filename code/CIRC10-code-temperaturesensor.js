var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var temp = new five.Temperature({
    pin: "A0",
    controller: "TMP36"
  });

  temp.on("change", function() {
    console.log("Temp: %d", this.celsius);
  });
});
