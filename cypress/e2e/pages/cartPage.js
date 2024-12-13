class CartPage {
    validateProductInCart(productName) {
      cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding').should('contain', "HP PAVILION X360 - 11T TOUC...");
    }
    validatePriceOfProduct(productName) {
      cy.get('.roboto-medium.totalValue.ng-binding').should('contain', "$319.99");
    }
  }
  
  export default new CartPage();