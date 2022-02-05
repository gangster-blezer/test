var numprevb;
var trackb = document.getElementsByClassName('best-slider-track')[0];
var btn_active = "activebest-sl-btn";

function slidesetb(n,bt) {
  if(numprevb==undefined){
      numprevb = 1;
    }

    //console.log(numprev);

  if(n==5){
    n = 1;
    console.log("есть");
  }

  if(n==0){
    n=4;
  }

  

	let startpb = Date.now(); // запомнить время начала
  	let timeb = 800;
  	let slidewpb = document.querySelector('.best-slide').offsetWidth;
  	document.getElementById(numprevb+"b").classList.remove(btn_active);
    if(bt==null){
      document.getElementById(n+"b").classList.add(btn_active);
    }else{
      bt.classList.add(btn_active);
    }

    //let numprev = Math.abs(getTrX(document.querySelector('.poplular-slider-track'))/slidew)+1;

    function goslideb(num){
      return slidewpb*(num-1);
    }


	let timerpb = setInterval(function() {
	  // сколько времени прошло с начала анимации?
	  let timePassedb = Date.now() - startpb;

	  if (timePassedb >= timeb) {
      //bt.disabled = true;
      numprevb = Number(n);
	  	trackb.setAttribute("style", "transform: translateX("+ -((slidewpb*(n-2)) + (slidewpb))+"px);");
 	   	clearInterval(timerpb); // закончить анимацию через 2 секунды
	    return;
	  }

    if(n<numprevb){
      tranb = -(goslideb(n+1)) + ((slidewpb*timePassedb)/timeb);
    }else{
      tranb = -(goslideb(n-1)) - ((slidewpb*timePassedb)/timeb);
    }
    
    
	trackb.setAttribute("style", "transform: translateX("+tranb+"px);");
	  

	}, 10);
}

//getTrX(document.querySelector('.poplular-slider-track'));

function getTrX(obj){
  let tr = window.getComputedStyle(obj).transform.split(",")[4];
    if(tr==undefined){
      return 0;
    }else {
      return tr;
    }
     
}


a = 0;

getEventb = function() {
  return event.type.search('touch') !== -1 ? event.touches[0] : event;
  // p.s. event - аргумент по умолчанию в функции
},
// или es6
getEventb = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

swipeStartpb = function() {

  let evt = getEventb();
  isSwipe = true;

  // берем начальную позицию курсора по оси Х
  posInit = posX1 = evt.clientX;
  posYInit = posY1 = evt.clientY;
  //console.log(posInit)
  trackb.addEventListener('mousemove', swipeActionpb);
  trackb.addEventListener('mouseup', swipeEndpb);


  trackb.addEventListener('pointermove', swipeActionpb);
  trackb.addEventListener('pointercancel', swipeEndpb);

},
swipeActionpb = function() {
  let evt = getEventb();
  console.log("start")

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

swipeEndpb = function() {
    posFinal = posInit - posX1;
    posYFinal = Math.abs(posYInit - posY1);
    //console.log(posYFinal);
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('mousemove', swipeActionpb);
    document.removeEventListener('mouseup', swipeEndpb);
    
    document.removeEventListener('pointermove', swipeActionpb);
    document.removeEventListener('pointercancel', swipeEndpb);

    if(numprevb==undefined){
      numprevb = 1;
    }
    
    if(posFinal>0 && posYFinal < 10){
      //console.log(document.getElementById( Number(numprev)+1 ));
      
  		slidesetb(numprevb+1,document.getElementById( (Number(numprevb)+1)+"b" ));
  	}
  	if(posFinal<0 && posYFinal < 10){
  		slidesetb(numprevb-1,document.getElementById( (Number(numprevb)-1)+"b" ));
  	}
}

trackb.addEventListener('mousedown', swipeStartpb);
trackb.addEventListener('mouseup', swipeEndpb);

trackb.addEventListener('pointerdown', swipeStartpb);
trackb.addEventListener('pointercancel', swipeEndpb);