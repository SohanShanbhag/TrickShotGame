class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            density:0.6
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage('Paper.png');

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white")
        image(this.image, pos.x,pos.y,50,50);
    }
}