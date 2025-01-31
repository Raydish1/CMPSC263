//function add(num1, num2) {
   // let sum = num1 + num2;
   // return sum;
//}

//arrow function

//const add = (num1, num2) => num1 + num2;

//console.log(add(2, 4).prototype)

//const lst = [1, 2, 3, 45, 6]
//lst.pop()
//const doubleLst = lst.map(val => val * 2)
//console.log(lst)
//console.log(doubleLst)
//try all array methods

let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!"
let isLearningFun = true;
//console.log(score, temperature, greeting, isLearningFun);
const students = {
    name: 'Rayhan',
    age: 19,
    subjects: ['CMPSC', 'STAT', 'CMPEN', 'ANTH']
}
students.isGraduated = "false"
console.log(students)

const primeNumbers = [2, 3, 5, 7, 11]
primeNumbers[1] = 4
console.log(primeNumbers[1])
console.log("Mistake detected")
primeNumbers[1] = 3
console.log(primeNumbers)

let x = 12
let y = 6
console.log("x: " + x)
console.log("y: " + y)
console.log("Addition: " + (x + y))
console.log("Multiplication: " + (x * y))
console.log("Modulus: " + (x % y))
console.log(x > y)
console.log(x < y)
console.log(x == y)
console.log(x & y)
if ((x > y && y > 0) || x < y) {
    console.log("Success")
}
else {
    console.log("Failure")
}

if (score > 50) {
    console.log("Great job!")
}
else {
    console.log("Keep Trying!")
}

for (let i = 0; i < primeNumbers.length; i++) {
    console.log(primeNumbers[i])
}

while (score > 0) {
    score -= 1
    console.log(score)
}

/////////////

function eventCountdown(eventDate) {
    const now = new Date();
    
    const event = new Date(eventDate);
    const timeDiff = event - now;
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    
  
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
  }
  
  const countdownMessage = eventCountdown('January 31, 2025 10:00:00');
  console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024

  // How this works: It makes a variable for the current date and time, and the function uses a given date to set as the event date.
  // Then, it makes a variable for the time difference, which is just subtracting each other The result is in milliseconds.
  // Then each unit of time is defined, starting with getting seconds from the original milliseconds, then going from there
  // The floor function will give round it down to the nearest whole number
  // Then the modulus will get the remainder for each unit of time after days, using the amount in each of the units
  // Then it simply returns a message displaying the time difference neatly
  // Note: The current time is 5 hours ahead for some reason
  
  function swap(a, b, c) {
    let x = a
    a = b
    b = c 
    c = x
    return [a, b, c]
  }
  console.log(swap(4, 5, 6))

  ////////

  function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    let max = 0
    let longest = ''
    for (let i = 0; i < words.length; i++) {
        
        if (words[i].length > max) {
            longest = words[i]
            max = words[i].length
        }
    }
    return longest
  }
  
  // Example usage:
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
  // your function should output the correct longest word.
  
  