
function birds(option) {
    this.ctx = option.ctx;
    this.canvasX=option.canvasX;
    this.canvasY=option.canvasY;
    this.birdImg=option.birdImg;
    this.birdSpeed=0;
    this.g=0.0003;
    this.birdMaxAngle=45;
    this.birdMaxSpeed=0.4;
    this.birdImgW=this.birdImg.width / 3;
    this.birdImgH=this.birdImg.height;
    this.index=0;
    this.birdImgY=0;
    this.birdImgX=0;
    
}
birds.prototype = {
    constructor: birds,
    drawBird: function (t) {
         this.birdImgX=this.birdImgW*this.index;
        //  console.log(this.birdImgX);
        this.index++;
        var disantY = this.birdSpeed * t + this.g * t * t * 0.5;
        // console.log(disantY);
        this.birdSpeed = this.birdSpeed + this.g * t;
        this.canvasY += disantY;
        var currentAngle = this.birdSpeed * this.birdMaxAngle / this.birdMaxSpeed;
        if (currentAngle > 45) {
            currentAngle = 45;
        }
            this.ctx.save();
            this.ctx.translate(this.canvasX + 0.5 * this.birdImgW, this.canvasY + 0.5 * this.birdImgH);

            this.ctx.rotate(Math.PI / 180 * currentAngle);
            this.ctx.drawImage(this.birdImg, this.birdImgX, this.birdImgY, this.birdImgW, this.birdImgH, -0.5 * this.birdImgW, -0.5 * this.birdImgH, this.birdImgW, this.birdImgH);
            this.ctx.restore();

            if (this.index > 2) {
                this.index = 0;
            }

    }
}


