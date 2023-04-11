class Login
{
    setEmail(email)
    {
        cy.get('[data-cy="login-email"]').type(email);
    }
    setPassword(password)
    {
        cy.get('[data-cy="login-password"]').type(password);
    }
    clickSubmit()
    {
        cy.get('[data-cy="login"]').click();
    }
    verifyLogin()
    {
        cy.get('.TuiSideBarLink_selectedLink__Ejwh_').should('have.text', 'Dashboard')
    }
}

export default Login;
