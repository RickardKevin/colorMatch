/*
Hey you, yeah, you, stop cheating
*/

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
var redCompare = greenCompare = blueCompare = 0;
var  countdownTimer;

function flagManagement(){

	var user = {
		name: 'Bob Loblaw',
        key: 'example-user-key',
	};
	// Create a new LDClient instance with your environment-specific SDK key
	var ldclient = LDClient.initialize('6334f46ca0e6a6116c4053b0', user);

	function render() {
	  var flagValue = ldclient.variation('myFirstFlag', false);
	  if(flagValue) showBanner();
	  console.log(flagValue);
	}

	ldclient.on('ready', render);
	//ldclient.on('change', render);
}

function getRandomColor() {
  
  
  var color="";
  var tmp="";
  red = Math.floor(Math.random() * Math.floor(255));
  green = Math.floor(Math.random() * Math.floor(255));
  blue = Math.floor(Math.random() * Math.floor(255));
  originalRed=red;
  originalBlue=blue;
  originalGreen=green;
  finalRed = red;
  finalBlue = blue;
  finalGreen=green;
  
  color =tmp.concat("rgb(",red,",",green,",",blue,")");
  
  red=green=blue = 255;
  
    return color;  
}

function showBanner(){
	var div = document.createElement('div');
	div.style.cssText = 'width:100%;height:5%;position:fixed; z-index:9999;background:#000;bottom:0px;color:#fff;text-align:center;opacity:35%';
	div.innerText = "One of these days, this site will use cookies.";
	document.body.insertBefore(div,document.body.firstChild);
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
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
	temp="";
	outputColor=temp.concat("rgb(",red,",",green,",",blue,")");
	$("#colorBox").css("background-color", outputColor);
}

function resetBoxColor() {
	temp="";
	outputColor=temp.concat("rgb(",255,",",255,",",255,")");
	$("#colorBox").css("background-color", outputColor);
	var elementExists = document.getElementById("compareBox");
	if (elementExists)
	{
		document.getElementById("colorBox").innerHTML='';
	}
}

function startGame()
{
	resetBoxColor();
	setRandomColor();
	countUp();
}

function countUp()
{
			document.getElementById("colorBox").innerHTML = "Start!";	
			var timeleft = 6;
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



function countUpFast()
{
			document.getElementById("colorBox").innerHTML = "Start!";	
			var timeleft = 2;
			countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = 0 - --timeleft*-1;
			  disableButtons();
				
			  if(timeleft <= 0)
			  {
				 resetBoxColor();
				document.getElementById("colorBox").innerHTML = "";
				clearInterval(countdownTimer);
				enableButtons();
				countDownFast();
			  }
			},1000);
}

function countDown()
{
		
		var timeleft = 30;
		disableStart();
			countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = (0 - --timeleft)*-1;			  
			  if(timeleft < 0)
			  {												
				document.getElementById("colorBox").innerHTML = "";				
				enableStart();				
				clearInterval(countdownTimer);																
				stopTimer();
			  }
			},1000);				
}

function countDownFast()
{
		
		var timeleft = 5;
		disableStart();
			countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = (0 - --timeleft)*-1;			  
			  if(timeleft < 0)
			  {												
				document.getElementById("colorBox").innerHTML = "";				
				enableStart();				
				clearInterval(countdownTimer);																
				stopTimer();
			  }
			},1000);				
}


function slide()
{
	var timeleft = 2;
	countdownTimer = setInterval(function(){
			  document.getElementById("colorBox").innerHTML = (0 - --timeleft)*-1;			  
			  if(timeleft <= 1)
			  {												
				document.getElementById("colorBox").innerHTML = "Slide the Sliders";				
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
		document.getElementById("compare").disabled = false;
		document.getElementById("resetButton").disabled = false;	
		document.getElementById("redSlider").disabled = false;	
		document.getElementById("greenSlider").disabled = false;	
		document.getElementById("blueSlider").disabled = false;	
		document.getElementById("redSlider").style.visibility= "visible";	
		document.getElementById("greenSlider").style.visibility= "visible";	
		document.getElementById("blueSlider").style.visibility= "visible";	
		document.getElementById("redSlider").value='255';
		document.getElementById("greenSlider").value='255';
		document.getElementById("blueSlider").value='255';
}

function disableButtons()
{
		document.getElementById("startButton").disabled = true;
		document.getElementById("compare").disabled = true;
		document.getElementById("resetButton").disabled = true;	
		document.getElementById("redSlider").disabled = true;	
		document.getElementById("greenSlider").disabled = true;	
		document.getElementById("blueSlider").disabled = true;	
		document.getElementById("redSlider").style.visibility= "hidden";	
		document.getElementById("greenSlider").style.visibility= "hidden";	
		document.getElementById("blueSlider").style.visibility= "hidden";	
		
}

function disableStart()
{
	document.getElementById("startButton").disabled = true;
}

function enableStart()
{
	document.getElementById("startButton").disabled = false;	
}

function compareColors()
{
	
		redDist =Math.abs(originalRed - finalRed);
		greenDist =Math.abs(originalGreen - finalGreen);
		blueDist = Math.abs(originalBlue-finalBlue);
		redCompare = originalRed - finalRed
		blueCompare = originalBlue - finalBlue;
		greenCompare = originalGreen - finalGreen;
		finalDist = Math.sqrt(Math.pow(redDist,2) + Math.pow(greenDist,2) + Math.pow(blueDist,2));
		//(old - new )/ old percentage dist
		var finalScore = (((((redDist+blueDist+greenDist)/3)-255)/255)*-100).toFixed(2);
		//distance from 0
		var tmp ="";
		var message = tmp.concat("Your Score :  ", finalScore,"%");
		
		window.alert(
		message
		);
		
}

function calculateTrend(redCompare, blueCompare, greenCompare){
	//greater than 0 == not enough, less than 0 == too much
	var msg ="";
		if(redCompare < 0) msg +="Too Much Red by: "+ Math.abs(redCompare) + "\n"; 
		if(redCompare > 0) msg +="Too Little Red by: "+ Math.abs(redCompare)+ "\n";
		if(redCompare == 0) msg +="You got Red exactly right!"+ "\n";
		if(greenCompare < 0) msg +="Too Much Green by: "+ Math.abs(greenCompare)+ "\n";
		if(greenCompare < 0) msg +="Too Much Green by: "+ Math.abs(greenCompare)+ "\n";
		if(greenCompare == 0) msg +="Too Much Green by: "+ Math.abs(greenCompare)+ "\n";
		if(blueCompare < 0) msg +="Too Much Blue by: "+ Math.abs(blueCompare)+ "\n";
		if(blueCompare < 0) msg +="Too Much Blue by: "+ Math.abs(blueCompare)+ "\n";
		if(blueCompare == 0) msg +="Too Much Blue by: "+ Math.abs(blueCompare)+ "\n";
	return msg;	
}

function speedRound()
{
		setRandomColor();
		countUpFast();
		countDownFast();
}

function displayComparison()
{	
	temp="";
	temp2 = "";	
	newColor=temp.concat("rgb(",finalRed,",",finalGreen,",",finalBlue,")");
	oldColor =temp2.concat("rgb(",originalRed,",",originalGreen,",",originalBlue,")");
	console.log(outputColor);
	var originalDiv = document.getElementById('colorBox');
	var comparDiv = document.createElement("div");
	var origInfo = document.createElement("div");
	comparDiv.id = "compareBox";
	origInfo.id = "origInfo";
	document.getElementById("colorBox").appendChild(comparDiv);
	document.getElementById("colorBox").appendChild(origInfo);
	$("#compareBox").css("background-color", outputColor);	
	$('#colorBox').css("background-color", oldColor);
	var msg = calculateTrend(redCompare, blueCompare, greenCompare);
	comparDiv.innerHTML = `Your Guess <br>` +  `Red: ` + finalRed +`<br>` + `Green: ` + finalGreen +`<br>` +`Blue: ` + finalBlue;	
	origInfo.innerHTML = `Actual Color <br>` +  `Red: ` + originalRed +`<br>` + `Green: ` + originalGreen +`<br>` +`Blue: ` + originalBlue;	
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