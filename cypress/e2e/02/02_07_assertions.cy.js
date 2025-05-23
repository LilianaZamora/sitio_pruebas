describe('Página principal', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('Abre la pagina principal', () => {
        cy.url().should('include', 'localhost')
    })

    it('Está presente el menu de navegación', () => {
        cy.get('.navbar')
            .should('exist')
            .and('be.visible')
    })

    it('Examina atributos de imagen', () => {
        cy.get('#imagen01')
            .should('have.attr', 'alt', 'imagen opción 1')
    })

    it('Está presente el inicio de sesión', () => {
        cy.contains('Iniciar Sesión')
            .should('have.attr', 'href')
            .and('include', '/login')
    })

    it('Está presente el botón de opción A', () => {
        cy.get('a.btn').contains('opción A')
            .should('exist')
            .and('have.class', 'btn btn-primary')
    })
})