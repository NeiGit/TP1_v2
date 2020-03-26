import Utils from './ArrayUtils.js'
import FileManager from './FileManager.js'

function lineBreak() {
    console.log("\n")
}

// TEST 1: Combinar dos arrays definidos
const arr1 = [2, 3, 8, 11], arr2 = [3, 4, 10, 11, 98]
console.log(`TEST 1: combinar arrays definidos [${arr1}] y [${arr2}]`)
console.log("Resultado:", Utils.combineTwoArrays(arr1, arr2).toString())

lineBreak()

// TEST 2: Combinar dos arrays leidos de archivos
const arr3 = Utils.transformTextToNumberArray(FileManager.readFile("./sample files/10NumerosOrdenadosEntre1y50(setA).in"))
const arr4 = Utils.transformTextToNumberArray(
FileManager.readFile("./sample files/10NumerosOrdenadosEntre1y50(setB).in"))  
console.log(`TEST 2: combinar arrays leidos de archivos [${arr3}] y [${arr4}]`)  
console.log("Resultado:", Utils.combineTwoArrays(arr3, arr4).toString())

lineBreak()

// TEST 3: Combinar los dos arrays leidos en el método combineNArrays
console.log(`TEST 3: combinar los mismos dos arrays leidos de archivos [${arr3}] y [${arr4}]`)
console.log("Resultado:", Utils.combineNArrays([arr3, arr4]).toString())

lineBreak()

// TEST 4: Combinar los dos arrays definidos y los dos arrays leidos
console.log(`TEST 4: combinar N arrays, definidos y leidos de archivos [${arr1}], [${arr2}], [${arr3}] y [${arr4}]`)
console.log("Resultado:", Utils.combineNArrays([arr1, arr2, arr3, arr4]).toString())

