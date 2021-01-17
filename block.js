class Block{
    constructor(x,y){
        var option  = {
            density:5
        }
        this.body = Bodies.rectangle(x,y,50,40,option)
        this.width = 50
        this.height = 50
        World.add(wld,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        rectMode(CENTER)
        rotate(angle)
        translate(pos.x,pos.y)
        fill("blue")
        stroke("white")
        strokeWeight(1)
        rect(0,0,this.width,this.height)
        pop()
    }
}