
window.addEventListener('load', (event) => {
	var dpl_e = document.getElementsByTagName("li");	
	for (i=0;i<dpl_e.length;i++){
		dpl_e[i].addEventListener('touchstart', player_touchstart, false);
		dpl_e[i].addEventListener('touchmove', player_touchmove, false);
		dpl_e[i].addEventListener('touchcancel', player_touchcancel, false);
		dpl_e[i].addEventListener('touchend', player_touchend, false);
	}
});

function player_touchstart(e) { 
	var theTouch = e.changedTouches[0];
	var mouseEv;
	var mouseEvent = document.createEvent("MouseEvent");
	mouseEvent.initMouseEvent('mousedown', true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);  
	theTouch.target.dispatchEvent(mouseEvent);
	e.preventDefault();
}

function player_touchmove(e) { 
	var theTouch = e.changedTouches[0];
	var mouseEv;
	var mouseEvent = document.createEvent("MouseEvent");
	mouseEvent.initMouseEvent('mousemove', true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);  
	theTouch.target.dispatchEvent(mouseEvent);
	e.preventDefault();
}

function player_touchcancel(e) { 
	var theTouch = e.changedTouches[0];
	var mouseEv;
	var mouseEvent = document.createEvent("MouseEvent");
	mouseEvent.initMouseEvent('mouseup', true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);  
	theTouch.target.dispatchEvent(mouseEvent);
	e.preventDefault();
}

function player_touchend(e) { 
  var theTouch = e.changedTouches[0];
  var mouseEv;
  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent('mouseup', true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);  
  theTouch.target.dispatchEvent(mouseEvent);
  e.preventDefault();
}
