var five = require("johnny-five");

five.Board().on("ready", function(){
  var tempSensor = new five.Sensor("A0");

  tempSensor.on("read", function(err, value){
    var cel = (100 * (value / 1000) - 50).toFixed(2);
    console.log("temp is " + cel);
  });
});