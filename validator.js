const validator = {
  // ...
  isValid: function(creditCardNumber) {
    
    let cardNumbers = Array.from(creditCardNumber).reverse();

    // Separar datos según posición (par e inpar)
    let oddNumber = cardNumbers.filter((element, index) => {
        return ((index + 1) % 2 == 0);
    });
    let evenNumber = cardNumbers.filter((element, index) => {
        return ((index + 1) % 2 !== 0);
    });
    // Doble de los números en posición par
    let doubleOddNumber = oddNumber.map(function(x) {
        return x * 2;
    });
    // Join Array, todo junto
    let joinOddArray = doubleOddNumber.join("");
    
    // Crear nuevamente una Array y así separar los dígitos
    let finalOddArray = Array.from(joinOddArray);
    
    // Concatena las dos Arrays
    let concatResult = finalOddArray.concat(evenNumber);
    
    // Transformar array concatenada en número
    let numbResult = concatResult.map(Number);
    
    // Sumar las dos arrays
    let finalResult = numbResult.reduce(function(previousValue, currentValue) {
        let finalArray = previousValue + currentValue;
        return finalArray;
    }, 0);
    // Ver último dígito
    let resultLastDigit = Math.floor(finalResult % 10);
    if (resultLastDigit == 0 && creditCardNumber !== "") {
      console.log("VÁLIDA");
      return true;
    } else if (resultLastDigit !== 0 && creditCardNumber !== "") {
      console.log("INVÁLIDA");
      return false;
    }
  },
   maskify: function(creditCardNumber) {
    if (creditCardNumber.length < 5) {
      return "#".repeat(creditCardNumber.length - 1) + creditCardNumber.slice(-4);
    } else if (creditCardNumber.length > 5) {
      return "#".repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);
  }
}
};
export default validator;