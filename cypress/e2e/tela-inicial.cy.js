/// <reference types ="cypress" />

import telaInicialPage from "../support/pageObjects/tela-inicial.page"



describe('Acessar a página do Todo MVC', () => {
    it('abrir o site', () => {
        cy.visit('https://todomvc.com/examples/react/#/')
        telaInicialPage.inputText()
    })
})