// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generatePage = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has created!")
        }
    })
}; 

// TODO: Create a function to initialize app

// Function call to initialize app
init();
