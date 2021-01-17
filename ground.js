class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic:true,
            density:500
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        World.add(wld,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        rectMode(CENTER)
        fill("red")
        stroke("brown")
        strokeWeight(3)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}