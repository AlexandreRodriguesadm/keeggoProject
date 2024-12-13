/* global Given, And, When, Then */


import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';
// import { Given, When, Then } from "cypress-cucumber-preprocessor";


Given("que eu visitei a página do site", () => {
  HomePage.visit();
});

When ("eu procuro pelo produto 'laptop'", () => {
  HomePage.searchForProduct();
});

    
And ("eu clico na categoria 'laptops'", () => {
  HomePage.selectCategory();
});

And ("eu seleciono o produto 'HP Pavilion x360 - 11t Touch Laptop'", () => {
  ProductPage.selectProduct();
});

And ("eu adiciono o produto ao carrinho", () => {
  ProductPage.addToCart();
  ProductPage.goToCheckout();
});

Then ("o produto 'HP Pavilion x360 - 11t Touch Laptop' deve estar no carrinho", () => {
  CartPage.validateProductInCart();
});

And ("devo validar o valor final dos produtos",  ()  =>  {
  CartPage.validatePriceOfProduct();
});

When ("clico em Login", ()  =>  {
  HomePage.clickLoginIcon();
});


And ("preencho os dados corretamente e clico em Login", ()  =>  {
  HomePage.fillForm();
});


Then ("devo validar de o login foi realizado com sucesso",  ()  =>  {
  HomePage.validateLogin();
});
