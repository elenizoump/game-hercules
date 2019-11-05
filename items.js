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
    this.y += 4
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
  }
  draw() {
    this.context.fillStyle = 'red';
    this.context.fillRect(this.x, this.y, this.width, 20);
  }
}