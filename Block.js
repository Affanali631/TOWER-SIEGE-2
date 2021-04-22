class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility= 255;
    }
    display(){
      var pos= this.body.position;
      
    
    if(this.body.speed < 3){
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
   else {
    World.remove(world,this.body)
    push()
    this.visibility=this.visibility-10
   
   pop()
  }
}
}
