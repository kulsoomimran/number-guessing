#! usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    message: "Please guess a number between 1-6: ",
    type: "number",
    name: "guessedNumber",
  },
]);
if (answers.guessedNumber === randomNumber) {
  console.log("CONGRATULATIONS!!! You guessed the right number");
} else {
  console.log("You guessed the wrong number");
}
