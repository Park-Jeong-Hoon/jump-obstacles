const game = document.getElementById("game");
const player = document.getElementById("player");

function jumping() {
    if(!player.classList.contains("jumping-animation")) {
        player.classList.add("jumping-animation");
    }
    setTimeout(function() {
        player.classList.remove("jumping-animation");
    }, 1000);
}

game.addEventListener("click", jumping);