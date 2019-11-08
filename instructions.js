class Instructions {
  constructor(game) {
    this.game = game;
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -2;
    this.img = new Image();
    this.img.src = "images/decorative-2858909_1280 copy.png";
  }

  draw() {
    this.context.fillStyle = "#550606";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.drawImage(this.img, ($canvas.width / 2), 400);
  }
}