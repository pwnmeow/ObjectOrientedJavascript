// Constructor Function 

function Person(name,age){
    this.name = name;
    this.age = age;
    this.draw = function(){
        console.log('hello ', this.name)
    }
}

Person.call({},1); // this empty object refers to window object in browser thats global in node, then theres argument 


Person.apply({},[1,2,3]); // this does the same

Person.call(window,1); //this is how it looks like 

const sheeraz = new Person("sheeraz", 20);


