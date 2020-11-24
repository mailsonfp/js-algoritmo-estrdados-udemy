(function(){
    'use strict';
    
    function HashTable(){
        var table = [];

        this.put = function(key, value){
            var position = loselosHashCode(key);
            //console.log(position + '' + key);
            table[position] = value;
        }

        this.remove = function(key){
            table[loselosHashCode(key)] = undefined;
        }

        this.get = function(key){
            return table[loselosHashCode(key)];
        }

        var loselosHashCode = function(key){
            var hash = 0;
            for(var i = 0; i < key.length; i++){
                hash += key.charCodeAt(i);
            }

            return hash % 37;
        }
    }

    var hash = new HashTable();

    hash.put('nome', 'Mailson');
    hash.put('email', 'xxx@gmail.com');
    hash.put('telefone', '99999999');

    console.log('Recuperando elemento:',hash.get('nome'));
})();