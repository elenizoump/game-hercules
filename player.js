class Player {
  constructor(game) {
    this.game = game
    this.x = game.width - (game.width / 2);
    this.y = game.height - 240;
    this.width = 101;
    this.height = 207.99;
    this.context = game.context;
    this.vx = 100;
    this.vy = 0;
    //right
    this.image = new Image();
    this.image.src = "images/hsprite1.png";
    this.image1 = new Image();
    this.image1.src = "images/hsprite2.png";
    this.image2 = new Image();
    this.image2.src = "images/hsprite3.png";
    this.image3 = new Image();
    this.image3.src = "images/hsprite4.png";
    this.image4 = new Image();
    this.image4.src = "images/hsprite5.png";
    this.image5 = new Image();
    this.image5.src = "images/hsprite6.png";
    this.image6 = new Image();
    this.image6.src = "images/hsprite7.png";
    this.image7 = new Image();
    this.image7.src = "images/hsprite8.png";
    //left
    this.imagel = new Image();
    this.imagel.src = "images/lhsprite1.png";
    this.imagel1 = new Image();
    this.imagel1.src = "images/lhsprite2.png";
    this.imagel2 = new Image();
    this.imagel2.src = "images/lhsprite3.png";
    this.imagel3 = new Image();
    this.imagel3.src = "images/lhsprite4.png";
    this.imagel4 = new Image();
    this.imagel4.src = "images/lhsprite5.png";
    this.imagel5 = new Image();
    this.imagel5.src = "images/lhsprite6.png";
    this.imagel6 = new Image();
    this.imagel6.src = "images/lhsprite7.png";
    this.imagel7 = new Image();
    this.imagel7.src = "images/lhsprite8.png";
    this.arrayOfHercules = [this.image, this.image1, this.image2, this.image3, this.image4, this.image5, this.image6, this.image7];
    this.indexOfarrayOfHercules = 0;
    this.imageToPrint = this.arrayOfHercules[this.indexOfarrayOfHercules];
    this.larrayOfHercules = [this.imagel, this.imagel1, this.imagel2, this.imagel3, this.imagel4, this.imagel5, this.imagel6, this.imagel7];
    this.lindexOfarrayOfHercules = 0;
    this.limageToPrint = this.larrayOfHercules[this.lindexOfarrayOfHercules];
    this.speedImages = 150;
    this.imgTime = 0;
    this.movingDirection = null;
    this.life = 3;
    this.score = 0;
    this.velocity = 9
  }

  update() {
    // console.log(this.movingDirection);
    // console.log(this.vx);

    switch (this.movingDirection) {
      case 'left':
        this.x -= this.velocity;
        break;
      case 'right':
        this.x += this.velocity;
        break;
        // case null:
        //   this.game.background.velocityX = 0;
        //   break;
    }
  }

  moveRight() {

    if (this.x > game.width - 101) {
      this.x = game.width - 101;
    }
  }

  moveLeft() {
    if (this.x < 30) {
      this.x = 30;
    }
  }

  draw() {

    switch (this.movingDirection) {
      case 'left':
        this.context.drawImage(this.limageToPrint, this.x, this.y, this.width, this.height)
        break;
      case 'right':
        this.context.drawImage(this.imageToPrint, this.x, this.y, this.width, this.height)
        break;

      case null:
        this.context.drawImage(this.imageToPrint, this.x, this.y, this.width, this.height)
        break;
    }
  }

  checkCollision(a, b) {
    return a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y;
  }
  updateImage(timestamp) {
    if (this.imgTime < timestamp - this.speedImages) {
      switch (this.movingDirection) {
        case 'right':
          if (this.indexOfarrayOfHercules >= 7) {
            this.indexOfarrayOfHercules = 0;
            this.imageToPrint = this.arrayOfHercules[this.indexOfarrayOfHercules];
          } else {
            this.indexOfarrayOfHercules++;
            this.imageToPrint = this.arrayOfHercules[this.indexOfarrayOfHercules];
          };
          this.imgTime = timestamp;

          break;

        case 'left':
          if (this.lindexOfarrayOfHercules >= 7) {
            this.lindexOfarrayOfHercules = 0;
            this.limageToPrint = this.larrayOfHercules[this.lindexOfarrayOfHercules];
          } else {
            this.lindexOfarrayOfHercules++;
            this.limageToPrint = this.larrayOfHercules[this.lindexOfarrayOfHercules];
          };
          this.imgTime = timestamp;
          break;
      };
    }
  }
}