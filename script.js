window.onload = function(){
	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-on");
	document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-off");
	let start = Date.now();
	let tmr = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassed = Date.now() - start;

	  if (timePassed >= 3000) {
 	   	clearInterval(tmr); // закончить анимацию через 2 секунды
	  	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-off");
		document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-on");
	    return;
	  }
	  

	}, 10);
};

/*document.getElementsByClassName('desing-project')[0].addEventListener("mouseover", function( event ) {
	document.getElementsByClassName('desing-project')[0].classList.add("desing-project-on");
	document.getElementsByClassName('desing-project')[0].classList.remove("desing-project-off");
}); */