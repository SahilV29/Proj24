class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.6,
          'friction':4.5,
          'density':1.3
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle( this.x,this.y, this.r/2, options);
      
      
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
     
      push();
      translate( paperpos.x,  paperpos.y);
      ellipseMode(RADIUS);
      strokeWeight(3)
      fill(255,0,225);
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };