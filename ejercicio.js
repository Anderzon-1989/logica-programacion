function convertirTemperatura() {
    let entrada = document.getElementById("entrada").value;
    let resultado = document.getElementById("resultado");
    let error = document.getElementById("mensaje-error");
  
    resultado.innerHTML = "";
    error.innerHTML = "";
  
    if (entrada !== "") {
      let celsius = Number(entrada);
  
      if (celsius == entrada) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        let kelvin = celsius + 273.15;
  
        resultado.innerHTML =
          "<p>Grados Fahrenheit: " + fahrenheit + "°F</p>" +
          "<p>Grados Kelvin: " + kelvin + " K</p>";
  
        // Mostrar en consola
        console.log("Grados Celsius: " + celsius);
        console.log("Grados Fahrenheit: " + fahrenheit);
        console.log("Grados Kelvin: " + kelvin);
      } else {
        error.innerHTML = "Error: Eso no es un número.";
        // Mostrar error en consola
        console.log("Error: Eso no es un número.");
      }
    } else {
      error.innerHTML = "Error: No ingresaste ningún valor.";
      // Mostrar error en consola
      console.log("Error: No ingresaste ningún valor.");
    }
  }
  
  