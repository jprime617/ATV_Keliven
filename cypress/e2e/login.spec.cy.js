// login.spec.js
describe('Simulação de Login', () => {
  it('Deve fazer login e redirecionar para o dashboard', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#username').type('usuario_teste');
    cy.get('#password').type('senha_teste');
    cy.get('#loginButton').click();
    cy.url().should('include', '/dashboard');
  });
});
