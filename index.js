#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let b = true;
while (b) {
    let a = await inquirer.prompt([
        {
            name: "list",
            type: "input",
            message: "What do you want to add into your Todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more into Todos",
            default: "false",
        },
    ]);
    todo.push(a.list);
    b = a.addmore;
    console.log(`Your Todos : ${todo}`);
}
