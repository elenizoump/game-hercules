function randomX() {
  return Math.floor((Math.random() * 2800) + 50);
}

class Obstacles {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this.obstacles = game.obstacles;
    // this.category = "";
    this.x = randomX();
    this.y = 0;
    this.height = 20;
    this.width = 30;
    this.vx = -4;
  }

  update() {
    this.x += -7
    this.y += 6
  }
};

class Goodies extends Obstacles {
  constructor() {
    super(game)
    this.id = "goodies"
  }
  draw() {
    this.context.fillStyle = 'green';
    this.context.fillRect(this.x, this.y, this.width, 20);
  }

  // changeCategory() {
  //   this.category = newCategory;
  // }
}



class Badies extends Obstacles {
  constructor() {
    super(game)
    this.id = "badies"
    this.image = new Image();
    this.image.src = "images/Yellowbird1.png";
    this.image1 = new Image();
    this.image1.src = "images/yellowbird 2.png";
    this.image2 = new Image();
    this.image2.src = "images/Yellowbird3.png";
    this.image3 = new Image();
    this.image3.src = "images/Yellowbird4.png";
    this.image4 = new Image();
    this.image4.src = "images/Yellowbird5.png";

    this.arrayOfBaddies = [this.image, this.image1, this.image2, this.image3, this.image4];
    this.indexOfarrayOfBaddies = 0;
    this.imageToPrint = this.arrayOfBaddies[this.indexOfarrayOfBaddies];
    this.imageToPrint = this.arrayOfBaddies[this.indexOfarrayOfBaddies];
    this.speedImages = 150;
    this.imgTime = 0;

  }
  draw() {
    this.context.drawImage(this.imageToPrint, this.x, this.y, 130.39, 55.56)
  }
}