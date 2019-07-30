function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);  //initialised 

circle.location = { x: 1}; //adding

const propertyName = 'center-location'; 
circle[propertyName] = { x:1 } //adding

delete circle.location; //removing