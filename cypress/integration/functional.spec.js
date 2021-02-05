/// <reference types="cypress"/>

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test=email]').type('sandrapavan@test.com.br')
        cy.get('[data-test=passwd]').type('123mudar')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it('Should a create an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta Maira')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso!')
        
    })
})