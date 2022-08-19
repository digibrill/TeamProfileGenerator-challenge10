const inquirer = require('inquirer');
//const menu = require('inquirer-menu');
const fs = require('fs');
const util = require('util');

let level = 0;

const showMenu = () => {
  const questions = [
    {
      type: "list",
      name: "action",
      message: "Do you want to add another employee?",
      choices: [
        { name: "Add Engineer", value: "getQuiz('engineer')" },
        { name: "Add Intern", value: "getQuiz('intern')" },
        { name: "Save All Positions", value: "quit"}
      ]
    }
  ];
  return inquirer.prompt(questions);
};

showMenu();

function getQuiz(startAt) {
  if (startAt === "manager") {
    let questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'managerName',
    },  
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'managerId',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: 'What is your office number?',
      name: 'managerOfficeNumber',
    }];
  } else if(startAt === "engineer") {
      let questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'engineerName',
    },  
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'engineerId',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'engineerEmail',
    },
    {
      type: 'input',
      message: 'What is your Github?',
      name: 'engineerGithub',
    }];
  }else if (startAt === "intern") {
      let questions = [
    {
      type: 'input',
      message: 'What is your name?',
      name: 'internName',
    },  
    {
      type: 'input',
      message: 'What is your employee ID?',
      name: 'internId',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'internEmail',
    },
    {
      type: 'input',
      message: 'Where do you go the school?',
      name: 'internSchool',
    }];
  }
  return questions;
}
/*  else{};
    inquirer
    .prompt([
      
    ])
  .then((response) =>{
      if(addEngineer){
        inquirer.prompt([
        
        {
          type: 'confirm',
          message: 'Do you want to add an engineer?',
          name: 'addEngineer',
        },
        ])
      }
  });



    /*if(response){
      fs.writeFile('index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Acme Corp's Employee page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link href="./Assets/styles/normalize.css" rel="stylesheet" />
    <link href="./Assets/styles/styles.css" rel="stylesheet" />
</head>
<body>
    <header>
            <h1>
            ${response.name}, Programmer Extraordinaire
            </h1>
            <h2>
            Residing at ${response.location}
            </h2>
        <nav id="topnav">
            More About Me: 
            ${response.bio}
            My LinkedIn ${response.linkedin} tells you a lot.<br>
            My GitHub ${response.github} tells you everything.
        </nav>
    </header>
    
</body>
<script src="./Assets/scripts/main.js"></script>
</html>`,(err) => err ? console.error(err) : console.log('Success!')
)
);
}
}
/**
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer?s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern?s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/



  /**
   * validation to ensure that user input provided is in the proper expected format.
   */