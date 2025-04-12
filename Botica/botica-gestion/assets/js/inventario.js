document.getElementById("formInventario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const producto = document.getElementById("producto").value;
    const codigo = document.getElementById("codigo").value;
    const proveedor = document.getElementById("proveedor").value;
    const stock = document.getElementById("stock").value;
    const caducidad = document.getElementById("caducidad").value;
  
    const tabla = document.getElementById("tablaInventario");
    const fila = document.createElement("tr");
  
    fila.innerHTML = `
      <td>${producto}</td>
      <td>${codigo}</td>
      <td>${proveedor}</td>
      <td>${stock}</td>
      <td>${caducidad}</td>
    `;
  
    tabla.appendChild(fila);
    this.reset();
  });
  