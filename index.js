let $body = document.querySelector("body");
let $player = document.querySelector("#player");
let $virus = document.querySelector(".virus");
let vaccines = [];
army = [];

// Controls
document.onkeydown = function(event) {
    if (event.keyCode === 37) {
        // Go left
        $player.style.left = `${$player.offsetLeft - 20}px`;
    }
    if (event.keyCode === 39) {
        // Go right
        $player.style.left = `${$player.offsetLeft + 20}px`;
    }
    if (event.keyCode === 32) {
        // Fire
        let $syringe = document.createElement("img");
        $syringe.src = "img/syringe_1f489.png";
        $syringe.setAttribute("class", "syringe");
        $body.appendChild($syringe);
        $syringe.style.left = `${player.style.left}`;
        $syringe.style.bottom = `-50px`;
        vaccines.push($syringe);

        collisionDetection($virus,$syringe)
    }
}

// Virus army and vaccines animation
setInterval(()=> {
    let $virus = document.createElement("img");
    $virus.src = "img/microbe_1f9a0.png";
    $virus.setAttribute("class", "virus");
    $body.appendChild($virus);
    $virus.style.left = `${Math.random() * 100}%`;

    army.push($virus);

},1000)

setInterval(()=> {
    army.forEach(($virus)=> {
        $virus.style.top = `${$virus.offsetTop + 10}px`;
    })
},500)

setInterval(()=> {
    vaccines.forEach(($syringe)=> {
        $syringe.style.bottom = `${window.innerHeight - $syringe.offsetTop + 5}px`;
    })
},100)

// Collision detection
function collisionDetection($dom1,$dom2){
    let item1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }
    
    let item2 = {
        x:$dom2.offsetLeft,
        y:$dom2.offsetTop,
        width:$dom2.offsetWidth,
        height:$dom2.offsetHeight
    }
    
    if(!(item2.y + item2.height < item1.y || 
          item2.y > item1.y + item1.height ||
          item2.x + item2.width < item1.x ||
          item2.x > item1.x + item1.width   
    )) {
        console.log("Collision!");
        this.army.splice(i, 1)
        return true;
    } else {
        console.log("No collision!");
        return false
    }
}

// Score
function updateScore() {
    let score = document.querySelector(".score span").innerHTML
    let newScore = 0
    if(collisionDetection($virus,$syringe)) {
        newScore = score +1
    }
    $score.push(newScore)
}
