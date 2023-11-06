var timer = 60
var score = 0
var hitRdm = 0


function increaseScore() {
    score += 10
    document.querySelector("#scoreVal").textContent = score
}

function getNewHit() {
    hitRdm = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = hitRdm
}

function makeBubble() {
    var a = document.querySelector("#pbtm")
    var clutter = ``

    for (var i = 1; i <= 176; i++) {
        var rdm = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rdm}</div>`
    }

    a.innerHTML = clutter
}

function runTimer() {
    var timerVal = document.querySelector("#timerVal")
    var timerInter = setInterval(() => {
        if (timer > 0) {
            timer--
            timerVal.textContent = timer
            // console.log(1)
        }
        else {
            clearInterval(timerInter)
            document.querySelector("#pbtm").innerHTML = `<h1 class = "gameOver">GAME OVER</h1>`
        }
    }, 1000);
}

function Game(){
    var a = document.querySelector("#pbtm")
    a.addEventListener("click",(dets)=>{
    var clickedNum = Number(dets.target.textContent)
    if (clickedNum == hitRdm){
        increaseScore()
    }   makeBubble()
        getNewHit()
    })
}

makeBubble()
runTimer()
getNewHit()
Game()