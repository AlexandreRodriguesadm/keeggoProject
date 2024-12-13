class HomePage {
    visit() {
      cy.visit('https://advantageonlineshopping.com/#/');
      cy.viewport(1920, 1080);
    }
  
    searchForProduct(product) {
      cy.get('[id="menuSearch"]').click();
      cy.wait(3000); 
      cy.get('#autoComplete').type("laptop");
    }
  
    selectCategory(category) {
      cy.contains('label.roboto-light.ng-binding', "laptops").click();
    }
    clickLoginIcon()  {
      cy.get('#menuUserLink').click()
    }
    fillForm()  {
      cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type("Stormye")
      cy.get('[a-hint="Password"] > .inputContainer').type("Alfajor1")
      cy.get('#sign_in_btn').click()
      cy.wait(3000)

    }
    validateLogin()   {
      cy.get('#menuUserLink').should('contain', "Stormye")
      
    }
  }
  
  export default new HomePage();