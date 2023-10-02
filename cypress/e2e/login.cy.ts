describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("check fields", () => {
    cy.get(".username").should("exist");
    cy.get(".password").should("exist");
    cy.get(".btn-submit").should("exist");
  });

  it("check correct logins", () => {
    cy.get(".username").type("admin").should("have.value", "admin");
    cy.get(".password").type("admin").should("have.value", "admin");

    cy.get(".btn-submit").click();
    cy.wait(0.5);

    cy.get(".message").then(($span) => {
      const idText = $span.text();
      expect(idText).to.equal("Logged in");
    });
  });

  it("check wrong logins", () => {
    cy.wait(1000);
    cy.get(".username").type("wrong");
    cy.get(".password").type("wrong");

    cy.get(".btn-submit").click();
    cy.wait(0.5);

    cy.get(".message").then(($span) => {
      const idText = $span.text();
      expect(idText).to.equal("Logged in");
    });
  });
});
