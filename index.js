const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, 'output');

const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template');

const teamMembers = [];

const idArr = [];

function appMenu() {
  function createManager() {
    console.log('Please build your team');

    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Input Manager name.'
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the Manager's employee ID#?"
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Input Manager email address.'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager office number.'
      }
    ])
      .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        teamMembers.push(manager);
        idArr.push(answers.managerId);

        createTeam();
      });
  };

  function createTeam() {
    inquirer.prompt({
      type: 'list',
      name: 'createTeam',
      message: 'Would you like to add additional engineers, or interns?',
      choices: [
        'Engineer',
        'Intern',
        "I don't want to add any more team members."
      ]
    })
      .then(userChoice => {
        switch (userChoice.createTeam) {
          case 'Engineer':
            addEngineer();
            break;

          case 'Intern':
            addIntern();
            break;

          default:
            buildTeam();
        }
      })
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Input engineer name.'
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's employee ID#?"
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Input engineer email address.'
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter engineer's github."
      }
    ])
      .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        teamMembers.push(engineer);
        idArr.push(answers.engineerId);
        createTeam();
      });
  };

  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Input Intern name.'
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's employee ID#?"
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Input Intern email address.'
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter intern's school."
      }
    ])
      .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        teamMembers.push(intern);
        idArr.push(answers.internId);
        createTeam();
      });
  };

  function buildTeam() {
    (!fs.existsSync(OUTPUT_DIR)) ? fs.mkdirSync(OUTPUT_DIR) : fs.writeFileSync(outputPath, render(teamMembers), 'UTF-8');
  }

  createManager();
};

appMenu();
