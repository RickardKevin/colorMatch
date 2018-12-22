var slider = document.getElementById("redSlider");
var output = document.getElementById("demo");
var boxColor =  $("#colorBox").css("background-color", getRandomColor());
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

function sliderChange(val) {
document.getElementById('outputTest').innerHTML=val;
  labelTemp.text=color;
}

document.getElementById('slider').value="50";