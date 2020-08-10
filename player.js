constructor (labAssistant) {
    this.labAssistant = labAssistant
}

controls () {
    document.onkeydown = function(event) {
        if (event.keyCode === 37) {
            // Go left
            this.y = `${this.offsetLeft - 20}px`;
        }
        if (event.keyCode === 39) {
            // Go right
            this.y = `${this.offsetLeft + 20}px`;
        }
}

let life1 = new Life ('First');
let life2 = new Life ('Second');
let life3 = new Life ('Third');

// Play method: If collision detection -> new life