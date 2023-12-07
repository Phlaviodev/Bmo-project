document.addEventListener("DOMContentLoaded", function() {
      var movableDiv = document.getElementById("movableDiv");

      movableDiv.addEventListener("touchstart", function(event) {
        // Impede o comportamento padrão do toque, como o zoom da página
        event.preventDefault();
      });

      movableDiv.addEventListener("touchmove", function(event) {
        // Obtém as coordenadas do toque
        var touch = event.touches[0];

        // Define as novas coordenadas de posicionamento da div
        movableDiv.style.left = touch.pageX - movableDiv.offsetWidth / 2 + "px";
        movableDiv.style.top = touch.pageY - movableDiv.offsetHeight / 2 + "px";
      })
    });
    
    
    