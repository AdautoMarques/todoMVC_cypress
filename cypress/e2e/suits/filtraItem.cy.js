/// <reference types = 'cypress' />

import telaInicialPage from "../../support/pageObjects/tela-inicial.page"

describe('Deve filtrar item', () => {

    beforeEach(() => {
        cy.visit('/')

        let lista = ['Adauto', 'Lucas', 'Amom']

        lista.forEach(function(item){
            telaInicialPage.inputText(item)
            telaInicialPage.concluirItem()

        })
    })

    it('deve filtrar itens ativos ', () => {
        telaInicialPage.filtroItem('Active')
        
    })

    it.skip('Deve filtrar itens concluidos', () => {
        telaInicialPage.filtroItem('Completed')

    })
})