class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.0,
    };
    this.visiblity = 225;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    // Descomente o bloco de código para adicionar uma imagem aos blocos

    // this.image= loadImage("block.png");
    // this.image= new Image("block.png");
    // this.image= imageLoading("block.png");
    // image= load Image("block.png");

    World.add(world, this.body);
  }

  display() {
    console.log(this.body.speed);
    var pos = this.body.position;
    if (this.body.speed < 3) {
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    } else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity - 5;
      tint(255, this.visiblity);
      image(
        this.image,
        this.body.position.x,
        this.body.position.y,
        this.width,
        this.height
      );
      pop();
    }
  }
}
