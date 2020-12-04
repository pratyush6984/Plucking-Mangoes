class Boy{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.boy=Constraint.create(options)
		World.add(world,this.boy)
	}

	attach(body){
		this.boy.bodyA=body;
	}

	fly()
	{
		this.boy.bodyA=null;
	}

	display()
	{
		if(this.boy.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}