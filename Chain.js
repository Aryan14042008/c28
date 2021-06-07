class Chain{
    constructor(bodyA, B){
        var options = {
            'bodyA': bodyA,
            'pointB': B,
            'stiffness': 0.04,
            'length': 10
        }
         this.pointB=B;
        this.sling=Constraint.create(options);            
        World.add(world,this.sling);
    }
    fly(){
    
   this.sling.bodyA = null;
         }

         display(){
        if(this.sling.bodyA)
        { 
        var pointA = this.sling.bodyA.position;
        var ptB = this.B;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
};