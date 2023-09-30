describe("Navigation", () => {
  it("should navigate to products page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="products"]').click();

    cy.url().should("include", "/products");
  });
});
