
//Public Bad Code
function Circle(r){
    this.radius = r;
    this.deafultLocation = { x:0 , y:0 }

    this.computerOptimumLocation() = function() {
        //...
    }

    this.draw = function(){
        this.computerOptimumLocation();

        console.log('draw')
    }
}


const circle = new Circle();

//Abbstraction

function Circle(r){
    this.radius = r;
    let deafultLocation = { x:0 , y:0 }

    let computerOptimumLocation = function() {
        //...
    }

    this.draw = function(){
        computerOptimumLocation(0.1);
        console.log('draw')
    }
}


const circle = new Circle();