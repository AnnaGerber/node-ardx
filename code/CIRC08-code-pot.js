var five = require("johnny-five"),
    board, myPotentiometer;

board = new five.Board();

board.on("ready", function() {

  myPotentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  myLed = new five.Led(9);

  myPotentiometer.on("data", function() {
    var rawValue = this.raw;
    myLed.brightness(Math.floor(rawValue / 4));
  });
});

