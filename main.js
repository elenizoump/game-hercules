const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');
$canvas.width = window.screen.width;
$canvas.height = "600";
const game = new Game($canvas);
const startButton = document.querySelector(".start-button")

let logoImage = new Image();
logoImage.src = 'images/game logo.png';
context.drawImage(logoImage, ($canvas.width - 350) / 2, 10, 350, 500);

this.context.fillStyle = 'green';
this.context.font = "500px Arial";
this.context.fillText("CHALLENGE OF HERCULES", ($canvas.width - 350) / 2, 550);



window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  }

  function startGame() {
    // let game = new Game($canvas);
    game.start();
  }
};
// context.drawImage(this.img, this.x, 0, 2880, this.height);