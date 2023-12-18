const inquirer = require('inquirer');
const fs = require('fs');




const portfolioQuestions = [
    {
      type: 'input',
      name: 'Name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'Location',
      message: 'In what city do you reside in?',
    },
    {
      type: 'input',
      name: 'Hobby',
      message: "What is your favorite hobby",
    },
    {
      type: 'input',
      name: 'Food',
      message: 'What is your favorite food? Include details as needed.',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github Name?'
    },
    {
      type: 'input',
      name: 'Linkedin',
      message: 'What is yopur Linkedin Profile link?'
    }
  ];
  


