class Paper{
    constructor(x,y){
         var options={
            isStatic:false,
             'density':1.2,
             restitution:0.3,
             friction:0,
            } 
            this.radius=40;
            this.body=Bodies.circle(this.x,this.y,this.radius,options)
            //this.width=20;
            //this.height=50;
            this.radius=40;                               
            this.image=loadImage("paper.png");
            World.add(world, this.body);
    }
    dislpay(){
        
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
         rotate(pos.x,pos.y);
        
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        image(this.image,this.x,this.y,this.radius*2);

        
       
        
         pop();
    }
 
}
