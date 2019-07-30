// Factory function  
function createCircle(radius){
    return {
    radius,
    draw: function(){
        console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();


function createPerson(name,age){
    return{
        name,
        age,
        sayhello: function(){
            console.log("hello" , this.name);
        }
    }
}

const sheeraz = createPerson('sheeraz',20);
sheeraz.sayhello()
console.log(sheeraz)