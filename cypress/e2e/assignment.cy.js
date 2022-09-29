/// <reference types="Cypress" />


describe('Assignment Test Suite', ()=> {

//     before(function() {
//         cy.fixture('example').then(function(userData) {
// this.userData=userData
//         })
//     })

    it('Login Test case', () => {
        cy.visit('https://demo.guru99.com/insurance/v1/index.php');
        cy.fixture('login.json').then(user =>{
        cy.get('#email').type(user.email);
        cy.get('#password').type(user.password);
        })
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.get('input[type="submit"]').click();
    })

    it('Request Quotation Test case', () => {
        cy.get('#newquote').click();
        cy.get('select[name="0"]').select('3');
        cy.get('#quotation_windscreenrepair_t').check();
        cy.fixture('login.json').then(user =>{
        cy.get('#quotation_incidents').type(user.incidents);
        cy.get('#quotation_vehicle_attributes_registration').type(user.Registration);
        cy.get('#quotation_vehicle_attributes_mileage').type(user.mileage);
        cy.get('#quotation_vehicle_attributes_value').type(user.Estimatedvalue);
        cy.get('#quotation_vehicle_attributes_parkinglocation').select('Garage');
        cy.get('#quotation_vehicle_attributes_policystart_1i').select('2020');
        cy.get('#quotation_vehicle_attributes_policystart_2i').select('8');
        cy.get('#quotation_vehicle_attributes_policystart_3i').select('17');
        cy.get('input[value="Save Quotation"]').click();
        })
    })

    it('Retrieve Quotation Test case', ()=> {
        cy.url('https://demo.guru99.com/insurance/v1/header.php').go('back');
        cy.get('#retrieve').click();
        cy.get('input[size="25"]').type('14461');
        cy.get('#getquote').click();
        cy.url('https://demo.guru99.com/insurance/v1/header.php').go('back');
    })

    it('Edit Profile test case', () => {
        cy.get('#editprofile').click();
        cy.fixture('profile.json').then(data =>{
        cy.get('#user_title').select('Mrs');
        cy.get('#user_surname').type(data.Surname);
        cy.get('#user_firstname').type(data.Firstname);
        cy.get('#user_phone').type(data.Phone);
        cy.get('#user_address_attributes_street').type(data.Street);
        cy.get('#user_address_attributes_city').type(data.City);
        cy.get('#user_address_attributes_county').type(data.County);
        cy.get('#user_address_attributes_postcode').type(data.Postcode);
        cy.get('input[value="Update User"]').click();
    })

    })

    it('profile Test case', ()=> {
        cy.get('#profile').click();
    })

    it('Logout Test case', () => {
        cy.get('input[value="Log out"]').click();
    })
})