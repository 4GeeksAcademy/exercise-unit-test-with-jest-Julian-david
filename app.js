const sum = (a,b)=>{
    return a+ b
}

console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (valueInDollar)=>{
    let valueInYen = valueInDollar *156.5
    return valueInYen

}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound =(valueInYen)=>{
    let valueInPound = valueInYen * 0.87;
    return valueInPound
}



module.exports = {sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}



