class stone{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
         
        World.add(world,this.body)
    }
    display(){
    var pios=this.body.position
    imageMode(CENTER)
    image(stoneimage,pios.x,pios.y,this.width,this.height)
    }
}