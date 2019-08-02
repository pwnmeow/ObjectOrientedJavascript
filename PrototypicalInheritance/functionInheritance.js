// Our own prototipical inheritance //
function Shape(color){
    this.color = color
}


Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Square(size){
    this.size= size;
}
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


extend(Circle,Shape)
//resting the constructor beacuse you no longer have constructor in the code

Circle.prototype.constructor = Circle;

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log('draw');
}

// Circle.prototype.duplicate = function(){
//     console.log('duplicate')
// }

Square.prototype = Object.create(Object.prototype);
Square.prototype = Object.create(Shape.prototype);

const s = new Shape();
const c = new Circle(1);