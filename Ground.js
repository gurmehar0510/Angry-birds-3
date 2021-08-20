class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/ground.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        imageMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}