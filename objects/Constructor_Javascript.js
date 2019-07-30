// Constructor Function 

function Person(name,age){
    this.name = name;
    this.age = age;
    this.draw = function(){
        console.log('hello ', this.name)
    }
}

const sheeraz = new Person("sheeraz", 20);
let print = sheeraz.construtor
console.log(print);

