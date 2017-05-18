var app = angular.module('serviceKira',[]);

app.service('Kira',function(){
    this.tambah = function(valX,valY){
        return valX + valY;  
    };
    this.darab = function(valX,valY){
        return valX * valY;  
    };  
    this.jumlah = function(valX,valY){
        return this.tambah(valX,valY) + this.darab(valX,valY);  
    };  
});   