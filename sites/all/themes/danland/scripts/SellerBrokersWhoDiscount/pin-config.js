﻿var pin_config = {
	'default':{
		'pinShadow':'#000', //shadow color below the points
		'pinShadowOpacity':'50', //shadow opacity, value, 0-100
	},
	'points':[	/*{
		'shape':'rectangle',//choose the shape of the pin circle or rectangle
		'hover':'<u><b>Washington DC</b></u><br>This pin when clicked will open<br>the URL in a <span style="color:black; background-color:#a9f038;"><b>NEW</b></span> window.',//the content of the hover ppup
		'pos_X':672,//location of the pin on X axis
		'pos_Y':210,//location of the pin on Y axis
		'width':12,//width of the pin if rectangle (if circle use diameter)
		'height':12,//height of the pin if rectangle (if circle delete this line)
		'outline':'#FFF',//outline color of the pin
		'thickness':1,//thickness of the line (0 to hide the line)
		'upColor':'#0000FF',//color of the pin when map loads
		'overColor':'#3399ff',//color of the pin when mouse hover
	'downColor':'#00ffff',//color of the pin when clicked 
		//(trick, if you make this pin un-clickable > make the overColor and downColor the same)
		'url':'http://www.html5interactivemaps.com',//URL of this pin
		'target':'new_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
		'enable':true,//true/false to enable/disable this pin
	},
	{
		'shape':'circle',
		'hover':'Los Angeles',
		'pos_X':78,
		'pos_Y':293,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Chicago',
		'pos_X':518,
		'pos_Y':178,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Houston',
		'pos_X':420,
		'pos_Y':402,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Phoenix',
		'pos_X':164,
		'pos_Y':316,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Seattle',
		'pos_X':84,
		'pos_Y':39,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Philadelphia',
		'pos_X':692,
		'pos_Y':184,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'San Antonio',
		'pos_X':365,
		'pos_Y':410,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'<b><u>Dallas</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234<br><span style="color: #b9f700;"><strong>"Pin can be interactive but not clickable"</strong></span>',
		'pos_X':402,
		'pos_Y':350,
		'diameter':15,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#FFEE88',
		'url':'http://www.html5interactivemaps.com',
		'target':'none',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Indianapolis',
		'pos_X':544,
		'pos_Y':210,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Jacksonville',
		'pos_X':633,
		'pos_Y':374,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'San Francisco',
		'pos_X':38,
		'pos_Y':213,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Charlotte',
		'pos_X':631,
		'pos_Y':286,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},
	{
		'shape':'circle',
		'hover':'Detroit',
		'pos_X':578,
		'pos_Y':163,
		'diameter':12,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'http://www.html5interactivemaps.com',
		'target':'same_window',
		'enable':true,
	},*/
	]
}
