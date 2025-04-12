document.getElementById("formVentas").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("productoVenta").value;
    const cantidad = document.getElementById("cantidad").value;
    const pago = document.getElementById("pago").value;
    const fecha = new Date().toLocaleDateString();
  
    const tabla = document.getElementById("tablaVentas");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${cliente}</td>
      <td>${producto}</td>
      <td>${cantidad}</td>
      <td>${pago}</td>
      <td>${fecha}</td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  