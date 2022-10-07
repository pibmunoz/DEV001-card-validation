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

// Invocar isValid con el click en submit + alert con maskify
document.getElementById("submit").addEventListener("click", function() {
  let creditCardNumber = document.getElementById("card-numbers").value;
  if (validator.isValid(creditCardNumber)) {
    return alert("¡PAGO REALIZADO CON ÉXITO! CON TARJETA N° " + validator.maskify(creditCardNumber));
  } else {
    return alert("INGRESA UN NÚMERO DE TARJETA VÁLIDO")
  }
  });
