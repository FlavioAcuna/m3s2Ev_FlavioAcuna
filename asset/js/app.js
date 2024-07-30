function seleccionCategoria() {
  let categoria;
  do {
    categoria = prompt("Ingrese la categoria del producto:").toLowerCase();
  } while (categoria !== "ropa" && categoria !== "electrónica");
  return categoria;
}
function calcularDescuentos(categoria, precio) {
  let descuento;
  if (categoria === "ropa") {
    descuento = precio * 0.05;
  } else if (categoria === "electrónica") {
    descuento = precio * 0.1;
  }
  return descuento;
}

// Función para calcular el precio total
function calcularPrecioTotal() {
  let categoria = seleccionCategoria();
  let cantidad = parseInt(prompt("Introduce la cantidad de productos:"));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert(
      "Cantidad no válida. Por favor, introduce un número entero positivo."
    );
    return;
  }

  let precio = parseFloat(
    prompt("Introduce el precio por unidad del producto:")
  );
  if (isNaN(precio) || precio <= 0) {
    alert("Precio no válido. Por favor, introduce un número positivo.");
    return;
  }

  let descuentoTotal = 0;
  let precioTotal = 0;

  for (let i = 0; i < cantidad; i++) {
    let precio = parseFloat(
      prompt("Introduce el precio por unidad del producto:")
    );
    if (isNaN(precio) || precio <= 0) {
      alert("Precio no válido. Por favor, introduce un número positivo.");
      return;
    }
    let descuento = calcularDescuentos(categoria, precio);
    alert(descuento);
    descuentoTotal += descuento;
    precioTotal += precio - descuento;
  }

  alert(`El precio total de su compra es: ${precioTotal}`);
}

// Llamar a la función para iniciar el proceso
calcularPrecioTotal();
