class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function (){}
    }
    draw() {
        console.log('draw');
    }
    static parse(str){
        const rad = JSON.parse(str).radius;
        return new Circle(r)
    }
}