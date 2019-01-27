var slider = document.getElementById("redSlider");
var output = document.getElementById("demo");
var boxColor = "";
var outputColor = "";
var originalColor = "";
var red=255;
var green=255;
var blue=255;
var originalRed=0;
var originalGreen=0;
var originalBlue=0;
var finalRed=0;
var finalGreen=0;
var finalBlue=0;
var redDist=0;
var greenDist=0;
var blueDist=0;
var finalDist=0;
var  countdownTimer;


function getRandomColor() {
  
  
  var color="";
  var tmp="";
  red = Math.floor(Math.random() * Math.floor(255));
  green = Math.floor(Math.random() * Math.floor(255));
  blue = Math.floor(Math.random() * Math.floor(255));
  originalRed=red;
  originalBlue=blue;
  originalGreen=green;
  
  color =tmp.concat("rgb(",red,",",green,",",blue,")");
  
  red=green=blue = 255;
  
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
	$("#colorBox").css("background-color", outputColor);
}

function resetBoxColor() {	
	temp=""
	outputColor=temp.concat("rgb(",255,",",255,",",255,")");	
	$("#colorBox").css("background-color", outputColor);
	var elementExists = document.getElementById("compareBox");
	if (elementExists)
	{
		
			document.getElementById("colorBox").removeChild(elementExists);
	}
}

function startGame()
{
	setRandomColor();		
	countUp();
}

function countUp()
{
			document.getElementById("colorBox").innerHTML = "Start!";	
			var timeleft = 11;
			countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = 0 - --timeleft*-1;
			  disableButtons();
				
			  if(timeleft <= 0)
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
			countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = (0 - --timeleft)*-1;			  
			  if(timeleft <= 1)
			  {								
				stopTimer();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);								
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
		//document.getElementById("showColorButton").disabled = false;
		document.getElementById("resetButton").disabled = false;	
		document.getElementById("redSlider").disabled = false;	
		document.getElementById("greenSlider").disabled = false;	
		document.getElementById("blueSlider").disabled = false;	
		document.getElementById("redSlider").style.visibility= "visible";	
		document.getElementById("greenSlider").style.visibility= "visible";	
		document.getElementById("blueSlider").style.visibility= "visible";	
}

function disableButtons()
{
		document.getElementById("startButton").disabled = true;
		//document.getElementById("showColorButton").disabled = true;
		document.getElementById("resetButton").disabled = true;	
		document.getElementById("redSlider").disabled = true;	
		document.getElementById("greenSlider").disabled = true;	
		document.getElementById("blueSlider").disabled = true;	
		document.getElementById("redSlider").style.visibility= "hidden";	
		document.getElementById("greenSlider").style.visibility= "hidden";	
		document.getElementById("blueSlider").style.visibility= "hidden";	
		
}

function compareColors()
{
	
		redDist =Math.abs(originalRed - finalRed);
		greenDist =Math.abs(originalGreen - finalGreen);
		blueDist = Math.abs(originalBlue-finalBlue);
		finalDist = Math.sqrt(Math.pow(redDist,2) + Math.pow(greenDist,2) + Math.pow(blueDist,2));
		//(old - new )/ old percentage dist
		var finalScore = ((((redDist+blueDist+greenDist)/3)-255)/255)*-100.00;
		//distance from 0
		var tmp ="";
		var message = tmp.concat("Your Score:", finalScore);
		
		window.alert(
		message
		);
}

function displayComparison()
{	
	var comparDiv = document.createElement("div");	
	comparDiv.id = "compareBox";	
	$("#compareBox").css("background-color", originalColor);
	//document.getElementById("compareBox").innerHTML = "Original Color";
	//document.getElementById("colorBox").innerHTML = "Your Color";
	//$("#compareBox").css("height", originalColor);
	//document.getElementById("compareBox").style.height = "inherit";
	document.getElementById("colorBox").appendChild(comparDiv);		
}

function scoreGame()
{
	console.log("base = RGB(",red,",",green,",",blue,")");
	console.log("Original = ", originalColor);
	console.log("final = RGB(",finalRed,",",finalGreen,",",finalBlue,")");
	
	displayComparison();
	compareColors();	
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve,ms));
}

function test()
{		
		displayComparison();
}

function stopTimer()
{
	finalRed = red;
	finalGreen = green;
	finalBlue = blue;	
	clearTimeout(countdownTimer);	
	document.getElementById("colorBox").innerHTML = "";
	enableButtons();
	displayComparison();
	scoreGame();
	
}