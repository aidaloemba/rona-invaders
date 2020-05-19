let army = [];

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