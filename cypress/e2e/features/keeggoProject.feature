Feature: Funcionalidade de Compras.

  Scenario: Adicionar um produto ao carrinho e validar

    Given que eu visitei a página do site
    When eu procuro pelo produto 'laptop'
    And eu clico na categoria 'laptops'
    And eu seleciono o produto 'HP Pavilion x360 - 11t Touch Laptop'
    And eu adiciono o produto ao carrinho
    Then o produto 'HP Pavilion x360 - 11t Touch Laptop' deve estar no carrinho

  Scenario: Adicionar um produto ao carrinho e validar valor do produto

    Given que eu visitei a página do site
    When eu procuro pelo produto 'laptop'
    And eu clico na categoria 'laptops'
    And eu seleciono o produto 'HP Pavilion x360 - 11t Touch Laptop'
    And eu adiciono o produto ao carrinho
    Then o produto 'HP Pavilion x360 - 11t Touch Laptop' deve estar no carrinho
    And devo validar o valor final dos produtos

  Scenario: Login com Sucesso
    Given que eu visitei a página do site
    When clico em Login
    And preencho os dados corretamente e clico em Login
    Then  devo validar de o login foi realizado com sucesso


      