class Background {
  constructor(game) {
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -0.5;
    this.img = new Image();
    this.img.src = "images/herculesbackground.png";

  }
  // draw() {


  //   this.context.drawImage(this.img, this.x, 0, 2880, this.height);
  //   this.context.drawImage(this.img, this.x + 2880, 0, 2880, this.height);
  // }

  draw() {
    // window.requestAnimationFrame(() => {
    this.x -= 5;
    this.x %= this.img.width;
    this.context.clearRect(0, 0, 2880, 600);
    this.context.drawImage(this.img, this.x, 0, 2880, this.height);
    this.context.drawImage(this.img, this.x + this.width, 0, 2880, this.height);
    //this.draw();
    // })
  }

  update() {
    this.x += this.velocityX;
    if (this.x < -2880) this.x = 0;
  }
}