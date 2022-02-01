function slideset(n,bt) {
	let start = Date.now(); // запомнить время начала
  	let time = 800;
  	let slidew = document.querySelector('.popular').offsetWidth;
  	document.getElementsByClassName("active-sl-btn")[0].classList.remove("active-sl-btn");
  	bt.classList.add("active-sl-btn");

	let timer = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassed = Date.now() - start;

	  if (timePassed >= time) {
	  	document.getElementsByClassName('poplular-slider-track')[0].setAttribute("style", "transform: translateX("+ -((slidew*(n-2)) + (slidew))+"px);");
 	   	clearInterval(timer); // закончить анимацию через 2 секунды
	    return;
	  }

	  console.log(window.getComputedStyle(document.querySelector('.poplular-slider-track')).transform);
	document.getElementsByClassName('poplular-slider-track')[0].setAttribute("style", "transform: translateX("+ -((slidew*(n-2)) + ((slidew*timePassed)/time))+"px);");
	  

	}, 10);
}


a = 0;

getEvent = function() {
  return event.type.search('touch') !== -1 ? event.touches[0] : event;
  // p.s. event - аргумент по умолчанию в функции
},
// или es6
getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeStart = function() {
  let evt = getEvent();
  isSwipe = true;

  // берем начальную позицию курсора по оси Х
  posInit = posX1 = evt.clientX;
  posYInit = posY1 = evt.clientY;
  //console.log(posInit)
  document.getElementsByClassName('poplular-slider-track')[0].addEventListener('mousemove', swipeAction);
  document.getElementsByClassName('poplular-slider-track')[0].addEventListener('mouseup', swipeEnd);


  document.getElementsByClassName('poplular-slider-track')[0].addEventListener('pointermove', swipeAction);
  document.getElementsByClassName('poplular-slider-track')[0].addEventListener('pointercancel', swipeEnd);

},
swipeAction = function() {
  let evt = getEvent();

  posY2 = posY1 - evt.clientY;
  posY1 = evt.clientY;

      let posY = Math.abs(posY2);
      //console.log(posY);
      if (posY > 111) {
        isSwipe = false;
      } else if (posY < 111) {
        isSwipe = true;
      }

  if(isSwipe){
  		posX2 = posX1 - evt.clientX;
  		posX1 = evt.clientX;
  		a = a + posX2;
  		//document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX("+(-a)+"px);");
  }

  
}

swipeEnd = function() {
    posFinal = posInit - posX1;
    posYFinal = Math.abs(posYInit - posY1);
    console.log(posYFinal);
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('mouseup', swipeEnd);
    
    document.removeEventListener('pointermove', swipeAction);
    document.removeEventListener('pointercancel', swipeEnd);

    if(posFinal>0 && posYFinal < 10){
  		slide("next");
  	}
  	if(posFinal<0 && posYFinal < 10){
  		slide("back");
  	}
}

document.getElementsByClassName('poplular-slider-track')[0].addEventListener('mousedown', swipeStart);
document.getElementsByClassName('poplular-slider-track')[0].addEventListener('mouseup', swipeEnd);

document.getElementsByClassName('poplular-slider-track')[0].addEventListener('pointerdown', swipeStart);
document.getElementsByClassName('poplular-slider-track')[0].addEventListener('pointercancel', swipeEnd);