// //1.

// let array = [5, 25, 89, 120, 36];

// array.push("javascript", "python");
// array.unshift("html", "css");

// // console.log(array.length);

// array.shift(0);
// array.pop(array.length - 1);

// console.log(array);

//2.

// let array = ["orange", "banana", "peach"];

// // console.log(array.length);

// array.push("apple", "ananas");
// array.unshift("watermelon");

// // console.log(array.length);

// array.splice(3, 1, "mango");
// // console.log(array);

// array.shift(0);
// array.pop(array.length - 1);
// console.log(array.length);

//3.

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map((item) => item / 3);
// console.log(newArray);

//4.

// let array = [
//   "hello",
//   125,
//   "javascript",
//   "html",
//   43,
//   "css",
//   "scss",
//   "bootstrap",
//   88,
//   59,
//   "python",
// ];

// let newArray = array.filter((item) => typeof item == "number");
// console.log(newArray);

//5.

// let languages = ["html", "css", "javascript", "python", "php"];

// let newLanguages = languages.filter((item) => item.length > 3);

// console.log(newLanguages);

//6. ვერ გავაკეთე

// let item = [12, "google", 32, null, "yahoo", 25];
// let stringArray = [];

// let newItem = item
//   .map(function (x, index) {
//     if (typeof x == "number") {
//       return x * x;
//     } else if (typeof x == "string") {
//       stringArray.push(x.toUpperCase());

//       return "";
//     } else {
//       return x;
//     }
//   })
//   .filter((el) => typeof el !== "string");
// console.log(newItem);
// console.log(stringArray);

//7.

// let words = ["Madrid", "Rome", "Milan", "Berlin"];

// let newWords = words.filter((item) => item.includes("m") || item.includes("M"));

// console.log(newWords);

//8.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let arrayFull = arr1.concat(arr2);
// let arrayFull2 = arrayFull.concat(arr3);
// console.log(arrayFull2);

//9. ვერ გავაკეთე

// let arr = [1, 2, 3, 4, 5];
// let arrSum = 0;
// arr.forEach((item) => (arrSum += item));

// console.log(arrSum);

//10.

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let newNumbers = numbers.filter((item) => item > 0);

// console.log(newNumbers);

//11.

// let arr = [-1, -2, -3, 4].some((item) => item > 0);

// console.log(arr);

//12.

// let array = [23, 45, 32, 5, 87, 7, 3, 98];

// let minArray = array.sort((x, y) => y - x)[array.length - 1];

// console.log(minArray);

//13.

// let array = [1, 2, 3, 4, 5];

// array.splice(3, 0, "a", "b", "c");

// console.log(array);
