class GameOver {
  constructor(game) {
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -2;
    this.img = new Image();
    this.img.src = "images/logo.png";
  }

  draw() {
    this.context.drawImage(this.img, this.x, 0, this.width, this.height);

    this.context.fillStyle = 'green';

    this.context.font = "100px Arial";
    this.context.fillText("hello", 400, 600)
  }
}