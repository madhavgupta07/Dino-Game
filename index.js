const dino = document.querySelector('.dino');
const gameOver = document.querySelector(".gameOver");
const obstacle = document.querySelector(".obstacle");
const scoreCount = document.querySelector(".scoreCount");
let score = 0;
let cross = true;
document.onkeydown = function (e) {
  // console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 32) {
      
      dino.classList.add('animateDino');
      setTimeout(() => {
          dino.classList.remove('animateDino')
      }, 700);
  }
}

 function buttonClick (e) {

      dino.classList.add('animateDino');
      setTimeout(() => {
          dino.classList.remove('animateDino')
      }, 700);
  }
  setInterval(() => {
    let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dinoy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    let obstaclex = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let obstacley = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    let offsetX = Math.abs(dinox - obstaclex);
    let offsetY = Math.abs(dinoy - obstacley);
    // console.log(offsetX); 
    if(offsetX<93 && offsetY<52){
      gameOver.style.visibility= 'visible';
      obstacle.classList.remove('animateObstacle')
    }
    else if(offsetX< 150 && cross){
      score += 1;
      // console.log(score);
      scoreCount.innerHTML = `Your Score: ${score}`
      cross = false;
      setTimeout(() => {
        cross= true;
      }, 900);
    }

  }, 100);

