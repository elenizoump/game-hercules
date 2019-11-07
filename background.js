class Background {
  constructor(game) {
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -5;
    this.img = new Image();
    this.img.src = "images/herculesbackground.png";
  }
  draw() {

    this.context.drawImage(this.img, this.x, 0, 2880, this.height);
    this.context.drawImage(this.img, this.x + 2880, 0, 2880, this.height);
  }
  update() {
    this.x += this.velocityX;
    if (this.x < -2880) this.x = 0;
  }
}