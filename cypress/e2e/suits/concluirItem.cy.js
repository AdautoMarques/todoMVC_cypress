/// <reference types = 'cypress' />
import telaInicialPage from "../../support/pageObjects/tela-inicial.page"


describe('concluir item', () => {

    beforeEach(() => {
        cy.visit('/')

        let lista = ['Adauto', 'Lucas', 'Amom']

        lista.forEach(function(item){
            telaInicialPage.inputText(item)
        })
    })

    it('Deve concluir item', () => {
        telaInicialPage.concluirItem()
    })
})