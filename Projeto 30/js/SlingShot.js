class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 1,
    };
    this.sling = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.sling);
  }
  attach(body) {
    // Descomente o bloco de código correto para função attach
    // this.sling.bodyA = bodyA;
    // this.sling.bodyA = body;
    // this.sling = body;
    // this.sling.bodyA = bodyB;
  }
  fly() {
    this.sling.bodyA = null;
  }
  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(4);
      stroke("turquoise");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
