/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let array = []
      for ( let index in objeto){
         if(objeto.hasOwnProperty(index)){
            array.push([index, objeto[index]])
         }
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   const charactersCount = {};

   for (let i = 0; i < string.length; i++) {
     const char = string[i];
 
     if (charactersCount[char]) {
       charactersCount[char]++;
     } else {
       charactersCount[char] = 1;
     }
   }
 
   const sortedKeys = Object.keys(charactersCount);
 
   const sortedCharacters = {};
 
   sortedKeys.forEach((key) => {
     sortedCharacters[key] = charactersCount[key];
   });
 
   return sortedCharacters;
 


   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let array = []

   let stringArray = string.split('');
   for (let index in stringArray){
      if ( stringArray[index] == stringArray[index].toUpperCase()){
         array.push(stringArray[index])
      }
   }
   for (let index in stringArray){
      if ( stringArray[index] == stringArray[index].toLowerCase()){
         array.push(stringArray[index])
      }
   }
   return array.join('')

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let arrayInvertido = [];
   let fraseArray = frase.split(' ')

   for ( let index in fraseArray){
      arrayInvertido.push(fraseArray[index].split('').reverse().join(''))

   }
   let arrayDefinitivo = arrayInvertido.join(' ')
   return arrayDefinitivo

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

     let numerox = numero.toString().split('')

     let numeroxArray = []

     for (let index in numerox){
      numeroxArray.unshift(numerox[index])
     }

     if (numeroxArray.join('') == numerox.join('')){
      return 'Es capicua'
     }
     else return 'No es capicua'


}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = []
   let stringArray = string.split('')
   for ( let index in stringArray){
      if(stringArray[index] === 'a' || stringArray[index] === 'b' || stringArray[index] === 'c') {
         continue
      }
      else{
         newString.push(stringArray[index])
      }
   }
   let finalString = newString.join('')
   return finalString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   



}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let nums = []

   for ( let index in array1){
      for(let indexito in array2){
         if(array1[index] == array2[indexito]){
         nums.push(array1[index])
         }
      }
   }
   return nums;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
