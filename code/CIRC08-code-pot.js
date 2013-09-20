var five = require("johnny-five"),
    board, potentiometer;

board = new five.Board();

board.on("ready", function() {

  potentiometer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  myLed = new five.Led(9);

  potentiometer.on("read", function() {
    var rawValue = this.raw;
    myLed.brightness(Math.floor(rawValue / 4));
  });
});

