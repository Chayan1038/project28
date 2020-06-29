class chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            point2:{x:this.offsetX, y:this.offsetY},
            stiffness:0.5
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
        var point1 =this.chain.body1.position;
        var point2 = this.chain.body2.position;
        line(point1.x,point1.y,point2.x,point2.y);
    }
}