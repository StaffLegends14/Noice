class Ball{
    constructor(x,y){
       this.x = x;
       this.y = y;
       this.r = 10
       var opt = {
           isStatic:true,
           restitution:0.95,
           friction:0.1,
           density:0.5
       }

       this.body = Bodies.circle(this.x,this.y,this.r,opt);
       World.add(world,this.body);
       this.img = loadImage("cannonball.png");

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img,0,0,40,40);
        pop();
    }

    shoot(){
        var vel = p5.Vector.fromAngle(cannon.angle)
        vel.mult(20)
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:vel.x,y:vel.y});
    
    }

}
