
function sky(option) {
    this.ctx = option.ctx;
    this.skyX = option.skyX;
    this.skyImg = option.skyImg;
    this.skyY = 0;
    this.skySpeed = 2;
}
sky.prototype = {
    constructor: sky,
    drawSky: function () {
        if (this.skyX <= (-this.skyImg.width)) {
            this.skyX += this.skyImg.width * 2;
        }
        this.skyX -= this.skySpeed;
        this.ctx.drawImage(this.skyImg, this.skyX, 0);
    }
};
