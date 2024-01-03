
const jump = () => {
	devil.classList.add("jump");
	setTimeout(() => {
		devil.classList.remove("jump");
	},1000);
	}
document.getElementById("animateButton").addEventListener("click", jump)



function irParamenu() {
	window.location.href = "../menu.html";
}
