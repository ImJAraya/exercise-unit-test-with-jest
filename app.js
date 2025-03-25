// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (monto_en_dolares) => {
    let dolarAEuro = monto_en_dolares / oneEuroIs.USD
    return dolarAEuro * oneEuroIs.JPY
}

const fromEuroToDollar = (monto_en_euros) => {
    return monto_en_euros * oneEuroIs.USD
    
}

const fromYenToPound = (monto_en_yenes) => {
    let yenAEuro = monto_en_yenes / oneEuroIs.JPY
    return yenAEuro * oneEuroIs.GBP
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};