/*
    Prototype, class, extends, ES6
*/

class Animal{
    constructor(){
        this.age = 10;
    }
    eat(){
        console.log('PARENT METHOD');
    }
}

class Cat extends Animal{
    constructor(){
        super();
        this.mustache = true;
    }
    getVoice(){
        return 'myaymyay';
    }
}

class Dog extends Animal{
    constructor(){
        super();
        this.tail = false;
    }
    getVoice(){
        return 'gafgaf';
    }
}

const cat = new Cat();
const dog = new Dog();

console.log(cat);
console.log(dog);



/*
const items = document.querySelectorAll('.item');

for (let i=0; i<items.length; i++){
    items[i].addEventListener('focus', function(){
        this.style.border = '2px solid #f00';
    });
}

for (let i=0; i<items.length; i++){
    items[i].addEventListener('blur', function(){
        this.style.border = '1px solid #bbb';
    });
}
*/

class ${
    constructor(selector){
        this.elems = document.querySelectorAll(selector);
    }
    on(event, callback){
        for (let i=0; i<this.elems.length; i++){
            this.elems[i].addEventListener(event, callback);
        }
        /* // */return this;
    }
}

/*
const items = new $('.item');
items.on('focus', function(){
    this.style.border = '2px solid #f00';
});
items.on('blur', function(){
    this.style.border = '1px solid #bbb';
});
*/

(new $('.item')).on('focus', function(){
    this.style.border = '2px solid #f00';
}).on('blur', function(){
    this.style.border = '1px solid #bbb';
});
