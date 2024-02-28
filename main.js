//

// //Câu 1: Tính tổng của 2 tham số truyền vào nếu truyền vào ít hơn 2 tham số  thì tham số undefined mặc định là 0
// // Khai báo truyền thống
// function Sum(a, b) {
//     a = a !== undefined ? a : 0;
//     b = b !== undefined ? b : 0;
//     return a + b;
// }
// // Khai báo gán biến
// const Sum1 = function(a, b) {
//     a = a !== undefined ? a : 0;
//     b = b !== undefined ? b : 0;
//     return a + b;
// };
// // Arrow function
// const sumArrow = (a = 0, b = 0) => a + b;
// console.log(sumArrow(5, 3)); // Output: 8


//Câu 2:In ra chuỗi tất  cả các tham số truyền vào - định nghĩa hàm không có tham số truyền vào (dùng arguments)
// Khai báo truyền thống
function print1() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " ";
    }
    console.log(result);
}
// Khai báo gán biến
const print2 = function() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " ";
    }
    console.log(result);
};
// Arrow function
const printArrow = (...arguments) => {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i] + " ";
    }
    console.log(result);
};
printArrow('Phạm Văn', 'Bảo', 2011064338); // Output: Phạm Văn Bảo 2011064338


// //Câu 3: In ra ID của tất cả các phần tử của mảng được truyền vào 
// const arr = ['A', 'B', 'C'];
// // Khai báo truyền thống
// function printId1(arr) {
//     for (const key in arr) {
//         console.log(key);
//     }
// }
// // Khai báo gán biến
// const printId2 = function(arr) {
//     for (const key in arr) {
//         console.log(key);
//     }
// };
// // Arrow function
// const printIdArrow = arr => {
//     for (const key in arr) {
//         console.log(key);
//     }
// };
// printIdArrow(arr); // Output: 1 2 3


// //Câu 4: In ra giá trị cuả tất cả các phần tử trong mảng được truyền vào
// const arr1 = ['A', 'B', 'C', 'E'];
// // Khai báo truyền thống
// function printValue1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// // Khai báo gán biến
// const printValue2 = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };
// // Arrow function
// const printValueArrow = arr => {
//     arr.forEach(item => console.log(item));
// };
// printValueArrow(arr1); // Output: A B C

