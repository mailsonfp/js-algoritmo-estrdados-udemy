(function(){
    'use strict';
    var avgTemp = [];

    avgTemp[0] = 31.0;
    avgTemp[1] = 35.3;
    avgTemp[2] = 42;
    avgTemp[3] = 38;
    avgTemp[4] = 25.5;

    console.log(avgTemp[1]);

    var dayofWeek = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta'];

    console.log(dayofWeek[3]);

    var fibonacci =[0,1,1];

    for(var i = 3; i<20;i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i - 2];
    }

    console.log('Fibonacci:', fibonacci)
})();