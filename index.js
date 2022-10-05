import validator from './validator.js';

console.log(validator);

//Mostrar y ocultar sección de Resumen de Compra
document.getElementById("hiding-button").addEventListener("click", () => {
    let productsDisplay = document.getElementById("products-cart");
    if (productsDisplay.style.display === "none") {
        productsDisplay.style.display = "block";
      } else {
        productsDisplay.style.display = "none";
      }
});

// Invocar isValid con el click en submit
document.getElementById("submit").addEventListener("click", function() {
  let creditCardNumber = document.getElementById("card-numbers").value;
  if (validator.isValid(creditCardNumber)) {
     return alert("VALID!");
  } else {
    return alert("INVALID!");
  }
});
// Invocar maskify apretando una tecla
document.getElementById("card-numbers").addEventListener("keyup", function() {
  let creditCardInput = document.getElementById("card-numbers");
  let creditCardNumber = document.getElementById("card-numbers").value;
  return creditCardInput.value = validator.maskify(creditCardNumber);
})