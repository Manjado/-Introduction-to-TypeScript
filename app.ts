//string
let myName = 'Mike'; //the type (string) is specified after initialization
//myName = 28;

// number
let myAge = 21.5; //the type (number) is specified after initialization
//myAge = 'Mike';

// boolean
let hasHobbies: boolean = true;
//hasHobbies = 1;
// false because is number

let myRealAge; // type is equal to any
myRealAge = 27;
myRealAge = '27'

let myRealAge1: number
myRealAge1 = 27;

// array
let hobbies = ['Cookies', 'Sports']; //the type (string) is specified after initialization by elements
console.log(hobbies[0]);
//hobbies = [100] //error
hobbies = ['Footbol'] //error

// array next example
let sports: any[] = ['football', 'runing']; //the type (string) is specified after initialization by elements
console.log(hobbies[0]);
sports = [100]
//sports = 100 will by error because we wrote type array

//tuples
let address: [string, number] = ['Superstreet',99];

// enum czyt.inam
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2 // or 101
}
let myColor: Color = Color.Green;
console.log(myColor)

// any  type "any" should by use seldom
let car: any = 'BMW';
console.log(car);
car = { brand: "BMW", series: 3 }

//function
function returnMyName(): string { //type string refers to the return value
    return myName;
}
console.log(returnMyName())

//void
function sayHello(): void {
    console.log("Hello");  //type void when the function return nothing , we can not use return
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2
}
//console.log(multiply(2,"max")) error
console.log(multiply(2,4));

// let myMultiply;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5,2));

// function types
let myMultiply: (a: number, b: number) => number;;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

// objects
let userData = {  //now we have object with type string and number
    name: 'mike',  // key name is important
    age: 27
}


// second way of set up our object
// let userData: { name: string, age: number } = {
//     name: 'mike',
//     age: 27
// }

// userData = {}  //it will be error

//  userData = { // it will be error because this object has a wrong name of keys
//     a: 'Mike',
//     b: 24
//  }

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [11,13,7],
    output: function (all: boolean): number[] {
        return this.data
    }
}

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [11,13,7],
    output: function (all: boolean): number[] {
        return this.data
    }
}
console.log(complex2);

// union types
let myRealyAge: number | string = 27;
myRealyAge = '27';
//myRealyAge = true error

// check types
let finalValue = 30;
if (typeof finalValue == 'number') {
    console.log("Final value is a number");
}

// never
function neverReturns():never { // if you know that some point of function should't be achieved
    throw new Error("An error!")
}

// Nullable types // set in tsconfig "strictNullChecks": true
let canBeNull = 12;
//canBeNull = null;  // now we can't assign null because canBeNull is number type

//let canBeNull:number | null = 12; some solution for null when our project works in strictNullChecks
canBeNull = 5;
let canAlsoBeNull;
canAlsoBeNull = null

let canThisBeAny = null; //now we can change type ?? in new version of ts
canThisBeAny = 12

//js
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };
// myself.bankAccount.deposit(3000);
// console.log(myself);

//ts
type BankAccount = {money: number, deposit: (value: number) => void}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

// Default Parameters
const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
    }
    console.log("Done!", start)
}

countdown();

//Rest Parameters & Tuples fot TS3
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
//Tuples fot TS3
// function printInfo(...info: [string, number]) {
//     console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
// }

class Person {
    name: string;
    private type: string = 'example';
    protected age: number = 27;           //they're also accessible from any objects or classes which inherit from this class

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type)
    }
}

//in short version
// class Person {
//     private type: string;
//     protected age: number;
//     constructor(public name: string, public username: string) {
//     }
// }

const person = new Person("Max",'max') //I can not get access to type and age
console.log(person);
person.printAge();
//person.setType('cool guy'); //Won't work with private method

//Inheritance
class Mike extends Person {
    //name = "Mike"; go tu super if i want to overwrite
    constructor(username:string) {  //if I use constructor I have to use super(), super refers to the parent class
        super("Max", username); // i exoect to get username and this is a reason why i put this var in constructor
        this.age = 31;
        //console.log(this.type) //type is private and only accessible within Person
    }
}

const mike = new Mike("max");
console.log(mike);

class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species)
plant.species = 'Green Plant';
console.log(plant.species)

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstract Classes , is class you can't use as instance. You can only inherit
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;  //abstract method doesn't include any logic
                                             // Logic should be written in child class

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject(); // new Project will give error because it is abstract class
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//private constructors
//it is patern of singleton , you can only have one instance of class
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) {}

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only One');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The Only One'); // in this way you can't create instance of class
let right = OnlyOne.getInstance()

class OnlyTwo {
    private static instance: OnlyTwo;

    private constructor(public readonly name: string) {} //if you want to read value you can use getter or readyonly

    static getInstance() {
        if(!OnlyTwo.instance) {
            OnlyTwo.instance = new OnlyTwo('The only One');
        }
        return OnlyTwo.instance;
    }
}

let right2 = OnlyTwo.getInstance();
//right2.name = 'it is read only;
console.log(right2);





//Exercise
class Car {
    name: string;
    acceleration: number = 0
    constructor(name: string,) {
        this.name = name;
    }

    honk() {
        console.log('Toooooooooot!')
    }

    accelerate(speed: number) {
        this.acceleration =  this.acceleration + speed
    }

}

const carOne = new Car('BMW')
carOne.honk();
console.log(carOne.acceleration);
carOne.accelerate(10);
console.log(carOne.acceleration);

class BaseObject {
    width = 0;
    length = 0;

}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());


//exercise 3 - getter & setter

class PersonOne {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const personOne = new PersonOne();
console.log(personOne.firstName);
personOne.firstName = "Ma";
console.log(personOne.firstName)
personOne.firstName = "Mike";
console.log(personOne.firstName);

