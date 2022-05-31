/// <reference types="cypress" />

context("COVID19 Battles", () => {
    beforeEach(() => {
      //cy.visit("http://localhost:8080");
      cy.visit('https://responsivefight.herokuapp.com')  
    });

it("Complete a Challenge", () => {
    cy.login('testuser1','password')
    cy.get('#start').click()
    cy.get("#quarantine_area_img").should("be.visible");
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