#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculation'); //start
    await sleep();
    rainbowTitle.stop();
    console.log(`\n    _______________________ 
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`);
};
await welcome();

async function askques(){
   const ans = await inquirer
    .prompt([
        {
            type:"list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices:[ "Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2:"
        }
    ])
    .then((answers) => {
     //   console.log(answers);
        if(answers.operator == "Addition")
        {
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if(answers.operator == "Substraction")
        {
            console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if(answers.operator == "Multiplication")
        {
            console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if(answers.operator == "Division"){
            console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
        }
    )
};
//askques();

async function startAgain() {
    do{
        await askques();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart", 
            message: "\nDo you want to continue? Press Y or N\n"
        })
    }while(again.restart == 'Y' || again.restart == 'y' || again.restart == 'yes'|| again.restart == 'YES'|| again.restart == 'Yes')
}
startAgain();