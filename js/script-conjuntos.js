(function(){
    'use strict';

    function Set(){
        var itens = {};

        this.add = function(value){
            if(!this.has(value)){
                itens[value] = value;
                return true;
            }

            return false;
        }

        this.delete = function(value){
            if(this.has(value)){
                delete itens[value];
                return true;
            }

            return false;
        }

        this.has = function(value){
            return itens.hasOwnProperty(value);
        }

        this.clear = function(){
            itens = {};
        }

        this.size = function(){
            return Object.keys(itens).length;
        }

        this.values = function(){
            var values = [];
            var keys = Object.keys(itens);
            for(var i = 0; i < keys.length; i++){
                values.push(itens[keys[i]]);
            }

            return values;
        }
        
        this.union = function(otherSet){
            var unionSet = new Set();
            var values = this.values();

            for(var i = 0; i < values.length; i++){
                unionSet.add(values[i]);
            }

            values = otherSet.values();

            for(var i = 0; i < values.length; i++){
                unionSet.add(values[i]);
            }

            return unionSet;
        }

        this.intersection = function(otherSet){
            var intersectionSet = new Set();
            var values = this.values();

            for(var i=0; i< values.length; i++){
                if(otherSet.has(values[i])){
                    intersectionSet.add(values[i])
                }
            }

            return intersectionSet;
        }

        this.difference = function(otherSet){
            var differenceSet = new Set();
            var values = this.values();

            for(var i=0; i< values.length; i++){
                if(!otherSet.has(values[i])){
                    differenceSet.add(values[i])
                }
            }

            return differenceSet;
        }

        this.subset = function(otherSet){
            if(this.size() > otherSet.size()){
                return false;
            }else{
                var values = this.values();

                for(var i = 0; i < values.length; i++){
                    if(!otherSet.has(values[i])){
                        return false;
                    }
                }
                return true;
            }
        }
    }

    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(9);

    console.log('Tamanho',set.size());
    console.log('Set A:',set.values());

    var setB = new Set();
    setB.add(7);
    setB.add(8);
    setB.add(1);
    setB.add(9);
    console.log('Set B:',setB.values());

    var setC = new Set();    
    setC.add(2);
    setC.add(3);
    setC.add(4);
    console.log('Set C:',setC.values());

    var setUnion = new Set();
    setUnion = set.union(setB);
    console.log('union',setUnion.values());

    var setIntersect = new Set();
    setIntersect = set.intersection(setB);
    console.log('intersect',setIntersect.values());

    var differentSet = new Set();
    differentSet = set.difference(setB);
    console.log('difference',differentSet.values());

    console.log('B subconjunto de A',set.subset(setB));
    console.log('C subconjunto de A',setC.subset(set));
})();