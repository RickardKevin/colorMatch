var _0x1595=['createElement','div','appendChild','getElementById','redSlider','demo','floor','random','concat','css','background-color','#colorBox','border-style','innerHTML','greenSlider','blueSlider','rgb(','compareBox','colorBox','removeChild','Slide\x20the\x20Sliders','startButton','disabled','compare','visibility','visible','style','value','127','resetButton','hidden','abs','pow','Your\x20Score\x20:\x20\x20','alert'];(function(_0x5d5be3,_0x4c66cf){var _0x22d356=function(_0x41c815){while(--_0x41c815){_0x5d5be3['push'](_0x5d5be3['shift']());}};_0x22d356(++_0x4c66cf);}(_0x1595,0x11b));var _0x50ee=function(_0x21f525,_0x31d604){_0x21f525=_0x21f525-0x0;var _0x39cc1e=_0x1595[_0x21f525];return _0x39cc1e;};var slider=document[_0x50ee('0x0')](_0x50ee('0x1'));var output=document[_0x50ee('0x0')](_0x50ee('0x2'));var boxColor='';var outputColor='';var originalColor='';var red=0xff;var green=0xff;var blue=0xff;var originalRed=0x0;var originalGreen=0x0;var originalBlue=0x0;var finalRed=0x0;var finalGreen=0x0;var finalBlue=0x0;var redDist=0x0;var greenDist=0x0;var blueDist=0x0;var finalDist=0x0;var countdownTimer;function getRandomColor(){var _0x1bae4b='';var _0x237c90='';red=Math[_0x50ee('0x3')](Math[_0x50ee('0x4')]()*Math[_0x50ee('0x3')](0xff));green=Math[_0x50ee('0x3')](Math['random']()*Math[_0x50ee('0x3')](0xff));blue=Math[_0x50ee('0x3')](Math[_0x50ee('0x4')]()*Math[_0x50ee('0x3')](0xff));originalRed=red;originalBlue=blue;originalGreen=green;finalRed=red;finalBlue=blue;finalGreen=green;_0x1bae4b=_0x237c90[_0x50ee('0x5')]('rgb(',red,',',green,',',blue,')');red=green=blue=0xff;return _0x1bae4b;}function setRandomColor(){var _0x39f28e=getRandomColor();originalColor=_0x39f28e;$('#colorBox')[_0x50ee('0x6')](_0x50ee('0x7'),_0x39f28e);$(_0x50ee('0x8'))['css'](_0x50ee('0x9'),'none');}function redSliderChange(_0x550aba){document[_0x50ee('0x0')]('redSlider')[_0x50ee('0xa')]=_0x550aba;red=_0x550aba;setBoxColor();}function greenSliderChange(_0x51a907){document['getElementById'](_0x50ee('0xb'))[_0x50ee('0xa')]=_0x51a907;green=_0x51a907;setBoxColor();}function blueSliderChange(_0x2a950f){document[_0x50ee('0x0')](_0x50ee('0xc'))[_0x50ee('0xa')]=_0x2a950f;blue=_0x2a950f;setBoxColor();}function setBoxColor(){temp='';outputColor=temp[_0x50ee('0x5')]('rgb(',red,',',green,',',blue,')');$(_0x50ee('0x8'))[_0x50ee('0x6')](_0x50ee('0x7'),outputColor);}function resetBoxColor(){temp='';outputColor=temp[_0x50ee('0x5')](_0x50ee('0xd'),0xff,',',0xff,',',0xff,')');$('#colorBox')[_0x50ee('0x6')](_0x50ee('0x7'),outputColor);var _0x5c6bb5=document[_0x50ee('0x0')](_0x50ee('0xe'));if(_0x5c6bb5){document['getElementById'](_0x50ee('0xf'))[_0x50ee('0x10')](_0x5c6bb5);}}function startGame(){setRandomColor();countUp();}function countUp(){document[_0x50ee('0x0')](_0x50ee('0xf'))[_0x50ee('0xa')]='Start!';var _0x125971=0xb;countdownTimer=setInterval(function(){document[_0x50ee('0x0')]('colorBox')[_0x50ee('0xa')]=0x0- --_0x125971*-0x1;disableButtons();if(_0x125971<=0x0){resetBoxColor();document['getElementById'](_0x50ee('0xf'))[_0x50ee('0xa')]='';clearInterval(countdownTimer);enableButtons();countDown();}},0x3e8);}function countDown(){var _0x51c589=0x1e;disableStart();countdownTimer=setInterval(function(){document[_0x50ee('0x0')](_0x50ee('0xf'))[_0x50ee('0xa')]=(0x0- --_0x51c589)*-0x1;if(_0x51c589<0x0){stopTimer();document[_0x50ee('0x0')](_0x50ee('0xf'))['innerHTML']='';enableStart();clearInterval(countdownTimer);}},0x3e8);}function slide(){var _0x515714=0x2;countdownTimer=setInterval(function(){document[_0x50ee('0x0')](_0x50ee('0xf'))[_0x50ee('0xa')]=(0x0- --_0x515714)*-0x1;if(_0x515714<=0x0){document[_0x50ee('0x0')](_0x50ee('0xf'))[_0x50ee('0xa')]=_0x50ee('0x11');clearInterval(countdownTimer);}},0x3e8);}function showOriginalColor(){$(_0x50ee('0x8'))[_0x50ee('0x6')](_0x50ee('0x7'),originalColor);}function enableButtons(){document[_0x50ee('0x0')](_0x50ee('0x12'))[_0x50ee('0x13')]=![];document[_0x50ee('0x0')](_0x50ee('0x14'))['disabled']=![];document[_0x50ee('0x0')]('resetButton')[_0x50ee('0x13')]=![];document[_0x50ee('0x0')]('redSlider')[_0x50ee('0x13')]=![];document['getElementById']('greenSlider')[_0x50ee('0x13')]=![];document['getElementById'](_0x50ee('0xc'))['disabled']=![];document[_0x50ee('0x0')](_0x50ee('0x1'))['style'][_0x50ee('0x15')]=_0x50ee('0x16');document[_0x50ee('0x0')](_0x50ee('0xb'))[_0x50ee('0x17')][_0x50ee('0x15')]=_0x50ee('0x16');document[_0x50ee('0x0')](_0x50ee('0xc'))['style'][_0x50ee('0x15')]=_0x50ee('0x16');document[_0x50ee('0x0')](_0x50ee('0x1'))[_0x50ee('0x18')]=_0x50ee('0x19');document[_0x50ee('0x0')](_0x50ee('0xb'))[_0x50ee('0x18')]=_0x50ee('0x19');document[_0x50ee('0x0')](_0x50ee('0xc'))[_0x50ee('0x18')]=_0x50ee('0x19');}function disableButtons(){document['getElementById'](_0x50ee('0x12'))[_0x50ee('0x13')]=!![];document[_0x50ee('0x0')](_0x50ee('0x14'))[_0x50ee('0x13')]=!![];document[_0x50ee('0x0')](_0x50ee('0x1a'))[_0x50ee('0x13')]=!![];document['getElementById'](_0x50ee('0x1'))[_0x50ee('0x13')]=!![];document[_0x50ee('0x0')](_0x50ee('0xb'))[_0x50ee('0x13')]=!![];document[_0x50ee('0x0')](_0x50ee('0xc'))[_0x50ee('0x13')]=!![];document[_0x50ee('0x0')](_0x50ee('0x1'))[_0x50ee('0x17')]['visibility']=_0x50ee('0x1b');document['getElementById'](_0x50ee('0xb'))[_0x50ee('0x17')][_0x50ee('0x15')]=_0x50ee('0x1b');document[_0x50ee('0x0')](_0x50ee('0xc'))['style'][_0x50ee('0x15')]=_0x50ee('0x1b');}function disableStart(){document[_0x50ee('0x0')]('startButton')[_0x50ee('0x13')]=!![];}function enableStart(){document[_0x50ee('0x0')](_0x50ee('0x12'))[_0x50ee('0x13')]=![];}function compareColors(){redDist=Math[_0x50ee('0x1c')](originalRed-finalRed);greenDist=Math[_0x50ee('0x1c')](originalGreen-finalGreen);blueDist=Math[_0x50ee('0x1c')](originalBlue-finalBlue);finalDist=Math['sqrt'](Math['pow'](redDist,0x2)+Math[_0x50ee('0x1d')](greenDist,0x2)+Math['pow'](blueDist,0x2));var _0xe2ca3b=(((redDist+blueDist+greenDist)/0x3-0xff)/0xff*-0x64)['toFixed'](0x2);var _0x3f68d2='';var _0x3a3a55=_0x3f68d2['concat'](_0x50ee('0x1e'),_0xe2ca3b,'%');window[_0x50ee('0x1f')](_0x3a3a55);}function displayComparison(){var _0x43bb9b=document[_0x50ee('0x20')](_0x50ee('0x21'));_0x43bb9b['id']=_0x50ee('0xe');$('#compareBox')[_0x50ee('0x6')](_0x50ee('0x7'),originalColor);document['getElementById'](_0x50ee('0xf'))[_0x50ee('0x22')](_0x43bb9b);}function scoreGame(){displayComparison();compareColors();}function sleep(_0x59604b){return new Promise(_0x18c3ff=>setTimeout(_0x18c3ff,_0x59604b));}function test(){displayComparison();}function stopTimer(){finalRed=red;finalGreen=green;finalBlue=blue;clearTimeout(countdownTimer);document[_0x50ee('0x0')](_0x50ee('0xf'))[_0x50ee('0xa')]='';enableButtons();displayComparison();scoreGame();}