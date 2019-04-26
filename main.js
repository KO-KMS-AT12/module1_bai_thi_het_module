function Rectangle(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");

Rectangle.prototype.render = function (ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
};

let rectangle = new Rectangle(10,10,200,100,'#000000');
rectangle.render(CTX);