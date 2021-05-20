describe('Ingreso a página', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')            
    })

    it('Se visualiza el titulo', ()=>{
        cy.contains('Phonebook')           
    })

    it('Se puede ver la cabecera de nombres', ()=>{
        cy.contains('Name')           
    })

    it('Se puede ver la cabecera de contactos', ()=>{
        cy.contains('Phone Number')           
    })

    it('Agregar contacto', ()=>{
        cy.get('[name="name"]').type('Turpo')
        cy.get('[name="number"]').type('953732685')
        cy.get('#agregar').click()
    })

    it('Editar contacto', ()=>{
        cy.get('#btnEditar').eq(0).click()
        cy.get('[name="name"]').type('Junior')
        cy.get('[name="number"]').type('123456789')
        cy.get('#agregar').click()
    })

    it('Eliminar contacto', ()=>{
        cy.get('#btnEliminar').eq(0).click()
    })
})