var five = require("johnny-five"),
    board, mySoftPot, myLed;

function getRGB(hue) {
  var colors = [];
  var r = five.Fn.constrain(five.Fn.map(hue, 0, 512, 255, 0), 0, 255);
  var g = five.Fn.constrain(
        five.Fn.map(hue, 0, 512, 0, 255), 0, 255) -
      five.Fn.constrain(five.Fn.map(hue, 512, 1023, 0, 255),0,255);
  var b = five.Fn.constrain(five.Fn.map(hue, 512, 1023, 0, 255), 0, 255);
  colors[0] = r;
  colors[1] = g;
  colors[2] = b;
  return colors;
}

board = new five.Board();

board.on("ready", function() {

  myLed = new five.Led.RGB([ 9, 10, 11 ]);

  mySoftPot = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  mySoftPot.on("data", function( err, value ) {
    console.log("read value",value);
    var rgbColors = getRGB(value);
    myLed.color(rgbColors);
  });
});
