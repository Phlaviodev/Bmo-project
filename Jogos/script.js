// JavaScript
document.getElementById("animateButton").addEventListener("click", function() {
  var animatedElement = document.querySelector(".devil");
  animatedElement.style.animation = "none";
  void animatedElement.offsetWidth; // Trigger a reflow
  animatedElement.style.animation = "jump 2s ease-in-out";
  const obstaculo = document.getElementById("obstaculo");
});
