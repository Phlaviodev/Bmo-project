// JavaScript
document.getElementById("animateButton").addEventListener("click", function() {
  var animatedElement = document.querySelector(".devil");
  const obstaculo = document.getElementById("obstaculo");
  animatedElement.style.animation = "none";
  void animatedElement.offsetWidth;
  animatedElement.style.animation = "jump 2s ease-in-out";
  
});

