class Log extends Base{
    constructor(x,y,w,angle){
        super(x,y,w,20,angle);
        this.image = loadImage("sprites/wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }
}