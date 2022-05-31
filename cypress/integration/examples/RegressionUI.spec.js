/// <reference types="cypress" />

context("COVID19 Battles", () => {
    beforeEach(() => {
      //cy.visit("http://localhost:8080");
      cy.visit('https://responsivefight.herokuapp.com') 
      cy.get("#login").click() 
    });
  
    it("correct login",() => {
      //cy.login('testuser','password')
    
      cy.get('#worrior_username').type("testuser");
      cy.get('#worrior_pwd').type("password");
      cy.get("#warrior").click();
      cy.get('#start').should('be.visible');
    })
    
    it("empty password",() => {
      //cy.login('testuser',' ')
      cy.get('#worrior_username').type("testuser");
      cy.get('#worrior_pwd').type(" ");
      cy.get("#warrior").click();
      cy.get('#login_popup').should('be.visible');
    })
  
    it("invalid user id password combination",() => {
      //cy.login('testuser','invalidpwd')
      cy.get('#worrior_username').type("testuser");
      cy.get('#worrior_pwd').type(" invalidpassword");
      cy.get("#warrior").click();
      cy.get('#login_popup').should('be.visible');
    })
  
  /*
    it("Choose a challenge", () => {
      cy.login('testuser','password')
      cy.get('#start').click()
      cy.get("#world_img").should("be.visible");
      cy.get("#office_img").should("be.visible");
      cy.get("#office").should("have.attr", "href", "office");
      cy.get("#bus_img").should("be.visible");
      cy.get("#bus").should("have.attr", "href", "bus");
      cy.get("#restaurant_img").should("be.visible");
      cy.get("#restaurant").should("have.attr", "href", "restaurant");  
      
    });
  
    it("Select bus", () => { 
      cy.login('testuser','password')
      cy.get('#start').click()
      cy.get("#bus").click();  
      cy.get("#bus_intro_modal").should("be.visible");
      cy.get("#bus_timer_start").click();
      cy.get("#bus_intro_modal").should("be.hidden");
      //check all elements are visible on Page
      cy.get("#img_bus").should("be.visible");
      cy.get("#bus_progress").should("be.visible");
      cy.get("#bus_question_1").should("be.visible").contains("?");
      cy.get("#bus_answer_1").should("be.visible");
      cy.get("#bus_answer_2").should("be.visible");
      //End - check all elements are visible on Pag 
    });
  
    it("Select News", () => { 
      cy.login('testuser','password')
      cy.get('#start').click()
      cy.get("#news").click();  
      cy.get("#introModal").should("be.visible");
      cy.get("#start").click();
      cy.get("#introModal").should("be.hidden");
    });
  
    it("Select Restaurant", () => { 
      cy.login('testuser','password')
      cy.get('#start').click()
      cy.get("#restaurant").click();  
      cy.get("#restaurant_intro_modal").should("be.visible");
      cy.get("#restaurant_timer_start").click();
      cy.get("#restaurant_intro_modal").should("be.hidden");
    });
  
    it("Select Office", () => { 
      cy.login('testuser','password')
      cy.get('#start').click()
      cy.get("#office").click();  
      cy.get("#off_intro_modal").should("be.visible");
      cy.get("#start").click();
      cy.get("#off_intro_modal").should("be.hidden");
    });*/
  
    it("Verify UI", () => {
    cy.get('#worrior_username').type("testuser");
    cy.get('#worrior_pwd').type("password");
    cy.get("#warrior").click();
    cy.get('#login_title').should('be.visible');
    cy.get("#start").click()
    cy.get('#welcome_text').should('be.visible').contains("Welcome");
    //cy.get('#quarantine_area_img').should("be.visible");
    cy.get('#news').contains("Enter at your own risk?");
    //cy.get('#world_img').should('be.visible');
  
    });
  
  
  });
  
      
    
  
    
    
     
    
    