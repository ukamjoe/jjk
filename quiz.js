// // // // // // // // // // // //let x = 5;
// // // // // // // // // // // //let y = 10;
// // // // // // // // // // // //let z = x * y + y / x;

// // // // // // // // // // // // let a = 10;
// // // // // // // // // // // // let b = 3; 
// // // // // // // // // // // // console.log(Math.pow(a,b));

// // // // // // // // // // // let x = 5;
// // // // // // // // // // // let y = 10;
// // // // // // // // // // // console.log(x < y);

// // // // // // // // // // let x = 5;
// // // // // // // // // // console.log(-x);

// // // // // // // // // // let x = 2 ** 3;
// // // // // // // // // // console.log(x)

// // // // // // // // // // console.log(Number("123"));

// // // // // // // // // // console.log(String(123));

// // // // // // // // // // let x = 5;
// // // // // // // // // // if (x > 3) {
// // // // // // // // // //     console.log("Greater than 3");
// // // // // // // // // // }

// // // // // // // // // let num = 10;
// // // // // // // // // if (num > 15) {
// // // // // // // // //     console.log("Large");
// // // // // // // // // } else{
// // // // // // // // //     console.log("Small")
// // // // // // // // // }

// // // // // // // // let num = -1;
// // // // // // // // if (num > 0) {
// // // // // // // //     console.log("Positive");
// // // // // // // // } else if (num < 0) {
// // // // // // // //     console.log("Negative");
// // // // // // // // } else {
// // // // // // // //     console.log("Zero");
// // // // // // // // }

// // // // // // // // console.log(Math.abs(-7));

// // // // // // // // console.log(Math.max(5, 10, 15));

// // // // // // // const person = { name: "Alice" , age: 25};
// // // // // // // // console.log(person.name);

// // // // // // const book = { title: "1984" , author: "George Orwell"};
// // // // // // delete book.author;
// // // // // // console.log(book);

// // // // // const user ={ profile: {name: "John", age: 30} };
// // // // // console.log(user.profile.name);

// // // // const arr = [1, 2, 3];
// // // // arr.unshift(0);
// // // // console.log(arr)

// // // const arr = [1, 2, 3, 4];
// // // console.log(arr.slice(1, 3));

// // function greet(name = "Guest") {
// //     return `Hello, ${name}!`;
// // }
// // console.log(greet());

// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3));

const Square = function (x) {
    return x * x;
};
console.log(Square(5));