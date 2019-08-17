// namespace MyMath {
//     const PI = 3.14;
//
//     export function calculateCircumference(diameter: number) {
//         return diameter * PI;
//     }
// }

//we can have few namespace inside one namespace
namespace MyMath {
    export namespace Circle {
        const PI = 3.14;

        export function calculateCircumference(diameter: number) {
            return diameter * PI;
        }
    }
}