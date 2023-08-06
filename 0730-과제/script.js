const movingCircle = document.getElementById('movingCircle'); //html파일의 movingCircle요소를 선택하는 문법
let positionX = 0;
let positionY = 0;
let directionX = 1;
let directionY = 1;
const speed = 9;

function animateCircle() {
  positionX += directionX * speed;
  positionY += directionY * speed;


  const viewportWidth =   window.innerWidth; //브라우저 창 크기를 지정하기 위한 변수
  const viewportHeight =  window.innerHeight;

  if (positionX <= 0 || positionX >= viewportWidth - movingCircle.clientWidth) {
    directionX =-directionX;
  }

  if (positionY <= 0 || positionY >= viewportHeight - movingCircle.clientHeight) {
    directionY =-directionY;
  }

  movingCircle.style.left = positionX + 'px'; //style요소 조작을 위한 문법
  movingCircle.style.top = positionY + 'px';

  requestAnimationFrame(animateCircle);
}

animateCircle();