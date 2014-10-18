
To this point we have controlled light, motion, and
electrons. Let's tackle sound next. But sound is an
analog phenomena, how will our digital Arduino cope?
We will once again rely on its incredible speed which will let it
mimic analog behavior. To do this, we will attach a piezo element to one of the Arduino's digital pins. A piezo element makes a clicking sound each time it is pulsed with current. If we pulse it at the right frequency (for example 440 times a second to make the note middle A) these clicks will run together to produce notes.


<a id="parts"></a>
## Parts

* 2 pin header x 4
* Piezo element
* jumper wires

<a id="circuit"></a>
## Circuit Layout
[<img style="max-width:400px" src="../../images/circ/CIRC06-sheet-small.png" alt="Circuit Layout"/>](../../images/circ/CIRC06-sheet.png)

<a id="assembly"></a>
## Circuit Assembly
![Assembly Diagram](../../images/assembly/CIRC-06-3dexploded.png "Assembly Diagram")

Assembly video: http://ardx.org/VIDE06

<a id="code"></a>
## Code

You can find this code in `code/CIRC-06-code-beep.js`

	var five = require("johnny-five");

	five.Board().on("ready", function() {
	  var piezo = new five.Piezo(9);
	  var val = 0;

	  this.loop(200, function() {
	    if (val ^= 1) {
	      // Play note a4 for 1/5 second
	      piezo.frequency(five.Piezo.Notes["a4"], 200);
	    }
	  });
	});


<a id="troubleshooting"></a>
## Troubleshooting

### No Sound
Given the size and shape of the piezo element it is easy to miss the right holes on the breadboard. Try double checking its placement.

### Can't Think While the Notes are Playing?
Just pull up the piezo element whilst you think, run the program then plug it back in.


<a id="extending"></a>
## Extending the Code

Take a look at piezo.js in johnny-five's lib folder for an example of how to write functions to work with tones and durations rather than directly talking to the hardware.

<a id="more"></a>
## More

For more details on this circuit, see http://ardx.org/CIRC06
