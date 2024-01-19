
const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluir = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial {

    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    validarInput(texto){
        cy.get(elem.inputToDo).should('have.attr', 'placeholder').and('include', texto)
    }
    
    concluirItem() {
        cy.get(concluir.inputCirculo).first().click()
        
    }

    filtroItem(menu){
        cy.get(filtroItem.filtro).contains(menu).and('be.visible').click()
    }

    deletarItem(){
       cy.get(concluir.listaItens).first().find('button').invoke('show').click()
    }

    validarContador(numero){
        cy.get(filtroItem.contador).should('have.text', `${numero} items left!`)
    }
    
    validarSizeTodo(numero){
        cy.get(concluir.validarListaItem).should('have.length', numero)

    }

}

export default new telaInicial()