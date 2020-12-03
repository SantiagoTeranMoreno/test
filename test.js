//Ejercicio 1

/*const array = [0,1,2,3,4];
console.log ('Arreglo original:', array);
let array2 = array.shift();
console.log ('Arreglo actual:', array);
console.log ('Parámetro removido', array2);*/


//ejercicio 2

/*const array = [0,12,33,66,54,68,32,77];
console.log('el arreglo ingresado es', array)
if (array.length < 5){
    console.log('El arreglo debe ser de 5 elementos o más')
} else {
    let counter = -1;
array.forEach(function(item){
    counter ++;
})

array.splice (counter - 2, counter);
console.log ('El arreglo actual es:', array);

}*/


//ejercicio 3

/*const array = [0,1,2,3,4];
console.log (array);
number = 1;

const array2 = array.map(function(item){
    return item + number;
})

console.log (array2);*/


//ejercicio 4
/*
let counter = 0
const array = [];
function arregloDeTantosPrmt (numero){
    while (counter < numero ){
        array.splice(counter + 1, 0, counter);
        counter ++;
    }
    console.log (array);
}

arregloDeTantosPrmt (100);
*/

//ejercicio 5

/*const array = [1,1,1,1,1,1,0,1,1]

let pos0 = array.slice (0,1);
let n0 = Number.parseFloat (pos0);

let pos1 = array.slice (1,2);   
let n1 = Number.parseFloat (pos1);

const pos2 = array.slice (3,4);
let n2 = Number.parseFloat (pos2);

const pos3 = array.slice (4,5);
let n3 = Number.parseFloat (pos3);

if (n0 + n1 == n0 * 2){
    var nroRepetido = n0;
} else {
    if (n2 + n3 == n2 * 2){
        var nroRepetido = n2}
    }
    const ovejaNegra = array.filter (function(item){
        return item != nroRepetido;
    })
    console.log ('El número diferente a el resto del arreglo es:', ovejaNegra);
    
  */  
    /*
    

function ovejaNegra2 (array){
    	console.log(array.find (function(item){
            if(array.indexOf(item) === array.lastIndexOf (item)){
            return item
        }
    }))
}
ovejaNegra2 (array)*/


//ejercicio 6
/*
var array = [7,4,2,3]
let n = -1
while(2 != array.length){
    var array = array.filter(function (item) {
        n++
        return item < array[n]
    })
console.log (array)
} 
*/


//ejercicio 7

//Dado un arreglo de números enteros, encuentre el mayor producto posible dado a partir de números adyacentes

/*let array = [9,5,10,2,24,-1]
let counter = 0
while (counter < array.length){
    if(array[0]<array[1]){
        
    }
    counter ++;
    console.log (n)
}
*/
jjjjjj




console.log(modified)

