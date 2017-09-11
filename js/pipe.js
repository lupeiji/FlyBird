
function Pipe(option){
    this.ctx=option.ctx;
    this.pipeImgbottom=option.pipeImgbottom;
    this.pipeImgtop=option.pipeImgtop;
    this.x=option.x;

    this.imgW=option.pipeImgtop.width;
    this.imgH=option.pipeImgtop.height;
    this.pipeSpeeed=2;
    this.topY=0;
    this.bottomY=0;
    this.space=180;
    this.getY();
}
Pipe.prototype={
 constructor:Pipe,
 drawPipe:function(){
     this.x-=this.pipeSpeeed;
    //  console.log(this.x);
    //  console.log(this.imgW*3);
     if(this.x<(-this.imgW*3)){
        //  console.log(123);
         this.x+=6*this.imgW*3;
         this.getY();
     }
    //  下面的管道
     this.ctx.drawImage(this.pipeImgbottom,this.x,this.bottomY);
     this.ctx.rect(this.x,this.bottomY,this.imgW,this.imgH);

    //  上面的管道
     this.ctx.drawImage(this.pipeImgtop,this.x,this.topY);
     this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);

 },
 getY:function(){
    this.topY=-(Math.random()*310+90);
    this.bottomY=this.topY+this.imgH+this.space;
 }
};

