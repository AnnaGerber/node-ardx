
No previous electronic experience is required to have fun with the Arduino Experimenter's Kit. Here are a few details about each component to make identifying, and perhaps understanding them, a bit easier.


<a id="led"></a>

## LED
(Light Emitting Diode)

![LED](/images/parts/LED-05B-SR.jpg "LED")

### What it Does:
Emits light when a small current is passed through it. (only in one direction) 
### No. of Leads:
2 (one longer, this one connects to positive)
### Identifying:
Looks like a mini light bulb.
### Things to watch out for:

* Will only work in one direction
* Requires a current limiting resistor

### More Details:
http://ardx.org/LED

<hr/>
<a id="diode"></a>
## Diode
![Diode](/images/parts/DIOD-01.jpg "Diode")
### What it Does:
The electronic equivalent of a one way valve. Allowing current to flow in one direction but not the other. 
### No. of Leads:
2 
### Identifying:
Usually a cylinder with wires extending from either end. (and an off center line indicating polarity)
### Things to watch out for:
Will only work in one direction (current will flow if end with the line is connected to ground)
### More Details:
http://ardx.org/DIOD

<hr/>
<a id="resistor"></a>
## Resistor
![Resistor](/images/parts/RES-102.jpg "Resistor")

### What it Does:
Restricts the amount of current that can flow through a circuit.
### No. of Leads:
2 
### Identifying:
Cylinder with wires extending from either end. The value is displayed using a color coding system.
### Things to watch out for:
Easy to grab the wrong value (double check the colors before using)

### More Details:
http://ardx.org/RESI


<hr/>
<a id="transistor"></a>
## Transistor

### What it Does:
Uses a small current to switch or amplify a much larger current.

### No. of Leads:
3 (Base, Collector, Emitter)
### Identifying:
Comes in many different packages but you can read the part number off the package. (P2N2222AG in this kit and find a datasheet online)
### Things to watch out for:
Plugging in the right way round (also a current limiting resistor is often needed on the base pin)
### More Details:
http://ardx.org/TRAN


<hr/>
<a id="servo"></a>
## Servo

### What it Does:
Takes a timed pulse and converts it into an angular position of the output shaft.
### No. of Leads:
3
### Identifying:
A plastic box with 3 wires coming out one side and a shaft with a plastic horn out the top.
### Things to watch out for:
The plug is not polarized so make sure it is plugged in the right way.

### More Details:
http://ardx.org/SERV

<hr/>
<a id="dcmotor"></a>
## DC Motor 

### What it Does:
Spins when a current is passed through it.
### No. of Leads:
2 
### Identifying:
Usually a cylinder with a shaft coming out of one end.
### Things to watch out for:
Using a transistor or relay that is rated for the size of motor you're using.

### More Details:
http://ardx.org/MOTO

<hr/>
<a id=""></a>
## 

### What it Does:

### No. of Leads:
2 
### Identifying:

### Things to watch out for:


### More Details:
http://ardx.org/

<hr/>
<a id="piezo"></a>
## Piezo Element

### What it Does:
A pulse of current will cause it to click. A stream of pulses will cause it to emit a tone.
### No. of Leads:
2 
### Identifying:
In this kit it comes in a little black barrel, but sometimes they are just a gold disc.
### Things to watch out for:
Difficult to misuse.

### More Details:
http://ardx.org/PIEZ

<hr/>
<a id="ic"></a>
## IC (Integrated Circuit)

### What it Does:
Packages any range of complicated electronics inside an easy to use package.
### No. of Leads:
2 - 100s (in this kit there is one with 3 (TMP36) and one with 16 (74HC595)
### Identifying:
The part ID is written on the outside of the package. (this sometimes requires a lot of light or a magnifying glass to read).
### Things to watch out for:
Proper orientation. (look for marks showing pin 1)

### More Details:
http://ardx.org/ICIC

<hr/>
<a id="pushbutton"></a>
## Pushbutton

### What it Does:
Completes a circuit when it is pressed.
### No. of Leads:
4
### Identifying:
A little square with leads out the bottom and a button on the top.
### Things to watch out for:
These are almost square so can be inserted 90 degrees off angle.

### More Details:
http://ardx.org/BUTT

<hr/>
<a id="pot"></a>
## Potentiometer
![Potentiometer](/images/parts/POT-103-A.jpg "Potentiometer")

### What it Does:
Produces a variable resistance dependant on the angular position of the shaft.
### No. of Leads:
3 
### Identifying:
They can be packaged in many different form factors, look for a dial to identify.
### Things to watch out for:
Accidentally buying logarithmic scale.

### More Details:
http://ardx.org/POTE

<hr/>
<a id="photoresistor"></a>
## Photo Resistor
![Photo Resistor](/images/parts/IC-PHOTO.jpg "Photo Resistor")
### What it Does:
Produces a variable resistance dependant on the amount of incident light.
### No. of Leads:
2 
### Identifying:
Usually a little disk with a clear top and a curvy line underneath.
### Things to watch out for:
Remember it needs to be in a voltage divider before it provides a useful input.

### More Details:
http://ardx.org/PHOT

<hr/>
<a id="tempsensor"></a>
## TMP36 Temperature Sensor
![TMP36](/images/parts/TMP36-01.jpg "TMP36")
### What it Does:
Produces a variable resistance dependant on the ambient temperature. It outputs 10 millivolts per degree centigrade on the signal pin, with a 500mV offset to allow measuring negative temperatures.
### No. of Leads:
3 (ground, signal, 5V)
### Identifying:
Usually has TMP36 written on the component.
### Things to watch out for:
It looks a bit like the P2N2222AG transistors - check the text printed on the component to make sure you are using the right one.

### More Details:
http://ardx.org/TMP36

<hr/>
<a id="relay"></a>
## Relay
![Relay](/images/parts/RELAY-01.jpg "Relay")
### What it Does:
Acts as an electrically controlled mechanical switch.
### No. of Leads:
Depends on the relay. We will use a SPDT relay which has 5.
### Identifying:
Looks like a box.


<hr/>
<a id="breadboard"></a>
## Solderless Breadboard
![Breadboard](/images/parts/BREA-01.jpg "Breadboard")
### What it Does:
Used for prototyping circuits

### Things to watch out for:
The points in each row are connected horizontally


<hr/>
<a id="headerpins"></a>
## Header Pins
![Header Pins](/images/parts/HEAD-16.jpg "Header pins")
### What it Does:
In this kit, header pins are used to secure the circuit sheets to the breadboard and to connect component leads (e.g. on the servo) to the breadboard. Pins can be snapped off to desired length.


