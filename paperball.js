class Paperball {

    constructor(x,y){

        var options = {
            isStatic : false,
            restitution: 0.3,
            friction : 0.5,
            density : 1.2,
            //gravity : 0.05
        }

        this.body = Bodies.circle(x,y,15,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
      }
}