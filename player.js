class Player{
    constructor(x, y, r){
        var options = {
            density: 1,
            frictionAir: 1
        };

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/Superhero-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);        
    }
}