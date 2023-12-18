const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = ({ firstname, location, Github, Linkedin }) => (
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <header class="p-5 mb-4 header bg-light">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${firstname}</h1>
        <p class="lead">I am from ${location}.</p>
        <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${Github}</li>
          <li class="list-group-item">LinkedIn: ${Linkedin}</li>
        </ul>
      </div>
    </header>
  </body>
  </html>`
);
    



const portfolioQuestions = [
    {
      type: 'input',
      name: 'firstname',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
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
  



  inquirer.prompt(portfolioQuestions)
  .then((answers) => {
    const htmlContent = generateHTML(answers);
    fs.writeFileSync('output.html', htmlContent);
    console.log('HTML file has been Generated');
  })
  .catch((error) => console.error('error:', error));
