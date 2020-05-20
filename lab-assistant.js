class labAssistant {

    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = 0;
        this.y = window.innerWidth / 2;
        this.controls();
    }

    render() {
        let $labAssistant = document.createElement("img");
        $labAssistant.setAttribute("class", "labAssistant");
        $labAssistant.setAttribute("src", "img/female-scientist-type-5_1f469-1f3fe-200d-1f52c.png");
        $labAssistant.style.width = `${this.width}`;
        $labAssistant.style.height = `${this.height}`;
        $labAssistant.style.bottom = 0;
        $labAssistant.style.left = `${this.y}`;
        document.body.appendChild($labAssistant);
    }

    controls() {
        document.onkeydown = function(event) {
            if (event.keyCode === 37) {
                // Go left
                this.y = `${this.offsetLeft - 20}px`;
            }
            if (event.keyCode === 39) {
                // Go right
                this.y = `${this.offsetLeft + 20}px`;
            }
            // if (event.keyCode === 32) {
            //     // Fire
            //     let $syringe = document.createElement("img");
            //     $syringe.src = "img/syringe_1f489.png";
            //     $syringe.setAttribute("class", "syringe");
            //     $body.appendChild($syringe);
            //     $syringe.style.left = `${labAssistant.style.left}`;
            //     $syringe.style.bottom = `-50px`;
            //     vaccines.push($syringe);
            // }
        }
    }
}