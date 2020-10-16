(function(){
    'use strict';

    function Fila(){

        var itens = [];

        this.insereItemNaFila = function(element){
            //insere item na fila
            itens.push(element);
        }

        this.removeItemDaFila = function(){
            //remove um item da fila
            return itens.shift();
        }

        this.primeiroDaFila = function(){
            //retorna o primeiro elemento da fila
            return itens[0];
        }

        this.filaVazia = function(){
            // retorna se a fila está vazia
            return itens.length === 0;
        }

        this.tamanho = function(){
            //retorna o tamanho da fila
            return itens.length;
        }

        this.imprime = function(){
            console.log(itens.toString());
        }
    }

    var fila = new Fila();

    fila.insereItemNaFila('A');
    fila.insereItemNaFila('B');
    fila.insereItemNaFila('C');
    fila.insereItemNaFila('D');
    fila.insereItemNaFila('E');

    fila.imprime();
    fila.removeItemDaFila();
    fila.removeItemDaFila();

    fila.imprime();

    function FilaDePrioridade(){

        var itens = [];

        function ElementoDaFila(elemento, prioridade){
            this.elemento = elemento;
            this.prioridade = prioridade;
        }

        this.insereItemNaFila = function(elemento, prioridade){
            var elementoFila = new ElementoDaFila(elemento, prioridade);
            var adicionado = false;

            for(var i = 0; i<itens.length; i++){
                if(elementoFila.prioridade < itens[i].prioridade){
                    itens.slice(1,0,elementoFila);
                    adicionado = true;
                    break
                }
            }
            if(!adicionado){
                itens.push(elementoFila);
            }
        }

        this.removeItemDaFila = function(){
            //remove um item da fila
            return itens.shift();
        }

        this.imprime = function(){
            for(var i = 0; i<itens.length; i++){
                console.log('Item:',itens[i].elemento,'prioridade:',itens[i].prioridade);
            }
        }
    }

    var filaPrioridade = new FilaDePrioridade();

    filaPrioridade.insereItemNaFila('A',1);
    filaPrioridade.insereItemNaFila('B',2);
    filaPrioridade.insereItemNaFila('C',3);
    filaPrioridade.insereItemNaFila('D',1);
    filaPrioridade.insereItemNaFila('E',4);

    filaPrioridade.imprime();
    filaPrioridade.removeItemDaFila();
    filaPrioridade.removeItemDaFila();

    filaPrioridade.imprime();

    function batataQuente(listaNomes, numero){
        var fila = new Fila();

        for(var i = 0; i < listaNomes.length; i++){
            fila.insereItemNaFila(listaNomes[i]);
        }

        var eliminado = '';

        while(fila.tamanho() > 1){
            for(var i = 0; i < numero; i++){
                fila.insereItemNaFila(fila.removeItemDaFila());
            }
            eliminado = fila.removeItemDaFila();
            console.log('Eliminado:',eliminado);
        }

        return fila.removeItemDaFila();
    }

    var nomes = ['Saga','Doko','Shion','Shaka','Aiolos','Camus','Shura'];
    var winner = batataQuente(nomes, 10);
    console.log('Cavaleiro mais forte:',winner);
})();