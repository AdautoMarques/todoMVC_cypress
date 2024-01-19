/// <reference types = 'cypress' />

import telaInicialPage from "../../support/pageObjects/tela-inicial.page";

describe('Adicionar item na lista ', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Adcionar um item na lista', () => {
        telaInicialPage.inputText('dado1')
    })

    it('Adicionar mais de um item a lista', () => {
        let todoItens = ['dado2', 'dado3', 'dado4', 'dado5']

        todoItens.forEach(function(item){
            telaInicialPage.inputText(item)
        })
    })
});