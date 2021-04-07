class Player{
    constructor(x,y){
        this.x=xthis.y=ythis.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapecolor="orange"
        this.spt.addAnimation("player",playerAnimation)
        this.spt.scale-0.05
    }

    move(xdir,ydir) {
        this.spt.x+= xdir*grid;
        this.spt.y+= ydir*grid;
    }
}