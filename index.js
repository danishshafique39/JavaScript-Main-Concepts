//variables  let , const

let name = 'John';
let age = 25;
let isMarried = false;

console.log(name, age, isMarried);

// let name = 'John'; 

// // SyntaxError: Identifier 'name' has already been declared when we use let keyword
// // let keyword does not allow to redeclare the variable

const country = 'USA';
console.log(country);

// const country = 'UK';
// // SyntaxError: Identifier 'country' has already been declared
// // const keyword does not allow to redeclare or initialize the variable

// Data Types

// String
let city = 'New York';
console.log(typeof city); // Output: string

// Number
let score = 100;
console.log(typeof score); // Output: number

// Boolean
let isAvailable = true;
console.log(typeof isAvailable); // Output: boolean

// Undefined
let undefinedVar;
console.log(typeof undefinedVar); // Output: undefined

// Null
let nullVar = null;
console.log(typeof nullVar); // Output: object (this is a known JavaScript quirk)

// Object
let individual = {
    firstName: 'Jane',
    lastName: 'Doe'
};
console.log(typeof individual); // Output: object

// Array
let colors = ['red', 'green', 'blue'];
console.log(typeof colors); // Output: object

// Function
let greet = function() {
    return 'Hello';
};
console.log(typeof greet); // Output: function




// Operators

// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0

// Comparison Operators
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a == b); // Output: false
console.log(a != b); // Output: true
console.log(a === 10); // Output: true
console.log(a !== 10); // Output: false

// Logical Operators
let x = true;
let y = false;
console.log(x && y); // Output: false
console.log(x || y); // Output: true
console.log(!x); // Output: false

// Assignment Operators
let c = 20;
c += 10; // c = c + 10
console.log(c); // Output: 30
c -= 5; // c = c - 5
console.log(c); // Output: 25

// Ternary Operator
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes




// Conditional Statements

// if statement
if (age > 18) {
    console.log('You are an adult.');
}

// if-else statement
if (age < 18) {
    console.log('You are a minor.');
} else {
    console.log('You are an adult.');
}

// if-else if-else statement
if (age < 13) {
    console.log('You are a child.');
} else if (age >= 13 && age < 20) {
    console.log('You are a teenager.');
} else {
    console.log('You are an adult.');
}

// switch statement
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Start of the work week.');
        break;
    case 'Friday':
        console.log('End of the work week.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Midweek day.');
}


// Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log('Count:', count);
    count++;
}

// do-while loop
let num = 0;
do {
    console.log('Number:', num);
    num++;
} while (num < 2);

// for...of loop (for arrays)
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
    console.log('Fruit:', fruit);
}

// for...in loop (for objects)
let car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}



// Functions

// Function declaration
function add(a, b) {
    return a + b;
}
console.log('Sum:', add(5, 3));

// Function expression
const multiply = function (a, b) {
    return a * b;
};
console.log('Product:', multiply(4, 2));

// Arrow function
const subtract = (a, b) => a - b;
console.log('Difference:', subtract(10, 6));



// Arrays

// Adding elements
fruits.push('orange');
console.log('Fruits after push:', fruits);

// Removing elements
fruits.pop();
console.log('Fruits after pop:', fruits);

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});



// Objects

// Adding properties
car.color = 'red';
console.log('Car with color:', car);

// Removing properties
delete car.year;
console.log('Car after removing year:', car);

// Accessing properties
console.log('Car brand:', car.brand);

// Object methods
let person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log('Full Name:', person.fullName());



// DOM Manipulation

// // Selecting elements
// const title = document.querySelector('h1');
// console.log('Title:', title.textContent);

// // Modifying content
// //title.textContent = 'DOM';

// // Adding a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph.';
// document.body.appendChild(newParagraph);

// // Removing an element
// const oldParagraph = document.querySelector('p');
// if (oldParagraph) {
//     oldParagraph.remove();
// }

// // Modifying styles
// title.style.color = 'blue';
// title.style.fontSize = '24px';

// // Adding a class
// title.classList.add('highlight');

// // Removing a class
// title.classList.remove('highlight');

// // Toggling a class
// title.classList.toggle('highlight');




// Events

title.addEventListener('click', () => {
    alert('Title clicked!');
});






// Error Handling

 try {
     let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error('Division by zero is not allowed.');
    }
 } catch (error) {
   console.error('Error:', error.message);
 } finally {
     console.log('Error handling complete.');
}





// Callback

 function fetchData(callback) {
   setTimeout(() => {
        callback('Data fetched successfully!');
      }, 1000);
}

 fetchData((message) => {
    console.log(message);
 });



// Promises

// function fetchDataPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Simulate success or failure
//             if (success) {
//                 resolve('Data fetched successfully!');
//             } else {
//                 reject('Failed to fetch data.');
//             }
//         }, 1000);
//     });
// }

// fetchDataPromise()
//     .then((message) => {
//         console.log('Promise resolved:', message);
//     })
//     .catch((error) => {
//         console.error('Promise rejected:', error);
//     });



    // Async/Await

     async function fetchDataAsync() {
         try {
             const message = await fetchDataPromise();
             console.log('Async/Await resolved:', message);
         } catch (error) {
             console.error('Async/Await rejected:', error);
         }
     }

     fetchDataAsync();