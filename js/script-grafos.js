(function(){
    'use strict';
    function Dictionary(){
        var items = {};

        this.set = function(key, value){
            items[key] = value;
        }

        this.delete = function(key){
            if(this.has(key)){
                delete items[key];
                return true;
            }
            
            return false;
        }

        this.has = function(key){
            return items.hasOwnProperty(key);
        }

        this.get = function(key){
            return this.has(key) ? items[key] : undefined;
        }

        this.clear = function(){
            items = {};
        }

        this.size = function(){
            return Object.keys(items).length;
        }

        this.keys = function(){
            return Object.keys(items);
        }

        this.values = function(){
            var values = [];
            var keys = Object.keys(items);

            for(var i = 0; i< keys.length;i++){
                values.push(items[keys[i]]);
            }

            return values;
        }
    }

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

    function Graph(){
        var vertices = [];
        var adjList = new Dictionary();

        this.addVertex = function(v){
            vertices.push(v);
            adjList.set(v, []);
        }

        this.addEdge = function(v, w){
            adjList.get(v).push(w);
            adjList.get(w).push(v);
        }

        this.toString = function(){
            var s = '';
            for(var i = 0; i < vertices.length; i++){
                s += vertices[i] + ' -> ';
                var neighbors = adjList.get(vertices[i]);
                for(var j = 0; j < neighbors.length; j++){
                    s += neighbors[j] + ' ';
                }

                s += '\n';
            }

            return s;
        }

        var initializeColor = function(){
            var color = [];
            for(var i = 0; i < vertices.length; i++){
                color[vertices[i]] = 'white';
            }

            return color;
        }

        this.bfs = function(v, callback){
            var color = initializeColor();
            var queue = new Fila();
            queue.insereItemNaFila(v);

            while(!queue.filaVazia()){
                var u = queue.removeItemDaFila();
                var neighbors = adjList.get(u);
                color[u] = 'grey';
                for(var i= 0; i < neighbors.length; i++){
                    var w = neighbors[i];
                    if(color[w] === 'white'){
                        color[w] = 'grey';
                        queue.insereItemNaFila(w);
                    }
                }

                color[u] = 'black';
                callback(u);
            }
        }

        this.dfs = function(callback){
            var color = initializeColor();
            for( var i = 0; i < vertices.length; i++){
                if(color[vertices[i]]==='white'){
                    dfsVisit(vertices[i], color, callback);
                }
            }
        }

        var dfsVisit = function(u, color, callback){
            color[u] = 'grey';
            callback(u);

            var neighbors = adjList.get(u);
            for(var i= 0; i < neighbors.length; i++){
                var w = neighbors[i];
                if(color[w] === 'white'){
                    dfsVisit(w, color, callback);
                }
            }
            color[u] = 'black';
        }
    }

    function printNode(value){
        console.log('Visited vertex:', value);
    }

    var graph = new Graph();
    var myVertices = ['A','B','C','D','E','F','G','H','I'];
    for(var i = 0; i < myVertices.length; i++){
        graph.addVertex(myVertices[i]);
    }

    graph.addEdge('A','B');
    graph.addEdge('A','C');
    graph.addEdge('A','D');
    graph.addEdge('C','D');
    graph.addEdge('C','G');
    graph.addEdge('D','G');
    graph.addEdge('D','H');
    graph.addEdge('B','E');
    graph.addEdge('B','F');
    graph.addEdge('E','I');

    console.log(graph.toString());

    console.log('Busca em largura')
    graph.bfs(myVertices[0], printNode);

    console.log('Busca em Profundidade')
    graph.dfs(printNode);
})();