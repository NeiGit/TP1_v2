
function combineTwoArrays(arr1, arr2) {
    // resultado a devolver
    let combinedArray = [];
  
    // indice para recorrer arr1
    let index1 = 0;
    // indice para recorrer arr2
    let index2 = 0;
  
  
    while (index1 < arr1.length) {
      // mientras queden datos por recorrer en arr2 y el actual sea menor al actual de arr1, se irán agregando al combinado  
      while (index2 < arr2.length && arr2[index2] < arr1[index1]) {  
        combinedArray.push(arr2[index2]);
        index2++;
      }
      // solo se agrega el actual de arr1 si es distinto al actual de arr2, para evitar duplicados
      if(arr1[index1] != arr2[index2])
          combinedArray.push(arr1[index1]);
      index1++;
    }
  
    // por último, si quedan valores en arr2, se agregan
    while (index2 < arr2.length) {
      combinedArray.push(arr2[index2]);
      index2++;
    }
  
    return combinedArray;
  }
  
  
  function combineNArrays(arr) {
    // resultado a devolver  
    let combinedArray = [];
  
    // indice para iterar el array de arrays
    let index = 0;
    while (index < arr.length) {
      // se concatena en el resutlado la comparación con cada array del array
      combinedArray = combineTwoArrays(combinedArray, arr[index]);
      index++;
    }
    return combinedArray;
  }

  function transformTextToNumberArray(text = "", separator = ",") {
    return text
      .split(separator)
      .filter(v => Number(v))
      .map(v => Number(v));
  }

  export default {
      combineTwoArrays,
      combineNArrays,
      transformTextToNumberArray
  }