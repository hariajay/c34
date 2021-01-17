class Ball{
    constructor(x,y,radius){
        var option = {
            density:10
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(wld,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        ellipseMode(RADIUS)
        noFill()
        noStroke()
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop()
    }
}