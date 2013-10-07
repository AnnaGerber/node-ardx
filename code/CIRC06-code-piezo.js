var five = require("johnny-five"),
    board, piezo;

board = new five.Board({
  debug: true
});

board.on("ready", function() {

  piezo = new five.Piezo(9);


  board.repl.inject({
    piezo: piezo
  });


  // piezo.note( volume, duration );
  piezo.tone( 20, 500 );

});
