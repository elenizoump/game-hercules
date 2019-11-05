class Player {
  constructor(game) {
    this.x = game.width - 200;
    this.y = game.height - 100;
    this.width = 50;
    this.height = 70;
    this.context = game.context;
    this.vx = 0;
    this.vy = 0;;
    this.image = new Image();
    this.image.src = "images/car.png";
    this.movingDirection = null;
    this.life = 3;
    this.score = 0;
  }

  update() {
    // console.log(this.movingDirection);
    switch (this.movingDirection) {
      case 'left':
        this.x -= 3;
        break;
      case 'right':
        this.x += 3;
        break;
    }
  }

  moveRight() {
    this.x += 20;

    if (this.x > 2800) {
      this.x = 2880;
    }
  }

  moveLeft() {
    this.x -= 20;
    if (this.x < 30) {
      this.x = 30
    }
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  checkCollision(a, b) {
    return a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y;
  }
}