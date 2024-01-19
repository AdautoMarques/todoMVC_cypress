/// <reference types = 'cypress' />

import telaInicialPage from "../../support/pageObjects/tela-inicial.page"

describe('Deve deletar item da lista', () => {

    beforeEach(() => {
        cy.visit('/')

        let lista = ['Adauto', 'Lucas', 'Amom']

        lista.forEach(function(item){
            telaInicialPage.inputText(item)
          

        })

    })

    it('deletar um item da lista', () => {
       telaInicialPage.deletarItem()
       telaInicialPage.validarSizeTodo(2)
    })

  
})