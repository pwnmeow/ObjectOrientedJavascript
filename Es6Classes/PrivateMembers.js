class Circle {
    constructor(r){
        this.radius = r;
    }
}

const c = new Circle(1);

c.radius

//private property declaration underscores 

class Circle {
    constructor(r){
        this._radius = r;
        this['radius'] = r;
    }
}

const c = new Circle(1);

c._radius()


const _boy = Symbol();
