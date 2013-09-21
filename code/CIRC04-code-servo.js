var five = require("johnny-five"),
    board, myServo;

board = new five.Board();

board.on("ready", function() {

  myServo = new five.Servo(9);

  board.repl.inject({
    servo: myServo
  });

  
  myServo.sweep();

  this.wait(5000, function(){
    myServo.stop();
    myServo.center();
  });
  

});