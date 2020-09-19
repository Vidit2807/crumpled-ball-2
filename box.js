class Box {
    constructor(x, y,  width,height) {
      var options={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
     this.image=loadImage("ball/b.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      imageMode(CENTER);
      fill("green");
      
      rect(0, 0, this.width, this.height);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };