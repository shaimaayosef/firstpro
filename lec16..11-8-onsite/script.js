class Animal {
    alive=true;
    name;
    age;

    constructor(animalName,animalAge){
        this.name=animalName;
        this.age=animalAge;
    }
}

//make new instance from Animal
const Animal2= new Animal ('cat',3);
console.log(Animal2);

//extends classes .. inhereting
class birds extends Animal{
    flyingSpeed;

    constructor(name,age,flying){
        super(name,age)
        this.flyingSpeed=flying;
    }
}

//setters & getters -incapsulation
class Person {
    constructor(name){
        this.name=name;
    }

    get _age(){
        return this._age;
    }

    set _age(value){
        if(value>0){
            this._age=value;
        }else{
            console.log('Invalid input');
        }
    }
}

//async function - throw-catch-await

async function fileload(){
    let fileload=true;
    if(fileload){
        return('fileload')
    }else{
        throw('error:failed to load file')
    }
}

async function startloading() {
    try{
        let messages = await loadfile();
        console.log(messages);

    }catch(error){
        console.log(error);
    }
}

//fetch await
async function fetchproduct(url) {
    const response=await fetch(url)
    console.log(response);
    const data = await response.jason()
    renderproduct(data)
}
