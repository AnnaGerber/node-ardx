var five = require("johnny-five"),
    board, myMotor, led;

board = new five.Board();

board.on("ready", function() {
  myMotor = new five.Motor({
    pin: 9
  });

  // event handlers on start and stop
  myMotor.on("start", function( err, timestamp ) {
    console.log( "started", timestamp );

    // stop after 2 seconds
    board.wait(2000, function() {
      myMotor.stop();
    });
  });

  myMotor.on("stop", function( err, timestamp ) {
    console.log( "stopped", timestamp );
  });

  // start motor - speed argument (between 0 and 255) is optional
  myMotor.start(250);

  this.repl.inject({
    myMotor: myMotor
  });

});
