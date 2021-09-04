const game = document.getElementById("game");
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const score = document.querySelector("#score h1");
let sc = 0; //플레이어 점수

function jumping() {
    //player의 classList에 jumping-animation이 없으면 추가해서 player가 점프를 하도록 한다.
    if(!player.classList.contains("jumping-animation")) {
        player.classList.add("jumping-animation");
    }

    //setTimeout을 이용해서 player의 점프가 완료된 뒤 classList에서 jumping-animation 클래스를 제거
    setTimeout(function() {
        player.classList.remove("jumping-animation");
    }, 1000);
};

function collision() { //충돌할 경우
    //player과 obstacle의 css 속성 중에 top과 left를 각각 가져와서
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(playerTop >= 400 && obstacleLeft > -50 && obstacleLeft < 50) { //충돌이 일어날 수 있는 위치값으로 조건문을 만든다.
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        //score.style.display = "none";
        clearInterval(interval); //setInterval을 멈춤
        alert(`your score: ${sc}, press F5 to restart game`);
    }
}

function plus() { //점수 증가
    score.innerText = sc;
    sc += 1;
}

game.addEventListener("click", jumping);

setInterval(collision, 10);

const interval = setInterval(plus, 100);