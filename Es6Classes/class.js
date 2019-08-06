// function Circle(r){
//     this.radus = r;
//     this.draw = function(){
//         console.log("drew")
//     }
// }

class Circle {
    constructor(radius){
        this.radius = radius;
        this.move = function (){}
    }
    draw() {
        console.log('draw');
    }
    static parse(){
        
    }
}

Circle.parse();

const c = new Circle;

c.parse()