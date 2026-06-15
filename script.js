// // let fullName = "Rahad Mondal"; // String variable to store the full name

// // // let age = 25; // Number variable to store the age

// // let isStudent = true; // Boolean variable to indicate if the person is a student

// // let results = undefined; // Undefined variable to store results, currently not assigned a value

// // let score = null; // Null variable to represent the absence of a score

// // console.log(typeof fullName); // Output: string
// // // console.log(typeof age); // Output: number
// // console.log(typeof isStudent); // Output: boolean
// // console.log(typeof results); // Output: undefined
// // console.log(typeof score); // Output: object (null is considered an object in JavaScript) -- its javascript bug.

// // let a = 5;
// // let b = 10;

// // // arithmetic operators
// // let sum = a + b; // addition
// // let difference = a - b; // subtraction
// // let product = a * b; // multiplication
// // let quotient = a / b; // division
// // let remainder = a % b; // modulus
// // let exponentiation = a ** 3; // exponentiation

// // console.log("Sum:", sum); // Output: Sum: 15
// // console.log("Difference:", difference); // Output: Difference: -5
// // console.log("Product:", product); // Output: Product: 50
// // console.log("Quotient:", quotient); // Output: Quotient: 0.5
// // console.log("Remainder:", remainder); // Output: Remainder: 5
// // console.log("Exponentiation:", exponentiation); // Output: Exponentiation: 125

// // // assignment operator

// // let x;

// // x = 10; // right site value assignment

// // // x = x + 5;

// // x += 5; // x = x + 5; shorthand for addition assignment

// // console.log("Value of x after addition assignment:", x); // Output: Value of x after addition assignment: 15

// // // comparison operators

// // // let num1 = 100;
// // // let num2 = 100;

// // // let isGreater = num1 >= num2; // greater than or equal to

// // // let isLess = num1 <= num2; // less than or equal to

// // // let isEqual = num1 === num2; //  equality

// // // let isNotEqual = num1 !== num2; // not equal

// // // console.log(isGreater); // Output: true
// // // console.log(isLess); // Output: true
// // // console.log(isEqual); // Output: true
// // // console.log(isNotEqual); // Output: false

// // // let age = 15;

// // // if (age >= 18) {
// // //   console.log("You are an adult."); // Output: You are an adult.
// // // } else {
// // //   console.log("You are a minor."); // Output: You are a minor.
// // // }

// // // let totalBuys = 999;
// // // let discount;
// // // let totalPayable;

// // // if (totalBuys >= 1000) {
// // //   console.log("congratulations! 10% discount for you");
// // //   discount = totalBuys * 0.1; // Calculate the discount amount
// // //   totalPayable = totalBuys - discount; // Calculate the total payable amount after applying the discount
// // // } else if (totalBuys >= 500) {
// // //   console.log("congratulations! 5% discount for you");
// // //   discount = totalBuys * 0.05; // Calculate the discount amount
// // //   totalPayable = totalBuys - discount; // Calculate the total payable amount after applying the discount
// // // } else {
// // //   console.log("Sorry! No discount for you");
// // // }

// // // console.log("Total Buys:", totalBuys); // Output: Total Buys: 999
// // // console.log("Discount:", discount); // Output: Discount: 99.9
// // // console.log("Total Payable:", totalPayable); // Output: Total Payable: 899.1

// let totalBuys = 600; // Example value
// let discount;
// let totalPayable;

// if (totalBuys >= 1000) {
//   discount = totalBuys * 0.1; // Calculate the discount amount
//   totalPayable = totalBuys - discount; // Calculate the total payable amount after applying the discount
// } else if (totalBuys >= 500) {
//   discount = totalBuys * 0.05; // Calculate the discount amount
//   totalPayable = totalBuys - discount; // Calculate the total payable amount after applying the discount
// } else {
//   discount = 0; // No discount
//   totalPayable = totalBuys; // Total payable is the same as total buys
// }

// console.log("Total Buys:", totalBuys); // Output: Total Buys: 999
// console.log("Discount:", discount); // Output: Discount: 99.9
// console.log("Total Payable:", totalPayable); // Output: Total Payable: 899.1

// // logical operators

// // true && true; // Output: true
// // true && false; // Output: false
// // false && true; // Output: false
// // false && false; // Output: false

// // true || true; // Output: true
// // true || false; // Output: true
// // false || true; // Output: true
// // false || false; // Output: false

// // !true; // Output: false
// // !false; // Output: true

// // example of logical operators in a real-world scenario

// let isWeekend = false; // Example value
// let isHoliday = true; // Example value

// if (isWeekend || isHoliday) {
//   console.log("You can relax!"); // Output: You can relax!
// } else {
//   console.log("Time to work!"); // Output: Time to work!
// }

// // logical and example
// let hasKey = false; // Example value
// let isDoorLocked = true; // Example value

// if (hasKey && isDoorLocked) {
//   console.log("You can open the door!"); // Output: You can open the door!
// } else {
//   console.log("You cannot open the door!"); // Output: You cannot open the door!
// }

// // logical not example
// let isRaining = false; // Example value

// console.log("Is it not raining?", !isRaining); // Output: Is it not raining? false

// // ternary operator

// let age = 25; // Example value

// let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";

// console.log(canVote); // Output: Yes, you can vote!

// // for (let i = 1; i <= 100; i++) {
// //   console.log("I am sorry!", i); // Output: I am sorry! (printed 100 times)
// // }

// // let i = 1;

// // while (i <= 100) {
// //   console.log("I am sorry!!!!!!", i); // Output: I am sorry! (printed 100 times)
// //   i++;
// // }

// let i = 200;

// do {
//   console.log("I am sorry!!!!!!", i); // Output: I am sorry! (printed 100 times)
//   i++;
// } while (i <= 100);

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log("number: ", i);
// }
// let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';

// console.log(answer1);

// let text = "     ABCDEFGHIJKL MNoPQRS,TUVWXYZ     ";

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.trim());

// console.log(text);

// let text2 = "Please visit microsoft!  microsoft";
// let newText = text2.replaceAll("microsoft", "NSDA");

// console.log(newText);

// let firstName = "Rahad";
// let lastName = "Mondal";

// let fullName = firstName.concat(" ", lastName);

// console.log(fullName);

// let text3 = "Hello World, welcome to the universe.";

// console.log(text3.includes("world"));

// let num1 = 10586741;

// let result = num1 / 3;
// // console.log(typeof num1.toString());
// console.log(result.toFixed(3));

// console.log(parseInt("It is nagative number -10"));

// const book1 = {
//   bookName: "javaScript",
//   autorName: "x",
//   publishDate: "15 June2026 ",
//   numberOfPage: 100,
// };

// const book1 = {
//   bookName: "javaScript1",
//   autorName: "xy",
//   publishDate: "15 June2027 ",
//   numberOfPage: 500,
// };

// console.log(book1);

const students = [
  { id: 1, name: "Ayaan Khan", age: 18, grade: "A" },
  { id: 2, name: "Rahim Ahmed", age: 19, grade: "B" },
  { id: 3, name: "Karim Hasan", age: 17, grade: "A" },
  { id: 4, name: "Sakib Hossain", age: 20, grade: "A+" },
  { id: 5, name: "Nafis Islam", age: 18, grade: "B+" },
  { id: 6, name: "Tanvir Rahman", age: 19, grade: "A" },
  { id: 7, name: "Mahin Chowdhury", age: 18, grade: "C+" },
  { id: 8, name: "Jubayer Ali", age: 17, grade: "B" },
  { id: 9, name: "Fahim Uddin", age: 20, grade: "A+" },
  { id: 10, name: "Arif Hossain", age: 18, grade: "B+" },
  { id: 11, name: "Nabil Hasan", age: 19, grade: "A" },
  { id: 12, name: "Mehedi Islam", age: 18, grade: "A+" },
  { id: 13, name: "Rasel Miaa", age: 17, grade: "B" },
  { id: 14, name: "Shakil Ahmed", age: 20, grade: "C" },
  { id: 15, name: "Imran Khan", age: 18, grade: "A" },
  { id: 16, name: "Tuhin Rahman", age: 19, grade: "B+" },
  { id: 17, name: "Siam Hossain", age: 18, grade: "A+" },
  { id: 18, name: "Robin Islam", age: 17, grade: "B" },
  { id: 19, name: "Rifat Ahmed", age: 20, grade: "A" },
  { id: 20, name: "Ashik Ali", age: 18, grade: "C+" },
  { id: 21, name: "Rakib Hasan", age: 19, grade: "B+" },
  { id: 22, name: "Shuvo Roy", age: 18, grade: "A+" },
  { id: 23, name: "Sohel Rana", age: 17, grade: "B" },
  { id: 24, name: "Nayeem Islam", age: 20, grade: "A" },
  { id: 25, name: "Amin Uddin", age: 18, grade: "C" },
  { id: 26, name: "Bappy Ahmed", age: 19, grade: "B+" },
  { id: 27, name: "Emon Hossain", age: 18, grade: "A" },
  { id: 28, name: "Jisan Rahman", age: 17, grade: "A+" },
  { id: 29, name: "Munna Ali", age: 20, grade: "B" },
  { id: 30, name: "Fardin Khan", age: 18, grade: "A" },
  { id: 31, name: "Tamim Hasan", age: 19, grade: "B+" },
  { id: 32, name: "Anik Islam", age: 18, grade: "A+" },
  { id: 33, name: "Adnan Rahman", age: 17, grade: "B" },
  { id: 34, name: "Rony Ahmed", age: 20, grade: "C+" },
  { id: 35, name: "Sabbir Hossain", age: 18, grade: "A" },
  { id: 36, name: "Nahid Islam", age: 19, grade: "A+" },
  { id: 37, name: "Mizan Khan", age: 18, grade: "B+" },
  { id: 38, name: "Asif Ali", age: 17, grade: "A" },
  { id: 39, name: "Sohan Ahmed", age: 20, grade: "B" },
  { id: 40, name: "Farhan Rahman", age: 18, grade: "A+" },
  { id: 41, name: "Morshed Hasan", age: 19, grade: "C" },
  { id: 42, name: "Saif Islam", age: 18, grade: "B+" },
  { id: 43, name: "Rasel Ahmed", age: 17, grade: "A" },
  { id: 44, name: "Riad Hossain", age: 20, grade: "A+" },
  { id: 45, name: "Habib Khan", age: 18, grade: "B" },
  { id: 46, name: "Yasin Ali", age: 19, grade: "A" },
  { id: 47, name: "Noman Rahman", age: 18, grade: "C+" },
  { id: 48, name: "Shafin Ahmed", age: 17, grade: "B+" },
  { id: 49, name: "Zubair Islam", age: 20, grade: "A+" },
  { id: 50, name: "Omar Faruk", age: 18, grade: "A" },
];

let foundedStudent;

for (i = 0; i < students.length; i++) {
  let name = students[i].name;

  if (name === "Rasel Mia") {
    foundedStudent = students[i];
    break;
  } else {
    foundedStudent = null;
  }
}

console.log(foundedStudent);
