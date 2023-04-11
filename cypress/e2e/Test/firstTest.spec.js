/// <reference types="cypress" />
import Login from "../../../PageObjects/Login";
describe('Our first suite',  ()=> {

    beforeEach(() => {
        cy.visit('/')
    })

    // it('Login', () => {
    //   // cy.visit('https://deploy.taastests.com/auth/login')
    //   cy.get('[data-cy="login-email"]').type('admin@taastests.com')
    //   cy.get('[data-cy="login-password"]').type('taas123#{enter}!')
    //   // cy.hash().should('eq', '#/')
    //   cy.get('[data-cy="login"]').click()
    // })

    //using pom
    it.only('LoginTest', ()=>{
        cy.visit('/')

        const ln=new Login();
        ln.setEmail("admin@taastests.com")
        ln.setPassword("taas123!")
        ln.clickSubmit();
        ln.verifyLogin();
    })

});
