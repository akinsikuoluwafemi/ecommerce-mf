describe('My First E2E Test', () => {
  it('Should add an item to the cart', () => {
    
  cy.visit("http://localhost:3000/");
  cy.get("#showlogin").click();
  cy.get("#loginbtn").click();
  cy.get("#addtocart_3").click();
  cy.get("#showcart").click();
  cy.get("#addtocart_3").click();
  cy.get("#showcart_span").click();
  cy.get("div:nth-child(1) > a > img").click();
  cy.get("#showcart").click();
  cy.get(".bg-red-900").click();
  cy.get("#showcart").click();
  cy.get("a:nth-child(1)").click();
    cy.get("#cart").click();
    cy.get("#grand_total").should("exist"); // Make sure the element is available
  cy.get("#clearcart").click();
  cy.get("#showcart").click();
  cy.get("#showcart").click();
  cy.get("a:nth-child(1)").click();

  })
})
