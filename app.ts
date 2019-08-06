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
