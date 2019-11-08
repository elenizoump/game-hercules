const $canvas = document.querySelector("canvas");
const context = $canvas.getContext('2d');
$canvas.width = window.screen.width;
$canvas.height = "600";
const game = new Game($canvas);
const startButton = document.querySelector(".start-button")

let logoImage = new Image();
logoImage.src = 'images/gamelogo.png';

let herculesBanner = new Image();
herculesBanner.src = 'images/herculesbanner.png';


window.onload = function () {
  context.drawImage(logoImage, ($canvas.width / 2) - 125, 60, 250, 380);
  context.drawImage(herculesBanner, $canvas.width / 5, 415);

  function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
    var len = str.length,
      s;
    context.save();
    context.translate(centerX, centerY);
    context.rotate(-1 * angle / 2);
    context.rotate(-1 * (angle / len) / 2);
    for (var n = 0; n < len; n++) {
      context.rotate(angle / len);
      context.save();
      context.translate(0, -1 * radius);
      s = str[n];
      context.fillText(s, 0, 0);
      context.restore();
    }
    context.restore();
  }
  var
    centerX = $canvas.width / 2,
    centerY = $canvas.height - 30,
    angle = Math.PI * 0.8,
    radius = 530;

  context.font = '50px Herculanum';
  context.textAlign = 'center';
  context.fillStyle = '#D7A22E';
  context.strokeStyle = '#D7A22E';
  context.lineWidth = 4;
  drawTextAlongArc(context, 'CHALLENGE OF', centerX, centerY, radius, angle);




  // context.fillStyle = '#D7A22E';
  // context.font = "50px Herculanum";
  // context.fillText("CHALLENGE OF", ($canvas.width - 350) / 2.2, 50);


};

function disappear() {
  document.getElementById("instructions").style.display = "none";
}

document.getElementById("start-button").onclick = function () {

  disappear();
  game.start();
}



// context.drawImage(this.img, this.x, 0, 2880, this.height);