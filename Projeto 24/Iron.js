class Iron {
  constructor(x, y) {
    //adicione as opções para configurar o Ferro
    var options = {};

    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 80;
    this.height = 50;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);

    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
