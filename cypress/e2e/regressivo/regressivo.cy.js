/// <reference types = 'cypress' />

import telaInicialPage from "../../support/pageObjects/tela-inicial.page";

describe('Regressivo', () => {

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Validar a area label de input de dados', () => {
            telaInicialPage.validarInput('What needs to be done?')
        })

    })

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Deve adicionar itens na lista', () => {
            let lista = ['Adauto', 'Amom', 'Lucas']
            lista.forEach(function(item){
                telaInicialPage.inputText(item)
            })
            
            telaInicialPage.validarContador(3)

        })


    })

    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
    
            let lista = ['Adauto', 'Lucas', 'Amom']
    
            lista.forEach(function(item){
                telaInicialPage.inputText(item)
            })
        })

        it('Concluir um item da lista', () => {
            telaInicialPage.concluirItem()
            telaInicialPage.validarContador(2)
            
        })

    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
    
            let lista = ['Adauto', 'Lucas', 'Amom']
    
            lista.forEach(function(item){
                telaInicialPage.inputText(item)
                telaInicialPage.concluirItem()
    
            })
        })

        it('validar a lista de itens ativos',() => {
            telaInicialPage.filtroItem('Active')
            telaInicialPage.validarSizeTodo(2)
        })

        it('Validar a lista de itens completos', () => {
            telaInicialPage.filtroItem('Completed')
            telaInicialPage.validarSizeTodo(1)
        })

    })

    context('Validar a remoção de item', () => {
        beforeEach(() => {
            cy.visit('/')
    
            let lista = ['Adauto', 'Lucas', 'Amom']
    
            lista.forEach(function(item){
                telaInicialPage.inputText(item)
              
    
            })
    
        })

        it('validar a remoção de item', () => {
            telaInicialPage.deletarItem() 

        })
    
    })
})