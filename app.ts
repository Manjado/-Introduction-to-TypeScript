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