class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(this);
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.obstacles = [];
    this.speed = 700;
    this.obstacleTimer = 0;
    this.gameOver = new GameOver(this);
    this.grunt = new Audio("sounds/pain4.wav");
    this.birdsound = new Audio("sounds/deathd.wav");
    this.gameOverSound = new Audio("sounds/tribute.wav");
    this.gameSound = new Audio("sounds/NES_TheOldTowerInn.mp3");
  }

  start() {
    this.gameSound.play();
    this.animation();
    this.controls.setControls();
  }


  drawEverything() {
    this.clearAll();
    this.background.draw();
    this.player.draw();
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }

  };

  animation(timestamp) {
    if (this.player.life > 0) {
      this.player.updateImage(timestamp);
      this.drawEverything();
      this.updateEverything(timestamp);
    } else {
      this.gameOver.draw();
    }
    window.requestAnimationFrame((timestamp) => this.animation(timestamp));
  };

  gameOver(timestamp) {
    this.context.fillStyle = 'white';
    this.context.fillRect(this.x, this.y, this.width, 20);
  };

  updateEverything(timestamp) {

    this.player.update();
    this.background.update();


    if (this.obstacleTimer < timestamp - this.speed) {
      const goodies = new Goodies(this)
      this.obstacles.push(goodies);
      const badies = new Badies(this)
      this.obstacles.push(badies);
      this.obstacleTimer = timestamp
    };

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].update();
      this.obstacles[i].updateImage(timestamp);
      if (this.obstacles[i].y > this.canvas.height) {
        this.obstacles.splice(i, 1);
      }
    };

    for (let i = 0; i < this.obstacles.length; i++) {
      const scoreDisplay = document.getElementById('score');
      const obstacle = this.obstacles[i];
      const collided = this.player.checkCollision(this.player, obstacle);
      if (collided) {
        if (obstacle.id == "goodies") {
          this.obstacles.splice(i, 1);
          this.player.score += 100;
          scoreDisplay.textContent = `${this.player.score}`;
          console.log(this.player.score);
        } else {
          const lifeDisplay = document.getElementById('life');
          if (this.player.life >= 0) {
            this.birdsound.play();
            this.obstacles.splice(i, 1);
            this.grunt.play();
            this.player.life--;
            lifeDisplay.textContent = `${this.player.life}`;
          }
          console.log(this.player.life);
        }

      }
    }

  }
  clearAll() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };

  restart() {
    var btn = document.getElementById('start-button');
    // Data attribuet to keep tab of whether it is clicked or not
    btn.dataset.clicked = "1";
    // Attach event
    btn.addEventListener('click', change);

    function change() {
      if (!!this.dataset.clicked) {
        this.dataset.clicked = "";
        this.start();

      } else {
        this.dataset.clicked = "1";
        this.start();
      }
    }
  }
}