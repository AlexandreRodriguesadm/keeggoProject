class ProductPage {
    selectProduct(productName) {
      cy.contains('.productName.ng-binding', "HP Pavilion x360 - 11t Touch Laptop").click();
    }
  
    addToCart() {
      cy.get('.fixedBtn > .roboto-medium').click();
    }
  
    goToCheckout() {
      cy.get('#checkOutPopUp').click();
    }
  }
  
  export default new ProductPage();