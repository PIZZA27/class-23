class ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
this.ground=Bodies.rectangle(x,y,width,height,option)
this.width=width;
this.height=height;
World.add(world,this.ground)
    }
    ground1() {
var pos=this.ground.position
rectMode(CENTER);
fill("brown")
rect(pos.x,pos.y,this.width,this.height)

}

}