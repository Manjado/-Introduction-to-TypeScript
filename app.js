"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//string
var myName = 'Mike'; //the type (string) is specified after initialization
//myName = 28;
// number
var myAge = 21.5; //the type (number) is specified after initialization
//myAge = 'Mike';
// boolean
var hasHobbies = true;
//hasHobbies = 1;
// false because is number
var myRealAge; // type is equal to any
myRealAge = 27;
myRealAge = '27';
var myRealAge1;
myRealAge1 = 27;
// array
var hobbies = ['Cookies', 'Sports']; //the type (string) is specified after initialization by elements
console.log(hobbies[0]);
//hobbies = [100] //error
hobbies = ['Footbol']; //error
// array next example
var sports = ['football', 'runing']; //the type (string) is specified after initialization by elements
console.log(hobbies[0]);
sports = [100];
//sports = 100 will by error because we wrote type array
//tuples
var address = ['Superstreet', 99];
// enum czyt.inam
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // or 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any  type "any" should by use seldom
var car = 'BMW';
console.log(car);
car = { brand: "BMW", series: 3 };
//function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello"); //type void when the function return nothing , we can not use return
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2,"max")) error
console.log(multiply(2, 4));
// let myMultiply;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5,2));
// function types
var myMultiply;
;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'mike',
    age: 27
};
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
var complex = {
    data: [11, 13, 7],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [11, 13, 7],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2);
// union types
var myRealyAge = 27;
myRealyAge = '27';
//myRealyAge = true error
// check types
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log("Final value is a number");
}
// never
function neverReturns() {
    throw new Error("An error!");
}
// Nullable types // set in tsconfig "strictNullChecks": true
var canBeNull = 12;
//canBeNull = null;  // now we can't assign null because canBeNull is number type
//let canBeNull:number | null = 12; some solution for null when our project works in strictNullChecks
canBeNull = 5;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null; //now we can change type ?? in new version of ts
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// Default Parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
//Rest Parameters & Tuples fot TS3
function printInfo(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
//Tuples fot TS3
// function printInfo(...info: [string, number]) {
//     console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
// }
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = 'example';
        this.age = 27; //they're also accessible from any objects or classes which inherit from this class
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
//in short version
// class Person {
//     private type: string;
//     protected age: number;
//     constructor(public name: string, public username: string) {
//     }
// }
var person = new Person("Max", 'max'); //I can not get access to type and age
console.log(person);
person.printAge();
//person.setType('cool guy'); //Won't work with private method
//Inheritance
var Mike = /** @class */ (function (_super) {
    __extends(Mike, _super);
    //name = "Mike"; go tu super if i want to overwrite
    function Mike(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 31;
        return _this;
        //console.log(this.type) //type is private and only accessible within Person
    }
    return Mike;
}(Person));
var mike = new Mike("max");
console.log(mike);
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes , is class you can't use as instance. You can only inherit
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    // Logic should be written in child class
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject(); // new Project will give error because it is abstract class
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//private constructors
//it is patern of singleton , you can only have one instance of class
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The Only One'); // in this way you can't create instance of class
var right = OnlyOne.getInstance();
var OnlyTwo = /** @class */ (function () {
    function OnlyTwo(name) {
        this.name = name;
    } //if you want to read value you can use getter or readyonly
    OnlyTwo.getInstance = function () {
        if (!OnlyTwo.instance) {
            OnlyTwo.instance = new OnlyTwo('The only One');
        }
        return OnlyTwo.instance;
    };
    return OnlyTwo;
}());
var right2 = OnlyTwo.getInstance();
//right2.name = 'it is read only;
console.log(right2);
//Exercise
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var carOne = new Car('BMW');
carOne.honk();
console.log(carOne.acceleration);
carOne.accelerate(10);
console.log(carOne.acceleration);
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
//exercise 3 - getter & setter
var PersonOne = /** @class */ (function () {
    function PersonOne() {
        this._firstName = '';
    }
    Object.defineProperty(PersonOne.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonOne;
}());
var personOne = new PersonOne();
console.log(personOne.firstName);
personOne.firstName = "Ma";
console.log(personOne.firstName);
personOne.firstName = "Mike";
console.log(personOne.firstName);
