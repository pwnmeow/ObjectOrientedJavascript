//Abbstraction

function Circle(r){
    this.radius = r;
    let deafultLocation = { x:0 , y:0 }

    this.getDefultLocation = function(){ //old way of making aetter
        return deafultLocation;
    }  
    this.draw = function(){
        computerOptimumLocation(0.1);
        console.log('draw')
    }

    Object.defineProperty(this,'deafultLocation',{
        get: function(){ //Read only
            return deafultLocation;
        },
        set: function(value){ //Can set Value
            if(!value.x || !value.y)
            throw new Error('Invalid Location');
        }
    });
    
}


const circle = new Circle();
circle.getDefultLocation();
circle.deafultLocation = 1;
circle.getDefultLocation;