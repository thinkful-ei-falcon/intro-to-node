const { getFortune, getTask } = require("./magic8ball");
const moment = require('moment');
const Joke = require('awesome-dev-jokes');
 
console.log(Joke.getRandomJoke());

let question = process.argv[2];

console.log(`The moment is ${moment().add(7,'days')}`);
console.log(`Your question was: ${question}`);
if (question.toLowerCase().includes("meaning of life") || question.toLowerCase().includes("question of life")) {
  console.log(`Fortune teller says: 42`);
} else {
  console.log(`Fortune teller says: ${getFortune()}`);
}
console.log(`You should ${getTask()}`);
