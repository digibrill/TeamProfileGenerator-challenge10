const inquirer = require('inquirer');
//const menu = require('inquirer-menu');
const fs = require('fs');
const util = require('util');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let positions = [];

const startQuiz =  async () => {
  inquirer.prompt([
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
    },
  {
    name: "add_employee",
    type: "confirm",
    message: "Do you want to add another employee? (No, to quit and save)",
  },
  {
    name: "choose_position",
        type: "list",
        message: "Which type of employee?",
        choices: [ "Engineer", "Intern"],
        when (answers){
          return answers.add_employee === true;
        }
  }
  
  ]).then((managerAnswers) => {
    //console.log(answers.managerName);
    if(!managerAnswers.add_employee){
      let mgr = new Manager(managerAnswers.managerName, managerAnswers.managerEmail, managerAnswers.managerId, managerAnswers.managerOfficeNumber,'Manager');
      positions.push(mgr);
      continueQuiz('exit');
    }else if(managerAnswers.managerName){
      let mgr = new Manager(managerAnswers.managerName, managerAnswers.managerEmail, managerAnswers.managerId, managerAnswers.managerOfficeNumber,'Manager');
      positions.push(mgr);
      continueQuiz(managerAnswers.choose_position);
    }else{}
});

const askForContinue = async () => {
  inquirer.prompt([
    {
      name: "add_employee",
      type: "confirm",
      message: "Do you want to add another employee? (No, to quit and save)",
    },
    {
      name: "choose_position",
      type: "list",
      message: "Which type of employee?",
      choices: [ "Engineer", "Intern"],
      when (answers){
        return answers.add_employee;
      }
    }
  ]).then((answers) => {
    if(!answers.add_employee){

      continueQuiz('exit');
    }else{
      continueQuiz(answers.choose_position);
    }
  });
};

const continueQuiz = async (start) => {
  if(start === 'Engineer'){
    inquirer.prompt([
    {
                type: 'input',
                message: 'What is the engineer\'s name?',
                name: 'engineerName',
    },  
    {
                type: 'input',
                message: 'What is the engineer\'s employee ID?',
                name: 'engineerId',
    },
    {
                type: 'input',
                message: 'What is the engineer\'s email address?',
                name: 'engineerEmail',
    },
    {
                type: 'input',
                message: 'What is the engineer\'s Github?',
                name: 'engineerGithub',
    }
    ]).then((engineerAnswers) => {
      const egr = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerEmail, engineerAnswers.engineerId, engineerAnswers.engineerGithub,'Engineer');
      positions.push(egr);
      askForContinue();
    });
  }else if(start === 'Intern'){
    inquirer.prompt([
    {
                type: 'input',
                message: 'What is the intern\'s name?',
                name: 'internName',
    },
    {
                type: 'input',
                message: 'What is the intern\'s employee ID?',
                name: 'internId',
    },
    {
                type: 'input',
                message: 'What is the intern\'s email address?',
                name: 'internEmail',
    },
    {
                type: 'input',
                message: 'Where does the intern go to school?',
                name: 'internSchool',
    }
    ]).then((internAnswers) => {
        const int = new Intern(internAnswers.internName, internAnswers.internEmail, internAnswers.internId, internAnswers.internSchool,'Intern');
        positions.push(int);
        askForContinue();
    });
  }else if (start === "exit"){
      let employeeCards = '';
      for(let i=0; i < positions.length; i++){
        if(positions[i].name){
          let newCard = `<div class="card"><div class="card-body"><div class="card-title">${positions[i].title}</div>
          <div><span class="card-title">${positions[i].name}</span><br>
          <span class="card-subtitle">${positions[i].id}</span><br>
          <span class="empEmail"><a href="mailto:${positions[i].email}" target="_blank" class="card-link">${positions[i].email}</a></span><br>`;
          if(positions[i].officeNumber){
            newCard += `<span class="empOfficeNumber" class="card-link">Office Number: ${positions[i].officeNumber}</span></div></div></div>`;
          }else if(positions[i].gitHub){
            newCard += `<span class="engGithub">Engineer's GitHub: <a href="${positions[i].gitHub}" class="card-link" target="_blank">${positions[i].gitHub}</a></span></div></div></div>`;
          }else if(positions[i].school){
            newCard += `<span class="intSchool" class="card-link">Intern's School: ${positions[i].school}</span></div></div></div>`;
          }
          employeeCards += newCard;
        }
      }
      fs.writeFile(`index.html`, `<!DOCTYPE html>
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
              <header class="jumbotron">
                <h1>
                Our Great Team!
                </h1>
              </header>
              <main id="cardDiv">
                <h2>More About Us:</h2>
                ${employeeCards}
              </main>
              <footer>
                An Unassociated Press Publication
              </footer>
            </body>
            </html>`, (err) =>
            err ? console.error(err) : console.log('Team members saved!'));
      };
  }
}

startQuiz();



//startMenu();
/**
EXTRA CREDIT validation to ensure that user input provided is in the proper expected format.
*/