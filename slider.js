let slides = ['img/slider/bed.png','img/slider/room.png','img/slider/roomtoo.png']
let slidenum = 999;
let slidew = document.querySelector('.slide').offsetWidth;
let slideside = (document.querySelector('.slider').offsetWidth-slidew)/2;
let tr = slidew-slideside;


function slide(slide) {
	if(slide=="next"){
		slidenum++;
	}
	if(slide=="back"){
		slidenum--;
	}

	let start = Date.now(); // запомнить время начала
  let time = 500;

	let timer = setInterval(function() {
	  // сколько времени прошло с начала анимации?

    console.log(tr);
	  let timePassed = Date.now() - start;

	  if (timePassed >= time) {
 	   	clearInterval(timer); // закончить анимацию через 2 секунды
	    document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+tr+"px);");
		setslide(slides[(slidenum-1)%slides.length],slides[slidenum%slides.length],slides[(slidenum+1)%slides.length]);
	    return;
	  }

	  if(slide=="next"){
		document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+(tr + ((slidew*timePassed)/time))+"px);");
	}
	if(slide=="back"){
		document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX("+(-tr + ((slidew*timePassed)/time))+"px);");
	}
	  

	}, 10);
}

function setslide(back,view,next){
	document.getElementsByClassName('slide')[0].setAttribute("style", "background-image:url("+back+");");
	document.getElementsByClassName('slide')[1].setAttribute("style", "background-image:url("+view+");");
	document.getElementsByClassName('slide')[2].setAttribute("style", "background-image:url("+next+");");
}

document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+tr+"px);");
setslide(slides[slides.length-1],slides[0],slides[1]);


a=tr;

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
  document.getElementsByClassName('slider')[0].addEventListener('mousemove', swipeAction);
  document.getElementsByClassName('slider')[0].addEventListener('mouseup', swipeEnd);


  document.getElementsByClassName('slider')[0].addEventListener('pointermove', swipeAction);
  document.getElementsByClassName('slider')[0].addEventListener('pointercancel', swipeEnd);

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

document.getElementsByClassName('slider')[0].addEventListener('mousedown', swipeStart);
document.getElementsByClassName('slider')[0].addEventListener('mouseup', swipeEnd);

document.getElementsByClassName('slider')[0].addEventListener('pointerdown', swipeStart);
document.getElementsByClassName('slider')[0].addEventListener('pointercancel', swipeEnd);