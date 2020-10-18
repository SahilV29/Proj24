class Dustbin {
    constructor(x,y,width,height){
    var a = {'restitution': 0.3, }
    
       this.body =  Bodies.rectangle(x,y,width,height,a);
       this.width= width
           this.height=height
    World.add(world,this.body)
    
    }
    display(){
    
    var p = this.body.position
    var angle = this.body.angle
    
    rectMode(CENTER)
    fill("white")
    rect(width/1.3, 680,200,20)
   
    rectMode(CENTER)
    fill("white")
    rect(586, 640,20,100)
   
    
    rectMode(CENTER)
    fill("white")
    rect(788, 640,20,100)
    }
    
    
    }
       