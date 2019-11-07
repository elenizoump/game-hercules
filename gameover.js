class GameOver {
  constructor(game) {
    this.game = game;
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -2;
    this.img = new Image();
    this.img.src = "images/gameoverimage.png";
  }

  draw() {
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.drawImage(this.img, ($canvas.width / 2) - 288.5, 50, 577, 548);

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
    drawTextAlongArc(context, 'W E L C O M E  T O  O L Y M P U S', centerX, centerY, radius, angle);
  }
}