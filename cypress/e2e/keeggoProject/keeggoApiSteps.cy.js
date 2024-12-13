const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('the user has valid login credentials', () => {
  cy.wrap({
    email: 'beltrano@qa.com.br',
    password: 'teste'
  }).as('userCredentials');
});

When('the user sends a login request', function() {
  cy.get('@userCredentials').then((credentials) => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        email: credentials.email,
        password: credentials.password
      }
    }).as('loginResponse');
  });
});

Then('the user should receive a successful response', function() {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('message', 'Login realizado com sucesso');
  });
});

Given('the user wants to list all users', () => {
});

When('the user sends a request to list users', () => {
  cy.request({
    method: 'GET',
    url: 'https://serverest.dev/usuarios',
    headers: {
      'accept': 'application/json'
    }
  }).as('listUsersResponse');
});

Then('the user should receive a successful response with a list of users', function() {
  cy.get('@listUsersResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('usuarios'); 
  });
});

function generateRandomName() {
  const firstNames = ["Fulano", "Beltrano", "Ciclano", "João", "Maria"];
  const lastNames = ["da Silva", "Pereira", "Costa", "Oliveira", "Santos"];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function generateRandomEmail() {
  const domains = ["qa.com.br", "teste.com", "email.com"];
  const username = Math.random().toString(36).substring(2, 11);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

Given('the user wants to create a new user', () => {
  cy.wrap({
    nome: generateRandomName(),
    email: generateRandomEmail(),
    password: 'teste',
    administrador: 'true'
  }).as('userDetails');
});

When('the user sends a request to create a user', function() {
  cy.get('@userDetails').then((userDetails) => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        nome: userDetails.nome,
        email: userDetails.email,
        password: userDetails.password,
        administrador: userDetails.administrador
      }
    }).as('createUserResponse');
  });
});

Then('the user should receive a successful response and the user is created', function() {
  cy.get('@createUserResponse').then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
  });
});

Given('the user wants to get a specific user', () => {
  cy.wrap({
    userId: '0uxuPY0cbmQhpEz1'
  }).as('userDetails');
});

When('the user sends a request to get the user', function() {
  cy.get('@userDetails').then((userDetails) => {
    cy.request({
      method: 'GET',
      url: `https://serverest.dev/usuarios/${userDetails.userId}`,
      headers: {
        'accept': 'application/json'
      }
    }).as('getUserResponse');
  });
});

Then('the user should receive a successful response with the user details', function() {
  cy.get('@getUserResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('nome'); 
  });
});
