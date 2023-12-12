let spaceship = {
  x: 100,
  y: 100
};

function move(direction) {
  const step = 20;

  switch (direction) {
    case 'up':
      spaceship.y -= step;
      break;
    case 'down':
      spaceship.y += step;
      break;
    case 'left':
      spaceship.x -= step;
      break;
    case 'right':
      spaceship.x += step;
      break;
  }

  updateSpaceshipPosition();
}

function updateSpaceshipPosition() {
  const spaceshipElement = document.getElementById('spaceship');
  document.getElementById('spaceship').style.left = spaceship.x + 'px';
  document.getElementById('spaceship').style.top = spaceship.y + 'px';
}




document.getElementById("animateButton").addEventListener("click", function() {
  var animatedElement = document.getElementById(".devil");
  animatedElement.style.animation = "none";
  void animatedElement.offsetWidth;
  animatedElement.style.animation = "jump 2s ease-in-out";
  
});


