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
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius);
        image(this.image,this.x,this.y,this.radius*2);

        push();
        rotate(pos.x,pos.y);
        translate(pos.x,pos.y)
         pop();
    }
 
}