We have caused one LED to blink, now it's time to up the
stakes. Lets connect eight. We'll also have an opportunity to
stretch the Arduino a bit by creating various lighting
sequences. This circuit is also a nice setup to experiment with
writing your own programs and getting a feel for how the Arduino works.
Along with controlling the LEDs we start looking into a few simple programming methods to keep your programs small.
for() loops - used when you want to run a piece of code several times. arrays[] - used to make managing variables easier (it's a list of variables).



<a id="parts"></a>
## Parts

* 2 pin header x 4
* 5mm LED x 8
* 330 ohm resistor (orange-orange-brown) x 8
* jumper wires

<a id="circuit"></a>
## Circuit Layout
[<img style="max-width:400px" src="/images/circ/CIRC02-sheet.png" alt="Circuit Layout"/>](/images/circ/CIRC02-sheet.png)

<a id="assembly"></a>
## Circuit Assembly
![Assembly Diagram](/images/assembly/CIRC-02-3dexploded.png "Assembly Diagram")

Assembly video: http://ardx.org/VIDE02

<a id="code"></a>
## Code

You can find this code in `code/CIRC-02-code-leds.js`

	
<a id="troubleshooting"></a>
## Troubleshooting

### Some LEDs Fail to Light

It is easy to insert an LED backwards. Check the LEDs that aren't working and ensure they the right way around.


###  Operating out of sequence

With eight wires it's easy to cross a couple. Double check that the first LED is plugged into pin 2 and each pin there after.

### Starting afresh
Its easy to accidentally misplace a wire without noticing. Pulling everything out and starting with a fresh slate is often easier than trying to track down the problem.

<a id="extending"></a>
## Extending the Code


<a id="more"></a>
## More

For more details on this circuit, see http://ardx.org/CIRC02