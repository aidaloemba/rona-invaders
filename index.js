let $body = document.querySelector("body");
let $gameBoard = document.querySelector("#game-board");
let $player = document.querySelector("#player");
let $virus = document.querySelector(".virus");
let $syringe = document.querySelector(".syringe");
let vaccines = [];
let army = [];
let score = 0;

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
        $syringe.style.left = `${player.style.left}`;
        $syringe.style.bottom = "-50px";
        $gameBoard.appendChild($syringe);
        vaccines.push($syringe)

    }
}

// Virus/army and syringe/vaccines animation
setInterval(()=> {
    let $virus = document.createElement("img");
    $virus.src = "img/microbe_1f9a0.png";
    $virus.setAttribute("class", "virus");
    $gameBoard.appendChild($virus); 
    $virus.style.left = `${Math.floor(Math.random() * 100)}%`;
    $virus.style.top = "100px"

    army.push($virus);

    // removeSyringe();

},1500)

setInterval(()=> {
    army.forEach(($virus)=> {
        $virus.style.top = `${$virus.offsetTop + 10}px`;
    })
    removeVirus()
},500)

setInterval(()=> {
    vaccines.forEach(($syringe)=> {
        $syringe.style.bottom = `${window.innerHeight - $syringe.offsetTop + 5}px`;
        syringesVirusesCollision(vaccines, army)
    })

},100)

// Collision detection
function syringesVirusesCollision(vaccines, army){
    for(let i = 0; i < vaccines.length; i++){
        for(let j = 0; j < army.length; j++){
            if(isCollide(vaccines[i], army[j])) {
                // Virus disappears on collision
                $gameBoard.removeChild(army[j])
                army.splice(j, 1);
                
               // Update score
                score += 1
                document.querySelector("#score span").innerHTML = score;
            }
        }
    }
}

// // Remove virus and syringe when out of window
function removeVirus() {
    army.forEach((virus, index) => {
        if(virus.offsetTop >= window.innerHeight) {
            army.splice(index, 1)
        }
    })
}

function removeSyringe() {
    vaccines.forEach((syringe, index) => {
        if(syringe.offsetTop <= window.innerHeight) {
            vaccines.splice(index, 1)
        }
    })
}

// Collision detection global helper
function isCollide($dom1, $dom2) {
    let sq1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }
    let sq2 = {
        x: $dom2.offsetLeft,
        y: $dom2.offsetTop,
        width: $dom2.offsetWidth,
        height: $dom2.offsetHeight
    }
    if (!(sq2.y + sq2.height <= sq1.y ||
            sq2.y >= sq1.y + sq1.height ||
            sq2.x + sq2.width <= sq1.x ||
            sq2.x >= sq1.x + sq1.width
        )) {
        console.log("collision (global helper)");
        return true;
    } else {
        console.log("no collision (gobal helper)");
        return false;
    }
}