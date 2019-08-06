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
// any
var car = 'BMW';
console.log(car);
car = { brand: "BMW", series: 3 };
