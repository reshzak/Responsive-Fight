/// <reference types="cypress" />

context("COVID19 Battles", () => {
    beforeEach(() => {
      //cy.visit("http://localhost:8080");
      cy.visit('https://responsivefight.herokuapp.com')  
      cy.get("#login").click()  
    });

it("Exit on choosing wrong answer", () => {


    cy.get('#worrior_username').type("testuser");
    cy.get('#worrior_pwd').type("password");
    cy.get("#warrior").click();
    cy.get('#login_title').should('be.visible');
    cy.get("#start").click()
    
    cy.get("#news").click();  
    cy.get("#start").click();

    

    cy.intercept("GET", "/api/fetchquestion?*");
    cy.intercept("POST", "/api/checkanswer");

    
    cy.contains("Continue").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("Research").click();
    cy.get("#correctModal").should("be.visible");
    cy.get("#continue").click();

    cy.contains("superhero punch").click();
    cy.get("#incorrectModal").should("be.visible");
    cy.get('#close_modal_btn_2').click();
    cy.title().should('eq', 'COVID-19 THE GAME');


  });
});