class Block {
    constructor(x,y,width,height,colour) {
      var options = {
        isStatic:false,
        'restitution':0.6,
        'friction':1,
        'density':1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,colour,options);
      this.width = width;
      this.height = height;
      this.colour=colour;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.colour);
      rect(pos.x, pos.y, this.width, this.height);
     // console.log(this.body.speed);
      if(this.body.speed >3){
      
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5;
        tint(255, this.Visibility);
        rect( this.body.position.x, this.body.position.y, this.width,this.height);
        pop();
      }
      
    }

  };