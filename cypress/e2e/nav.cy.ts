describe("Navigation", () => {
  it("should navigate to products page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="products"]').click();

    cy.url().should("include", "/products");
  });

  it("should navigate to about page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="about"]').click();

    cy.url().should("include", "/about");
  });

  it("should navigate to javascript page from dropdown navigation", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-cy="dropDownContent"]').click();

    cy.wait(1000);

    cy.get('a[href*="javascript"]').click();

    cy.url().should("include", "/javascript");
  });
});
