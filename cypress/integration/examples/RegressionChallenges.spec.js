/// <reference types="cypress" />

context("COVID19 Battles", () => {
    beforeEach(() => {
      //cy.visit("http://localhost:8080");
      cy.visit('https://responsivefight.herokuapp.com')  
    });

it("Complete a Challenge", () => {
    cy.login('testuser1','password')
    cy.get('#start').click()
    cy.get("#bus").click();  
    cy.get("#bus_timer_start").click();
    cy.intercept("GET", "/api/fetchquestion?*");
    cy.intercept("POST", "/api/checkanswer");

    //Bus challenge:
    cy.get("#img_bus").should("be.visible");
    cy.get("#bus_progress").should("be.visible");
    cy.get("#bus_question_1").should("be.visible").contains("?");
    cy.get("#bus_answer_1").should("be.visible");
    cy.get("#bus_answer_2").should("be.visible");
    cy.get("#bus_incorrect_modal").should("not.be.visible");
    cy.contains("superhero").click();
    cy.get("#bus_correct_modal").should("be.visible");
    cy.get("#close_correct_modal_btn").click();

    //Restaurant Challenge:
    cy.get("#restaurant_timer_start").click();
    cy.get("#restaurant_intro_modal").should("be.hidden");
    
    cy.get("#img_restaurant").should("be.visible");
    cy.get("#restaurant_bar").should("be.visible");
    cy.get("#restaurant_question_1").should("be.visible").contains("?");
    cy.get("#restaurant_answer_1").should("be.visible");
    cy.get("#restaurant_answer_2").should("be.visible");

    cy.contains("super hero").click();
    cy.get("#restaurant_correct_modal").should("be.visible");
    cy.get("#close_correct_modal_btn").click();


    //Office Challenge:
    cy.get("#start").click();

    cy.get("#off_intro_modal").should("be.hidden");
    cy.get("#img_office").should("be.visible");
    cy.get("#myProgress").should("be.visible");
    cy.get("#office_question_1").should("be.visible").contains("?");
    cy.get("#office_answer_1").should("be.visible");
    cy.get("#office_answer_2").should("be.visible");


    cy.contains("superhero").click();
    cy.get("#off_correct_modal").should("be.visible");
    cy.get("#close_modal_btn_1").click();

    cy.get("#bus_timer_start").click();
    cy.contains("superhero").click();

    //check leaderboard

    cy.get("#leaderboard_link").click();


  });
});