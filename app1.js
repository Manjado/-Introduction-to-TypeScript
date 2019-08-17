// namespace MyMath {
//     const PI = 3.14;
//
//     export function calculateCircumference(diameter: number) {
//         return diameter * PI;
//     }
// }
//we can have few namespace inside one namespace
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
//console.log(MyMath.calculateCircumference(3));
console.log(MyMath.Circle.calculateCircumference(3));
console.log(PI);
