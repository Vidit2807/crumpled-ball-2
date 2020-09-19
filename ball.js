class Ball {
    constructor(x, y,radius) {
      
      this.body = Bodies.circle(x, y, radius);
      this.radius = radius;
    
     this.image=loadImage("ball/ball1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);

      imageMode(CENTER);
      fill("green");
      
    
      ellipse(ball.position.x,ball.position.y,20);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };