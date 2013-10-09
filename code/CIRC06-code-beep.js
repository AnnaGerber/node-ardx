var five = require("johnny-five");

five.Board().on("ready", function() {
  var val = 0;
  var piezoPin = 9;
  // Set pin 9 to PWM mode
  this.pinMode( piezoPin, 3 );
  // beep continously
  this.loop(200, function(){
  	if (val){
  		this.analogWrite( piezoPin, 20 );
  	} else {
  		this.analogWrite(piezoPin, 0);
  	}
  	val = val ? 0 : 1;
  })
});
