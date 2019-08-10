"use strict";
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
