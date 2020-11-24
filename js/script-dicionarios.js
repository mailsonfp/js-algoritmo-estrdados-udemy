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

    var dic = new Dictionary();

    dic.set('nome', 'Mailson');
    dic.set('email', 'xxx@gmail.com');
    dic.set('telefone', '99999999');

    console.log('keys',dic.keys());
})();