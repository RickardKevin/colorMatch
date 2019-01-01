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
	setBoxColor()
}

function setBoxColor() {	
	temp=""
	outputColor=temp.concat("rgb(",red,",",green,",",blue,")");
	//document.getElementById('colorBox').style.backgroundColor	
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
				//add sleep function?
			  if(timeleft > 10)
			  {
				 resetBoxColor();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);				
				enableButtons();
				countDown();
			  }
			},1000);			
}


function countDown()
{
			var timeleft = 30;
			var  countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = (0 - --timeleft)*-1;
			  //disableButtons();
			  if(timeleft <= 0)
			  {
				scoreGame();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);				
				//enableButtons();
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
		document.getElementById("redSlider").disabled = false;	
		document.getElementById("greenSlider").disabled = false;	
		document.getElementById("blueSlider").disabled = false;	
}

function disableButtons()
{
		document.getElementById("startButton").disabled = true;
		document.getElementById("showColorButton").disabled = true;
		document.getElementById("resetButton").disabled = true;	
		document.getElementById("redSlider").disabled = true;	
		document.getElementById("greenSlider").disabled = true;	
		document.getElementById("blueSlider").disabled = true;	
}

function compareColors()
{
	//calculates comparison
}

function displayComparison()
{
	//shows half and half div	
	var comparDiv = document.createElement("div");	
	comparDiv.id = "compareBox";
	//$("#compareBox").css("background-color", originalColor);
	$("#compareBox").css("background-color", originalColor);
	document.getElementById("colorBox").appendChild(comparDiv);		
}

function scoreGame()
{
	displayComparison();
	compareColors();	
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve,ms));
}

function test()
{
	//	setRandomColor();
		displayComparison();
}