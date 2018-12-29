var slider = document.getElementById("redSlider");
var output = document.getElementById("demo");
var boxColor =  $("#colorBox").css("background-color", getRandomColor());
var outputColor = "";
var originalColor = boxColor;
var red=255;
var green=255;
var blue=255;
//output.innerHTML = slider.value; //Display the default slider value

// Update the current slider value (each time you drag the slider handle)
/*slider.oninput = function() {
  output.innerHTML = this.value;
  //boxColor += this.value;
}*/

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }  
  return color;  
}

function setRandomColor() {	
  $("#colorBox").css("background-color", getRandomColor());
  $("#colorBox").css("border-style", "none");  
}

function redSliderChange(val) {		
	document.getElementById('redSlider').innerHTML=val;						
	red = val;
}
function greenSliderChange(val) {
		
	document.getElementById('greenSlider').innerHTML=val;						
	green = val;
}
function blueSliderChange(val) {		
	document.getElementById('blueSlider').innerHTML=val;						
	blue = val;
	console.log(red, " ", green, " ", blue);
}

function setBoxColor() {	
	temp=""
	outputColor=temp.concat("rgb(",red,",",green,",",blue,")");
	//document.getElementById('colorBox').style.backgroundColor
	console.log(outputColor);
	$("#colorBox").css("background-color", outputColor);
}


//document.getElementById('slider').value="50";
