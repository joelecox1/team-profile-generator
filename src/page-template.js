const generateTeam = team => {
  const generateManager = manager => {
    return `
    <div class="card shadow employee-card">
      <div class="card-header bg-primary text-light">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
  };

  const generateEngineer = engineer => {
    return `
    <div class="card shadow employee-card">
      <div class="card-header bg-primary text-light">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `
  };

  const generateIntern = intern => {
    return `
    <div class="card shadow employee-card">
      <div class="card-header bg-primary text-light">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
    .join('')
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')
  );

  html.push(team
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
  );

  return html.join('');
};

module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
  </head>
  
  <body>
    <header class="bg-danger text-light text-center h-300">
      <h1 class="h1">My Team</h1>
    </header>
  
    <section class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          ${generateTeam(team)}
        </div>
      </div>
  
    </section>
    
  </body>
  
  </html>
  `
};