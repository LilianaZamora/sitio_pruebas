describe('Página principal', () => {

    it('Abre la pagina principal', () => {
        cy.visit('http://localhost:5173/');
        cy.url().should('include', 'localhost')
    })


    it('examina el menú de navegación', () => {
        cy.visit('http://localhost:5173/');
        cy.get('.navbar')
    })

    it('examina atributos de imagen', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[alt="imagen opción 1"]')
    })

    it('examina atributos de imagen', () => {
        cy.visit('http://localhost:5173/');
        cy.get('[alt="imagen opción 2"]')
    })

    it('Está presente el inicio de sesión', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Iniciar Sesión')
    })

})