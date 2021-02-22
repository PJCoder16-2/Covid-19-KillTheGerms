class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sanitizer.png");
    this.image.resize(50,30);
    this.dropImage = loadImage("drop.png");
    this.trajectory =[];
  }

  display() {
    
    super.display();
 
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.dropImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
