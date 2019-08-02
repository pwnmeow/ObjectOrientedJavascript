function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){
    
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

function Circle(){
    
}


extend(Circle,Shape);


//Meathod overloading ! important just do it after extending of it wont work as extend will override it with its code
Circle.prototype.duplicate = function (){
    console.log('duplicate circles')
}

function Square(){

}

extend(Circle,Shape);

Square.prototype.duplicate = function (){
    console.log('duplicate square')
}


const c = new Circle();

//c.duplicate()

const shapes = [
    new Square(),
    new Circle()
];

for (let shape of shapes){
    shape.duplicate();
}
//
//============================OLD WAY OF DOING THINGS=======
//
// for (let shape of shapes){   
//     if (shape.type === 'circle')
//         duplicateCircle();
//     else if (shape.type === 'square')
//         duplicateSquare();
//     else 
//         duplicateShape();
// }