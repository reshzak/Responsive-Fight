/// <reference types="cypress" />

context("COVID19 Battles", () => {
    beforeEach(() => {
      //cy.visit("http://localhost:8080");
      cy.visit('https://responsivefight.herokuapp.com') 
      cy.get("#login").click()  
    });

it("Complete a Challenge", () => {

    cy.get('#worrior_username').type("testuser");
    cy.get('#worrior_pwd').type("password");
    cy.get("#warrior").click();
    cy.get('#login_title').should('be.visible');
    cy.get("#start").click()
    
    cy.get("#news").click();  
    cy.get("#start").click();

    //cy.intercept("GET", "/api/fetchquestion?*");
    //cy.intercept("POST", "/api/checkanswer");

    
    cy.contains("Continue").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("Research").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("Move").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("Stock up").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("superhero").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();  

    cy.contains("government").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();  

    
    cy.contains("discarded").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

  
    cy.contains("report").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    cy.contains("keep distance").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    cy.contains("Mask").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    cy.contains("super hero").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    cy.contains("superhero").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    cy.contains("Yes").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click(); 

    //check leaderboard

    cy.contains("testuser1").should('be.visible');


  });
});