(function(){
    'use strict';

    function Stack(){
        var itens = [];

        this.push = function(element){
            // adiciona um novo item a pilha
            itens.push(element);
        }

        this.pop = function(){
            //remove elemento do topo da pilha
            return itens.pop();
        }

        this.peek = function(){
            // retorno o elemento no topo da pilha
            return itens[itens.length - 1]
        }

        this.isEmpty = function(){
            // retorna se a pilha está vazia
            return itens.length === 0;
        }

        this.clear = function(){
            // limpa a pilha
            itens = [];
        }

        this.size = function(){
            // retorna o tamanho da pilha
            return itens.length;
        }

        this.print = function(){
            // imprime a pilha
            console.log(itens.toString());
        }
    }

    var pilha = new Stack();
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    pilha.push(5);

    pilha.print();

    function decimalParaBinario(decNumber){
        var restStack = [];
        var rest;
        var binaryString = '';

        while(decNumber > 0){
            rest = Math.floor(decNumber % 2);
            restStack.push(rest);
            decNumber = Math.floor(decNumber / 2);
        }

        while(restStack.length>0){
            binaryString += restStack.pop().toString();
        }

        return binaryString;
    }

    console.log('Binário de 25:',decimalParaBinario(25));
    console.log('Binário e 23:',decimalParaBinario(23));

    function baseConverter(decNumber, base){
        var restStack = [];
        var rest;
        var baseString = '';
        var digits = '0123456789ABCDEF';

        while(decNumber > 0){
            rest = Math.floor(decNumber % base);
            restStack.push(rest);
            decNumber = Math.floor(decNumber / base);
        }

        while(restStack.length>0){
            baseString += digits[restStack.pop()];
        }

        return baseString;
    }

    console.log('Binário de 25:',baseConverter(25,2));
    console.log('Binário e 23:',baseConverter(123,16));
})();