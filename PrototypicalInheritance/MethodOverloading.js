function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){
    
}

function Circle(){
    
}
Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

extend(Circle,Shape);


//Meathod overloading ! important just do it after extending of it wont work as extend will override it with its code
Circle.prototype.duplicate = function (){
    Shape.prototype.duplicate.call(this);

    console.log('duplicate circles')
}
const c = new Circle();

c.duplicate()