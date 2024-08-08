// FUNCTION 1: Welcomer
// Define a function called greeting that takes a name as a parameter and console logs "Hello " + name
function greeting(name){
  console.log(`Hello, ${name}`)
}



// Call the greeting function with your name as the argument
let result = greeting("yariel")

// Prompt the user to enter their name
let user = prompt("enter your name")

// Call the greeting function and pass in the user's name as an argument.
let result2 = greeting(user)



// -------------------------------------------------
// FUNCTION 2: Adder
// Define a function called add that takes two numbers as parameters and returns the sum

function add( number1, number2 ){
let number3 = number1 + number2
return number3 
}


// Call the add function and pass in any two numbers to test. Console log it (either directly or through a variable)! 

let result3 = add(4,5)
console.log(result3)
// Prompt the user to enter one number
let user2 = prompt("enter an number")
// Prompt the user to enter another number
let user3 = prompt("enter an other number")
// Call the add function and pass in the user's numbers. Console log it (either directly or through a variable)! 

let result4 = add(user2,user3)
console.log(result4)

// Notice how the value that printed just put the numbers next to each other instead of adding them. That's because they're both strings!
// Use parseInt() on both of the user's numbers to make them into numbers (you can re-assign existing variables or declare new ones)

user2 = parseInt(user2)
 user3 = parseInt(user3)
// Call the add function with the parsed number values from the user. Console log it and check that the math works correctly!



let result5 = add(user2,user3)
console.log(result5)



// -------------------------------------------------
// FUNCTION 3: Calculator (Extra Credit)
// Define a function called takes in 3 parameters: operation, number1, and number2
// The function should use if/else if/else statements on the operation parameter to perform the correct calculation on the two numbers
// You should support "add", "subtract", "multiple", and "divide" operations




// Test it out with at least 2 different functions calls












