class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        density : 1.2,
        friction : 0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = 10   
      this.image = loadImage("img/ball.png");  
      this.body.debug = true;
      World.add(world, this.body);
     
     // this.image = loadImage("sprites/base.png");
    };
    display(){
      
      var  paperpos = this.body.position

      push();
      translate(paperpos.x,paperpos.y);
      imageMode(RADIUS);
      
      
     image(this.image,100,10, 70,70);
      pop();
    };
  };
  //rotate(angle);
  //image(this.image ,0, 0, this.width, this.height);