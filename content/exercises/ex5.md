
Time to start playing with chips, or integrated circuits (ICs) as they like to
be called. The external packaging of a chip can be very deceptive. For
example, the chip on the Arduino board (a microcontroller) and the one we
will use in this circuit (a shift register) look very similar but are in fact rather
different. The price of the ATMega chip on the Arduino board is a few dollars
while the 74HC595 is a couple dozen cents. It's a good introductory chip, and once you're comfortable playing around with it and its datasheet (available online http://ardx.org/74HC595 ) the world of chips will be your oyster. The shift register (also called a serial to parallel converter), will give you an additional 8 outputs (to control LEDs and the like) using only three Arduino pins. They can also be linked together to give you a nearly unlimited number of outputs using the same four pins. To use it you “clock in” the data and then lock it in (latch it). To do this the code sets the data pin to either HIGH or LOW, pulses the clock, then sets the data pin again and pulses the clock repeating until it has shifted out 8 bits of data. Then it pulses the latch and the 8 bits are transferred to the shift registers pins. It sounds complicated but is really simple once you get the hang of it.
(for a more in depth look at how a shift register works visit: http://ardx.org/SHIF)

<a id="parts"></a>
## Parts

* 2 pin header x 4
* 5mm LED x 8
* 330 ohm resistor (orange-orange-brown) x 8
* Shift Register 74HC595
* jumper wires

<a id="circuit"></a>
## Circuit Layout
[<img style="max-width:400px" src="/images/circ/CIRC05-sheet.png" alt="Circuit Layout"/>](/images/circ/CIRC05-sheet.png)

<a id="assembly"></a>
## Circuit Assembly
![Assembly Diagram](/images/assembly/CIRC-05-3dexploded.png "Assembly Diagram")

Assembly video: http://ardx.org/VIDE05

<a id="code"></a>
## Code

You can find this code in `code/CIRC-05-code-.js`


<a id="troubleshooting"></a>
## Troubleshooting


<a id="extending"></a>
## Extending the Code



<a id="more"></a>
## More

For more details on this circuit, see http://ardx.org/CIRC05