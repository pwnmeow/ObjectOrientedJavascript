function mixin(target, ...sources){
    Object.assign(target, ...sources)
}


const canEat = {
    eat: function(){
        this.hunger--,
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        this.hunger--,
        console.log('walking');
    }
}

const canSwim = {
    swim: function(){
        this.hunger--,
        console.log('swiming');
    }
}


function Person(){

}

function Goldfish(){

}

// const person = Object.assign(Person.prototype,canEat,canWalk);

const person = new Person();
mixin(Goldfish.prototype, canEat,canWalk)


// Object.assign(Goldfish.prototype,canEat,canSwim);

mixin(Goldfish.prototype, canEat,canSwim)
const lily = new Goldfish();
console.log(person);

console.log(lily);