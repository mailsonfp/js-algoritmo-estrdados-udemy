(function(){
    'use strict';
    
    function ArrayList(){
        var array = [];

        this.insert = function(item){
            array.push(item);
        }

        this.toString = function(){
            return array.join();
        }

        this.bubbleSort = function(){
            var newArray = array;

            for(var i = 0; i < newArray.length - 1; i++){
                for(var j = 0; j < newArray.length - 1; j++){
                    if(newArray[j] > newArray[j + 1]){
                        swap(newArray, j, j + 1);
                    }
                }
            }

            return newArray;
        }

        this.selectionSort = function(){
            var newArray = array;
            var indexMin;

            for(var i = 0; i < newArray.length - 1; i++){
                indexMin = i;
                for(var j = i; j < newArray.length - 1; j++){
                    if(newArray[indexMin] > newArray[j]){
                        indexMin = j;
                    }
                }

                if(i !== indexMin){
                    swap(newArray, i, indexMin);
                }
            }

            return newArray;
        }

        this.insertionSort = function(){
            var newArray = array;
            var j, temp;

            for(var i = 0; i < newArray.length - 1; i++){
                j = i;
                temp = newArray[i];
                while(j > 0 && newArray[j - 1] > temp){
                    newArray[j] = newArray[j - 1];
                    j--;
                }
                newArray[j] = temp;
            }

            return newArray;
        }

        this.mergeSort = function(){
            var newArray = mergeSortRec(array);
            return newArray;
        }

        var mergeSortRec = function(array){
            var length = array.length;
            if(length === 1){
                return array;
            }

            var mid = Math.floor(length / 2);
            var left = array.slice(0, mid);
            var right = array.slice(mid, length);

            return merge(mergeSortRec(left), mergeSortRec(right));
        }

        var merge = function(left, right){
            var result = [];
            var il = 0;
            var ir = 0;

            while(il < left.length && ir < right.length){
                if(left[il] < right[ir]){
                    result.push(left[il++]);
                }else{
                    result.push(right[ir++]);
                }
            }

            while(il<left.length){
                result.push(left[il++]);
            }

            while(ir < right.length){
                result.push(right[ir++]);
            }

            return result;
        }

        this.quickSort = function() {
            var newArray = array;
            quick(newArray, 0, newArray.length - 1);
            return newArray;
        }
    
        var quick = function(array, left, right) {
            var index;
            if(array.length > 1) {
                index = partition(array, left, right);
                if(left < index - 1) {
                    quick(array, left, index - 1);
                }
                if(index < right) {
                    quick(array, index, right);
                }
            }
        }
    
        var partition = function(array, left, right) {
            var pivot = array[Math.floor((right + left) / 2)];
            var i = left;
            var j = right;
    
            while(i <= j) {
                while(array[i] < pivot) {
                    i++;
                }
                while(array[j] > pivot) {
                    j--;
                }
                if(i <= j) {
                    swap(array, i, j);
                    i++;
                    j--;
                }
            }
            return i;
        }

        var swap = function(array, index1, index2){
            var aux = array[index1];
            array[index1] = array[index2];
            array[index2] = aux;
        }
    }

    var al = new ArrayList();
    al.insert(5);
    al.insert(4);
    al.insert(9);
    al.insert(11);
    al.insert(1);
    al.insert(13);
    al.insert(7);

    console.log('BubbleSort');
    var bubbleArray = al.bubbleSort();
    console.log(bubbleArray.toString());

    console.log('SelectionSort');
    al.insert(17);
    var selectionSort = al.selectionSort();
    console.log(selectionSort.toString());

    console.log('InsertionSort');
    al.insert(3);
    var insertionSort = al.insertionSort();
    console.log(insertionSort.toString());

    console.log('MergeSort');
    al.insert(25);
    var mergeSort = al.mergeSort();
    console.log(mergeSort.toString());

    console.log('QuickSort');
    al.insert(6);
    var quickSort = al.quickSort();
    console.log(quickSort.toString());
})();