// Our own prototipical inheritance //
function Shape(){
    
}


Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);

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

const s = new Shape();
const c = new Circle(1);