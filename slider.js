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

	let timer = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassed = Date.now() - start;

	  if (timePassed > slidew) {
 	   	clearInterval(timer); // закончить анимацию через 2 секунды
	    document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+tr+"px);");
		setslide(slides[(slidenum-1)%slides.length],slides[slidenum%slides.length],slides[(slidenum+1)%slides.length]);
	    return;
	  }

	  if(slide=="next"){
		document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX(-"+(tr+timePassed)+"px);");
	}
	if(slide=="back"){
		document.getElementsByClassName('sliderview')[0].setAttribute("style", "transform: translateX("+(-tr+timePassed)+"px);");
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
