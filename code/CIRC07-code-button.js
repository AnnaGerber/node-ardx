var five = require("johnny-five"),
    onButton, offButton, led;

five.Board().on("ready", function() {

  onButton = new five.Button(2);

  offButton = new five.Button(3);

  led = new five.Led(13);

  onButton.on("down", function(value){
    led.on();
  });

  offButton.on("down", function(){
    led.off();
  });

});
