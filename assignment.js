/*..............Variable Declaration...............*/
const greeting = "hello"; // declaring a constant...
let counter = 10; // declaring a vaeriable counter...
var isComplete = false; // declaring a boolean variable



/*....................data types...................*/
let name = "Jane" //variable with string value...
let age = 28; //integer type variable...
let isStudent = true; //boolean variable...
const items = []; //empty array
const person = {}; //an empty object



/*...............Arithmetic Operations...............*/
// creation of the variables...
const x = 7;
const y = 3;

// peerforming of operations
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

/*................Comparision and Logical Operations...............*/
// creation of variables...
const a = 15;
const b = 20;

// comparison expressions...
/* These variables will store the results of each comparasion,
which are either true or false based on the comparasion*/
let isEqual = (a == b);                //false
let isStrictEqual = (a === b);         //false
let isNotEqual = (a != b);             //true
let isGreaterThan = (a > b);           //false
let isLessThan = (a < b);              //true
let isGreaterThanOrEqual = (a >= b);   //false
let isLessThanOrEqual = (a <= b);      //true


// logical expression...
/* These variables will store the results of each combined condition,
which are either true or false based on the comparasion*/
let bothTrue = (a < b) && (a != b);                     //true
let eitherTrue  = (a > b) || (a == b);                  //false
let notTrue = !(a == b);                                //true
let complexCondition = (a < b) && (a != b) || (a = 15); //true


/*.............Conditional Satements..........*/
function checkEquality(x, y) { // creation of functions...
    if (x === y) { //if statement to check equality of strings...
        console.log("Strings are equal!!");
    }else{
        console.log("Strings are not equal!!");
    }
}

/*............................................... */

const num = 3 // declaring of variable...
if (num > 0) { // if statement to check the positivity...
    console.log("The number is positive.");
}else if(num < 0) {
    console.log("The number is negative.");
}else{
    console.log("The number is zero.");
}




/*....................Loops.....................*/
for(let x = 1; x <= 5; x ++){ // for loop for iteration
    console.log("Iteration: " + x);
}
let n = 5; 
while (n != 0) { // while loop for the iteration...
    console.log("n: " + n);
    n --;
}


/*...............Functions................*/
// Function declaration...
function multiply(x, y){
    let prod = x * y;
    return prod;
}

// Function expression
const divide = (a, b) => {
    return a / b;
}

// Arrow Function
const subtract = (a, b) => a - b;

// Functiion with parameters
function greet(name){
    return "Hello, " + name;
}

// Function with array parameters
function addToArray(myArray, item){
    myArray.push(item);
    return myArray;
}

/*.............Arrays and Objects...........*/
// Array methods....
let colors = ["red", "green", "blue"]; // creation of array...
colors.unshift("yellow"); // add an item to the begining of the array...
colors.pop(); // removal of the last element...
colors.push("purple"); // add item to the end of the array...
colors.shift(); // remove the first element of the array...

// usage of the filter method to to create a new array...
let longColors = colors.filter(colors => colors.length > 4);


/*........Spread Operators........*/
// creating a new array by combining the colors array with a new array...
let moreColors = [...colors, "cyan", "magenta"]
console.log(moreColors);

// Objects Propeeties and methods...
let book = { // create an object with its properties...
    title: "To Kill a Programmer",
    author: "Emmanuel",
    year: 2024,

    // inculcation of method to the object...
    getBookInfo: function() { 
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    }

    
};
console.log(book.getBookInfo());

// destructuring the book object to extract the title and author properties...
let {title, author } = book;
console.log(title);
console.log(author);

// creating a copy of the book object using the spread operator...
let copiedBook = { ...book };

// modifying the copied object's title...
copiedBook.title = "To kill Topins The Programmer"


/*............Array of Objects.............*/
// creation of array that has objects... 
let library = [
    {
        title: "To Kill a Programmer",
        author: "Emmanuel",
        year: 2024
    },
    {
        title: "To Kill a Writer",
        author: "ShallyToppins",
        year: 2034
    },
    {
        title: "To Kill a Reader",
        author: "Tayo",
        year: 2044
    }
];


// usinga a forEach loop to iterate through the array...
library.forEach(book => {
    console.log(book.title);

    // extras...
    console.log(book.author);
    console.log(book.year);
});





