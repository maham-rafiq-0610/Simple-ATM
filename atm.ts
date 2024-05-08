#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 3455;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
if (pinAnswer.pin === myPin) {
  console.log("your pin is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select options",
      type: "list",
      choices: ["Withdraw", "Fast cash", "Check balance"],
    },
  ]);

  // if user select widraw
  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The remaining balance is ${balance}`);
    } else {
      console.log(`You have Insufficiant balance`);
    }
  } else if (operationAns.operation === "Fast cash") {
    let FastcashAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "3000", "5000", "15000"],
      },
    ]);
    if (FastcashAns.amount <= myBalance) {
      let balance2 = myBalance - FastcashAns.amount;
      console.log(`The remaining balance is ${balance2}`);
    } else {
      console.log(`You have unsufficient amount`);
    }
  } else if (operationAns.operation === "Check balance") {
    console.log(myBalance);
  }
} else {
  console.log("Your pin is wrong");
}
