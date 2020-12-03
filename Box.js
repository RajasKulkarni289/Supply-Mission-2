class Box{
    constructor(x,y,height,width){
        var ops={
            isStatic:true,
            friction:4
            
        }
        this.body=Bodies.rectangle(x,y,width,height,ops);
        World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        stroke("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}