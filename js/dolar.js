// Función para obtener el precio del dólar
function obtenerPrecioDolar() {
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener el precio del dólar');
        }
        return response.json();
      })
      .then(data => {
        var precioDolarBlue = data.venta;
        document.getElementById("precioDolarVenta").textContent = "Precio del dólar blue: " + precioDolarBlue + " ARS";
      })
      .catch(error => {
        console.error('Error: ' + error);
      });
  }

  // Llama a la función para obtener el precio del dólar al cargar la página
  obtenerPrecioDolar();