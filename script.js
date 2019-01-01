var slider = document.getElementById("redSlider");
var output = document.getElementById("demo");
var boxColor = "";
var outputColor = "";
var originalColor = "";
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
var temp =  getRandomColor();
originalColor = temp;
  $("#colorBox").css("background-color", temp);
  $("#colorBox").css("border-style", "none");  
}

function redSliderChange(val) {		
	document.getElementById('redSlider').innerHTML=val;						
	red = val;
	setBoxColor()
}
function greenSliderChange(val) {
		
	document.getElementById('greenSlider').innerHTML=val;						
	green = val;
	setBoxColor()
}
function blueSliderChange(val) {		
	document.getElementById('blueSlider').innerHTML=val;						
	blue = val;
	console.log(red, " ", green, " ", blue);
	setBoxColor()
}

function setBoxColor() {	
	temp=""
	outputColor=temp.concat("rgb(",red,",",green,",",blue,")");
	//document.getElementById('colorBox').style.backgroundColor
	console.log(outputColor);
	$("#colorBox").css("background-color", outputColor);
}

function resetBoxColor() {	
	temp=""
	outputColor=temp.concat("rgb(",255,",",255,",",255,")");	
	$("#colorBox").css("background-color", outputColor);
}

function startGame()
{
	setRandomColor();		
	countUp();
}

function countUp()
{
			document.getElementById("colorBox").innerHTML = "Start!";	
			var timeleft = 0;
			var  countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = 0 + ++timeleft;
			  disableButtons();
			  if(timeleft > 10)
			  {
				 resetBoxColor();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);				
				enableButtons();
				//countDown();
			  }
			},1000);			
}


function countDown()
{
			document.getElementById("colorBox").innerHTML = "Start!";	
			var timeleft = 0;
			var  countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = 0 + ++timeleft;
			  disableButtons();
			  if(timeleft > 10)
			  {
				 resetBoxColor();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);				
				enableButtons();
			  }
			},1000);			
}

function showOriginalColor()
{
	$("#colorBox").css("background-color", originalColor);
}

function enableButtons()
{
		document.getElementById("startButton").disabled = false;
		document.getElementById("showColorButton").disabled = false;
		document.getElementById("resetButton").disabled = false;	
}

function disableButtons()
{
		document.getElementById("startButton").disabled = true;
		document.getElementById("showColorButton").disabled = true;
		document.getElementById("resetButton").disabled = true;	
}