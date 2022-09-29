/// <reference types="Cypress" />
describe('First Test Suite', ()=> {

    // before(() => {
    //     cy.fixture('data').then((data)=> {
    //         this.data=data
    //     })
    // })

    it('My First Test Case', ()=> {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        // using index selecting the child
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        // Using the text driven data by each method
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text()
            if(vegText.includes('Capsicum')) {
                cy.wrap($el).find('button').click();
            }
            else {
                cy.log('Item not found');
            }
        })
        cy.get('.brand').then((logo)=>{
            cy.log(logo.text()).should('have.css', 'font-size').and('eq', '25px');
        })


    })
})
