class Virus {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = Math.random() * (window.innerWidth - this.width);
        this.y = window.innerHeight + 10;
        this.speed = 5;
    }

    render() {
        let $virus = document.createElement("img");
        $virus.setAttribute("class", "virus");
        $virus.setAttribute("src", "img/microbe_1f9a0.png");
        $virus.width = this.width;
        $virus.height = this.height;
        $virus.style.top = `${this.x}px`;
        $virus.style.left = `${this.y}px`;
        document.body.appendChild($virus);
        this.x += this.speed;
    }
}