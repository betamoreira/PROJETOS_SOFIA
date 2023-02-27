class paper {
  constructor(x, y, r) {
    //Adicione as opções para a bola de papel
    var options = {};

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("assets/paper.png");

    //Altere o código para que o raio do corpo circular do paper seja menor que a imagem
    this.body = Bodies.circle(this.x, this.y, this.r, options);

    World.add(world, this.body);
  }
  display() {
    var paperpos = this.body.position;

    push();
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER);
    fill(255, 0, 255);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}
