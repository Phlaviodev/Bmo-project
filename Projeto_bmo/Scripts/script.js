function irParamenu() {

	window.location.href = "menu.html";

}

function irParainicio() {

    window.open("Bmo.html");
}

 // Obtém a referência da imagem usando o ID
 var minhaImagem = document.getElementById("minhaImagem");

 // Obtém a referência da div clicável
 var botaoClicavel = document.getElementById("Clicavel");

 // Adiciona um ouvinte de evento de clique à div clicável
 botaoClicavel.addEventListener("click", function () {
     // Muda o atributo src da imagem ao ser clicada
     minhaImagem.src = "Img/simplesmileblink.gif";
     minhaImagem.src = "Img/happyblink.gif";
     minhaImagem.src = "Img/simplesmileblink.gif";


 });