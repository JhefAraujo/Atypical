const body = document.body;
const content = document.getElementById('content');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;


body.style.height = content.clientHeight + 'px';


content.style.position = 'fixed';
content.style.top = 0;
content.style.left = 0;

// Bind a scroll function
window.addEventListener('scroll', easeScroll);


function easeScroll() {
  
  sx = window.scrollX;
  sy = window.scrollY;
}


window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  
  content.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}




function changeSection (element) {
    document.getElementsByClassName('active')[0].classList.remove('active');
    element.classList.add('active');
}

function spinLogo () {
    logo = document.getElementsByClassName('logo')[0];
    logo.style.animation = 'none';
    setTimeout(() => {
        logo.style.animation = 'spin 2.5s';
    }, 100);
}