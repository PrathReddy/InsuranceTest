/// <reference types="Cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given('I access the Website', ()=> {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php');
})

When('I enter the credentials', ()=> {
    cy.fixture('login.json').then(user =>{
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
Then('click on the Login button and verify Login state', ()=> {
    cy.get('input[type="submit"]').click();
})