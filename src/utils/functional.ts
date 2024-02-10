// * Constructor Function
// function Vacation(destination, length) {
//   this.destination = destination;
//   this.length = length;
// }

// Vacation.prototype.print = function () {
//   const prt = `${this.destination} | ${this.length} days!`;
//   return prt;
// };

// export const maui = new Vacation("maui", 33);

// maui.print();

// * Class
// interface VacationProps {
//   destination: string;
//   length: number;
// }

// interface ExpeditionProps extends VacationProps {
//   gear: string[];
// }

// class Vacation {
//   readonly destination: string;
//   readonly length: number;

//   constructor({ destination, length }: VacationProps) {
//     this.destination = destination;
//     this.length = length;
//   }

//   print() {
//     console.log(`${this.destination} will take ${this.length} days.`);
//   }
// }

// export const maui = new Vacation({ destination: "Tehran", length: 23 });

// class Expedition extends Vacation {
//   readonly gear: string[];

//   constructor({ destination, length, gear }: ExpeditionProps) {
//     super({ destination, length }); // Passing an object with VacationProps
//     this.gear = gear;
//   }

//   print() {
//     super.print();
//     console.log(`Bring your ${this.gear.join(" and your ")}.`);
//   }
// }

// export const trip = new Expedition({
//   destination: "Vietnam",
//   length: 44,
//   gear: ["Camera", "Umbrella", "Sun Glasses"],
// });

// * In CommonJS, we can export the print and log functions as an object
// const printMsg = (msg: string) => {
//   log(msg, new Date());
// };

// const log = (message: string, timestamp: Date) => {
//   console.log(`${timestamp.toString()}: ${message}`);
// };

// printMsg("Print Hello World!");
// log("Log Hello World!", new Date());

// * Functional Programming
// ? What It Means to Be Functional

// ! In JavaScript, functions are variables
// const log = function (message) {
//   console.log(message);
// };
// log("In JavaScript, functions are variables");
// ! The arrow function syntax makes that much easier
// const log = (message) => {
//   console.log(message);
// };

// ! Since functions are variables, we can add them to objects
// const obj = {
//   message: "Hello!!!",
//   log(message: string) {
//     console.log(message);
//   },
// };

// obj.log(obj.message);

//! We can also add functions to arrays in JavaScript
// const messages: (string | ((msg: string) => void))[] = [
//   "Hello",
//   (msg) => console.log(msg),
//   "World",
//   (msg) => console.log(msg),
// ];

// Type guard to check if the element is a function
// function isFunction(value: any): value is (msg: string) => void {
//   return typeof value === "function";
// }

// for (let i = 0; i < messages.length; i++) {
//   const currentMessage = messages[i];

//   if (typeof currentMessage === "string") {
//     // Handle string case
//     console.log(currentMessage);
//   } else if (isFunction(currentMessage)) {
//     // Type assertion to let TypeScript know it's a function
//     const func = currentMessage as (msg: string) => void;
//     func(messages[i - 1] as string);
//   }
// }
// ! Functions can be sent to other functions as arguments, just like other variables
// const insideFn = (logger: (msg: string) => void) => {
//   logger("Hello Logger");
// };

// insideFn((msg) => console.log(msg));

//  ! They can also be returned from other functions
// const createScream = function (logger: (msg: string) => void) {
//   return function (msg: string) {
//     logger(msg.toUpperCase() + "!!!");
//   };
// };

// const scream = createScream((msg) => {
//   console.log(msg);
// });

// scream("I love JS");
// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");

// ? The last two examples were of higher-order functions: functions that either take or return other functions.
// ! We could describe the same createScream higher-order function with arrows
// const createScream = (logger) => (message) => {
//   logger(message.toUpperCase() + "!!!");
// };
// const scream = createScream((msg) => {
//   console.log(msg);
// });

// scream("I love JS");
// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");

// * Imperative Versus Declarative
// Functional programming is a part of a larger programming paradigm:
// declarative programming. Declarative programming is a style of
// programming where applications are structured in a way that prioritizes
// describing what should happen over defining how it should happen.

// ! First, let’s examine an imperative approach to this task
// const string = "Restaurants in Hanalei";
// let urlFriendly = "";
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === " ") {
//     urlFriendly += "-";
//   } else {
//     urlFriendly += string[i];
//   }
// }

// console.log(urlFriendly);

// ! Now let’s look at a declarative approach to the same problem
// const string = "Restaurants in Hanalei";

// const urlFriendly = string.replace(/ /g, "-");

// console.log(urlFriendly);

// * Functional Concepts

// ! Immutability
// To mutate is to change, so to be immutable is to be unchangeable. In a
// functional program, data is immutable. It never changes.

// let color_lawn = {
//   title: "lawn",
//   color: "#00FF00",
//   rating: 0,
// };

// const rateColor = (color, rating) => {
//   color.rating = rating;
//   return color;
// };

// console.log(rateColor(color_lawn, 5).rating);
// console.log(color_lawn.rating);

// ? we used Object.assign to change the color rating.
// const rateColor = (color, rating) => {
//   return Object.assign({}, color, { rating: rating });
// };

// console.log(rateColor(color_lawn, 5).rating);
// console.log(color_lawn.rating);

// ? We can write the same function using an arrow function along with the object spread operator.
// const rateColor = (color, rating) => ({
//   ...color,
//   rating,
// });

// console.log(rateColor(color_lawn, 5).rating);
// console.log(color_lawn.rating);

// ? PUSH
// let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

// console.log(list);

// const addColor = (title, color) => {
//   color.push({ title: title });
//   return color;
// };

// console.log(addColor("Glam Green", list));
// console.log(list);

// ? However, Array.push is not an immutable function.
// ? Array.concat
// const addColor = (title, array) => array.concat({ title });

// console.log(addColor("Glam Green", list));
// console.log(list);

// ? You can also use the spread operator to concatenate arrays in the same way it can be used to copy objects.

// const addColor = (title, array) => [...array, { title }];

// console.log(addColor("Glam Green", list));
// console.log(list);

// ! Pure Functions
// A pure function is a function that returns a value that’s computed based
// on its arguments. Pure functions take at least one argument and always
// return a value or another function. They do not cause side effects, set
// global variables, or change anything about application state. They treat
// their arguments as immutable data.

// ? In order to understand pure functions, let’s first take a look at an impure function:

// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false,
// };
// function selfEducate() {
//   frederick.canRead = true;
//   frederick.canWrite = true;
//   return frederick;
// }
// selfEducate();
// console.log(frederick);

// ? Once the selfEducate function is invoked, something about the “world” has changed. It causes side effects

// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false,
// };
// const selfEducate = (person) => {
//   person.canRead = true;
//   person.canWrite = true;
//   return person;
// };
// console.log(selfEducate(frederick));
// console.log(frederick);

// ? Finally, this version of selfEducate is a pure function.

// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false,
// };
// const selfEducate = (person) => ({
//   ...person,
//   canRead: true,
//   canWrite: true,
// });
// console.log(selfEducate(frederick));
// console.log(frederick);

// Pure functions are another core concept of functional programming.
// They will make your life much easier because they will not affect your
// application’s state. When writing functions, try to follow these three
// rules:
// 1. The function should take in at least one argument.
// 2. The function should return a value or another function.
// 3. The function should not change or mutate any of its arguments.

// ! Data Transformations
// How does anything change in an application if the data is immutable?
// Functional programming is all about transforming data from one form to
// another. We’ll produce transformed copies using functions. These
// functions make our code less imperative and thus reduce complexity.

// There are two core functions that you must master in order to be proficient with functional JavaScript: Array.map and Array.reduce.

// const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

// We can get a comma-delimited list of these and some other strings by using the Array.join function

// console.log(schools.join(", "));

// If we wanted to create a function that creates a new array of the schools
// that begin with the letter “W,” we could use the Array.filter method

// const w3schools = schools.filter((school) => school[0] === "W");

// console.log(w3schools);

// const cutSchool = (cut, list) => list.filter((school) => school !== cut);

// console.log(cutSchool("Washington & Liberty", schools).join(", "));

// console.log(schools.join("\n"));

// Another array function that is essential to functional programming is
// Array.map. Instead of a predicate, the Array.map method takes a
// function as its argument. This function will be invoked once for every
// item in the array, and whatever it returns will be added to the new
// array

// const highSchool = schools.map((school) => `${school} High School`);

// console.log(highSchool.join("\n"));

// If you need to create a pure function that changes one object in an array
// of objects, map can be used for this, too. In the following example, we’ll
// change the school with the name of “Stratford” to “HB Woodlawn”
// without mutating the schools array:

// let schools = [
//   { name: "Yorktown" },
//   { name: "Stratford" },
//   { name: "Washington & Liberty" },
//   { name: "Wakefield" },
// ];

// const editName = (oldName, name, arr) =>
//   arr.map((item) => {
//     if (item.name === oldName) {
//       return {
//         ...item,
//         name,
//       };
//     } else {
//       return item;
//     }
//   });

// Here’s an example of the same function
// using a shorthand if/else statement:

// const editName = (oldName, name, arr) =>
//   arr.map((item) => (item.name === oldName ? { ...item, name } : item));

// let updatedSchools = editName("Stratford", "HB Woodlawn", schools);
// console.log(updatedSchools[1]);
// console.log(updatedSchools);
// console.log(schools[1]);

// If you need to transform an array into an object, you can use Array.map
// in conjunction with Object.keys. Object.keys is a method that can be
// used to return an array of keys from an object.

// const schools = {
//   Yorktown: 10,
//   "Washington & Liberty": 2,
//   Wakefield: 5,
// };

// const schoolArray = Object.keys(schools).map((key) => ({
//   name: key,
//   wins: schools[key],
// }));

// console.log(schoolArray);

// The reduce and reduceRight functions can be used to transform an
// array into any value, including a number, string, boolean, object, or even
// a function.

// const ages = [21, 18, 42, 40, 64, 63, 34];

// const maxAge = ages.reduce((max, age) => {
//   console.log(`${age} > ${max} = ${age > max}`);
//   if (age > max) {
//     return age;
//   } else {
//     return max;
//   }
// }, 0);

// console.log("maxAge", maxAge);

// we can calculate the max value
// in any array of numbers with the following syntax:

// const max = ages.reduce((max, value) => (value > max ? value : max), 0);

// console.log("max", max);

// Array.reduceRight works the same way as Array.reduce;
// the difference is that it starts reducing from the end of the array
// rather than the beginning.

// Sometimes we need to transform an array into an object. The following
// example uses reduce to transform an array that contains colors into a
// hash:

// const colors = [
//   {
//     id: "xekare",
//     title: "rad red",
//     rating: 3,
//   },
//   {
//     id: "jbwsof",
//     title: "big blue",
//     rating: 2,
//   },
//   {
//     id: "prigbj",
//     title: "grizzly grey",
//     rating: 5,
//   },
//   {
//     id: "ryhbhsl",
//     title: "banana",
//     rating: 1,
//   },
// ];

// const hashColors = colors.reduce((hash, { id, title, rating }) => {
//   hash[id] = { title, rating };
//   return hash;
// }, {});

// console.log(hashColors);

// We can even transform arrays into completely different arrays using
// reduce. Consider reducing an array with multiple instances of the same
// value to an array of unique values. The reduce method can be used to
// accomplish this task:

// const colors = ["red", "red", "green", "blue", "green"];

// const uniqueColors = colors.reduce(
//   (unique, color) =>
//     unique.indexOf(color) !== -1 ? unique : [...unique, color],
//   []
// );

// console.log(uniqueColors);

// ! Higher-Order Functions
// Higher-order functions are
// functions that can manipulate other functions. They can take functions
// in as arguments or return functions or both.

// const invokeIf = (condition, fnTrue, fnFalse) =>
//   condition ? fnTrue() : fnFalse();
// const showWelcome = () => console.log("Welcome!!!");
// const showUnauthorized = () => console.log("Unauthorized!!!");

// invokeIf(true, showWelcome, showUnauthorized);

// invokeIf(false, showWelcome, showUnauthorized);

// Currying is a functional technique that involves the use of higher-order
// functions.

// ! Recursion
// Recursion is a technique that involves creating functions that recall
// themselves. Often, when faced with a challenge that involves a loop, a
// recursive function can be used instead.

// const countDown = (value, fn) => {
//   fn(value);

//   return value > 0 ? countDown(value - 1, fn) : value;
// };

// countDown(10, (value) => console.log(value));

// Recursion is a pattern that works particularly well with asynchronous
// processes. Functions can recall themselves when they’re ready, like when
// the data is available or when a timer has finished.

// const countDown = (value, fn, delay = 1000) => {
//   fn(value);
//   return value > 0
//     ? setTimeout(() => countDown(value - 1, fn, delay), delay)
//     : delay;
// };

// const log = (msg) => console.log(msg);

// countDown(10, log);

// Recursion is a good technique for searching data structures. You can use
// recursion to iterate through subfolders until a folder that contains only
// files is identified. You can also use recursion to iterate though the HTML
// DOM until you find an element that does not contain any children. In the
// next example, we’ll use recursion to iterate deeply into an object to
// retrieve a nested value:

// const dan = {
//   type: "person",
//   data: {
//     gender: "male",
//     info: {
//       id: 22,
//       fullname: {
//         first: "Dan",
//         last: "Deacon",
//       },
//     },
//   },
// };

// const deepPick = (fields, object = {}) => {
//   const [first, ...remaining] = fields.split(".");
//   return remaining.length
//     ? deepPick(remaining.join("."), object[first])
//     : object[first];
// };

// console.log(deepPick("type", dan));
// console.log(deepPick("data.info.fullname.first", dan));

// ! Composition
// Functional programs break up their logic into small, pure functions that
// are focused on specific tasks. Eventually, you’ll need to put these smaller
// functions together. Specifically, you may need to combine them, call
// them in series or parallel, or compose them into larger functions until
// you eventually have an application.

// When it comes to composition, there are a number of different
// implementations, patterns, and techniques. One that you may be familiar
// with is chaining. In JavaScript, functions can be chained together using
// dot notation to act on the return value of the previous function.

// const template = "hh:mm:ss tt";
// const clockTime = template
//   .replace("hh", "03")
//   .replace("mm", "33")
//   .replace("ss", "33")
//   .replace("tt", "PM");
// console.log(clockTime);

// The compose function is a higher-order function. It takes functions as
// arguments and returns a single value:

// const compose =
//   (...fns) =>
//   (arg) =>
//     fns.reduce((composed, f) => f(composed), arg);

// * Our challenge is to build a ticking clock. The clock needs to display
// * hours, minutes, seconds, and time of day in civilian time. Each field
// * must always have double digits, meaning leading zeros need to be
// * applied to single-digit values like 1 or 2. The clock must also tick and
// * change the display every second.
// First, let’s review an imperative solution for the clock:

// Log Clock Time every Second
// setInterval(logClockTime, 1000);
// function logClockTime() {
//   // Get Time string as civilian time
//   let time = getClockTime();
//   // Clear the Console and log the time
//   console.clear();
//   console.log(time);
// }
// function getClockTime() {
//   // Get the Current Time
//   let date = new Date();
//   let time = "";
//   // Serialize clock time
//   let time = {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//     ampm: "AM",
//   };
//   // Convert to civilian time
//   if (time.hours == 12) {
//     time.ampm = "PM";
//   } else if (time.hours > 12) {
//     time.ampm = "PM";
//     time.hours -= 12;
//   }
//   // Prepend a 0 on the hours to make double digits
//   if (time.hours < 10) {
//     time.hours = "0" + time.hours;
//   }
//   // prepend a 0 on the minutes to make double digits
//   if (time.minutes < 10) {
//     time.minutes = "0" + time.minutes;
//   }
//   // prepend a 0 on the seconds to make double digits
//   if (time.seconds < 10) {
//     time.seconds = "0" + time.seconds;
//   }
//   // Format the clock time as a string "hh:mm:ss tt"
//   return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
// }

// * Our goal will be to break the application logic up into smaller parts:
// * functions. Each function will be focused on a single task, and we’ll
// * compose them into larger functions that we can use to create the clock.

// const oneSecond = () => 1000;
// const getCurrentTime = () => new Date();
// const clear = () => console.clear();
// const log = (msg) => console.log(msg);

// const serializeClockTime = (date) => ({
//   hours: date.getHours(),
//   minutes: date.getMinutes(),
//   seconds: date.getSeconds(),
// });

// const civilianHours = (clockTime) => ({
//   ...clockTime,
//   hours:
//     clockTime.hours > 12
//       ? clockTime.hours - 12
//       : clockTime.hours < 10
//       ? "0" + clockTime.hours
//       : clockTime.hours,
// });

// const appendAMPM = (clockTime) => ({
//   ...clockTime,
//   ampm: clockTime.hours >= 12 ? "PM" : "AM",
// });

// const display = (target) => (time) => target(time);

// const formatClock = (format) => (time) =>
//   format
//     .replace("hh", time.hours)
//     .replace("mm", time.minutes)
//     .replace("ss", time.seconds)
//     .replace("tt", time.ampm);

// const prependZero = (key) => (clockTime) => ({
//   ...clockTime,
//   key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key],
// });

// const convertToCivilianTime = (clockTime) =>
//   compose(appendAMPM, civilianHours)(clockTime);

// const doubleDigits = (civilianTime) =>
//   compose(
//     prependZero("hours"),
//     prependZero("minutes"),
//     prependZero("seconds")
//   )(civilianTime);

// const startTicking = () =>
//   setInterval(
//     compose(
//       clear,
//       getCurrentTime,
//       serializeClockTime,
//       convertToCivilianTime,
//       doubleDigits,
//       formatClock("hh:mm:ss tt"),
//       display(log)
//     ),
//     oneSecond()
//   );

// startTicking();

// This declarative version of the clock achieves the same results as the
// imperative version. However, there quite a few benefits to this approach.
// First, all of these functions are easily testable and reusable. They can be
// used in future clocks or other digital displays. Also, this program is
// easily scalable. There are no side effects. There are no global variables
// outside of functions themselves. There could still be bugs, but they’ll be
// easier to find.
