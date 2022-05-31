/// <reference types="cypress" />

context("COVID19 Battles", () => {
  beforeEach(() => {
    //cy.visit("http://localhost:8080");
    cy.visit('https://responsivefight.herokuapp.com')  
  });

  it("Register new user", () => {
      cy.intercept("POST", "/api/registeruser", {
        statusCode: 200,
        body: "User created"
      });
  
      cy.get("#rego").click();
      cy.get("#uname").type("test_user");
      cy.get("#pwd").type("test_password");
      cy.get("#psw-repeat").type("test_password");
      cy.get("#signupbtn").click();
      cy.get("#login").should("be.visible");
    });

    it("Mismatching passwords", () => {
      cy.intercept("POST", "/api/registeruser", {
        statusCode: 200,
        body: "User created"
      });
  
      cy.get("#rego").click();
      cy.get("#uname").type("test_user");
      cy.get("#pwd").type("test_password");
      cy.get("#psw-repeat").type("wrong password");
      cy.get("#signupbtn").click();
      cy.get("#popup").should("be.visible");
     
    });
  

    it("Username already existing", () => {
      cy.get("#rego").click();
      cy.get("#uname").type("rmz");
      cy.get("#pwd").type("password");
      cy.get("#psw-repeat").type("password");
      cy.get("#signupbtn").click();
      cy.get("#popup").should("be.visible");
     
    });

});