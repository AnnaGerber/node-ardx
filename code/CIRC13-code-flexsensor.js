var five = require("johnny-five");

five.Board().on("ready", function(){
  var flexSensor = new five.Sensor("A0");
  var myServo = new five.Servo(9);

  flexSensor.on("data", function(err, value){
    var servoAngle = five.Fn.map(value, 50, 300, 0, 179);
    myServo.move(servoAngle);
  });
});
