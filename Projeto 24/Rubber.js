class Rubber {
  constructor(x, y, r) {
    //adicione as opções para configurar a Borracha
    var options = {};

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options);
    World.add(world, this.body);
  }
  display() {
    var rubberpos = this.body.position;
    push();
    translate(rubberpos.x, rubberpos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("darkblue");

    //Descomente o bloco de código para deixar a borracha em formato circular

    // circle(0, 0, this.r, this.r);
    // rect(0, 0, this.r, this.r);
    // ellipse(0, 0, this.x, this.y);
    // ellipse(0, 0, this.r, this.r);

    pop();
  }
}
