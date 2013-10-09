var five = require("johnny-five"),
    board, shiftRegister;

board = new five.Board();

board.on("ready", function() {
  shiftRegister = new five.ShiftRegister({
    pins: {
      data: 2,
      clock: 3,
      latch: 4
    }
  });

  var value = 0;

  function next() {
    value = value > 0x11 ? value >> 1 : 0x88;
    shiftRegister.send( value );
    setTimeout(next, 300); 
  }

  this.repl.inject({
    sr: shiftRegister
  });

  next();

});