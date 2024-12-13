

npx cypress run --headed

Requisitos
Node.js (v12.0.0 ou superior)
Visual Studio Code

Instale as dependências do projeto:
bash
npm install cypress
npm install cypress-cucumber-preprocessor

O projeto é estruturado da seguinte forma:

├── cypress
│   ├── fixtures
│   ├── e2e
│   │   ├── features
│   │   ├── KeeggoProject
│   │   ├── pages
│   │   │       └── example_steps.js
│   ├── plugins
│   │   └── index.js
│   ├── support
│       ├── commands.js
│       └── index.js
├── node_modules
├── cypress.json
├── package.json
└── README.md
cypress/e2e/features: Contém os arquivos .feature escritos em Gherkin.

cypress/e2e/features/pages: Contém as definições de passos correspondentes.

cypress/plugins/index.js: Arquivo de configuração de plugins do Cypress.

cypress/support: Contém comandos personalizados e configurações de inicialização.

Configuração do Plugin
Adicione o seguinte código ao arquivo cypress/plugins/index.js para configurar o cypress-cucumber-preprocessor:

javascript
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
Executando os Testes
Para executar os testes, utilize o seguinte comando no terminal:

bash
npx cypress open
Isso abrirá a interface do Cypress, onde você pode selecionar e executar os testes.

Adicionando Testes
Crie um arquivo .feature em cypress/integration/features:

gherkin
Feature: Exemplo de Teste

Scenario: Testando exemplo
  Given eu acesso a página inicial
  When eu clico no botão de exemplo
  Then eu vejo a mensagem de sucesso
Crie um arquivo de definições de passos em cypress/integration/features/step_definitions/example_steps.js:

javascript
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps')

Given('eu acesso a página inicial', () => {
  cy.visit('/')
})

When('eu clico no botão de exemplo', () => {
  cy.get('button.exemplo').click()
})

Then('eu vejo a mensagem de sucesso', () => {
  cy.contains('Mensagem de sucesso').should('be.visible')
})
Referências
Cypress Documentation

Cucumber Documentation

Cypress Cucumber Preprocessor

Contribuição
Para contribuir com este projeto, faça um fork do repositório, crie um branch para sua feature ou correção, faça suas alterações e envie um pull request.