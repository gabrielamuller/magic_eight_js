/*In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/

let userName = '';
userName ? console.log(userName) : console.log('Hello!');

let userQuestion = 'Will the weather be good tomorrow?'
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0) {
  console.log('It is certain');
} else if (randomNumber === 1) {
    console.log('It is decidedly so');
} else if (randomNumber === 2) {
    console.log('Reply hazy try again'
);
} else if (randomNumber === 3) {
    console.log('Cannot predict now');
} else if (randomNumber === 4) {
    console.log('Do not count on it');
} else if (randomNumber === 5) {
    console.log('My sources say no');
} else if (randomNumber === 6) {
    console.log('Outlook not so good');
} else {
    console.log('Signs point to yes');
}