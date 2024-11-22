// Datos de los productos
const productos = [
  {
    title: "Chevrolet Corvette Stingray",
    description: "Icono americano con motor V8 de 495 caballos de fuerza, diseño aerodinámico y tecnología avanzada. Un deportivo que combina lujo y rendimiento.",
    image: "https://acortar.link/gHHiEQ",
    cost: 1195000.00
  },
  {
    title: "Ford Mustang Shelby GT500",
    description: "Potente muscle car con motor V8 de 760 caballos de fuerza, suspensión de alto rendimiento y un diseño agresivo. Ideal para los amantes de la velocidad.",
    image: "https://acortar.link/MRIqy7",
    cost: 2200000.00
  },
  {
    title: "Dodge Charger SRT Hellcat",
    description: "Sedán de altas prestaciones con motor HEMI V8 supercargado de 717 caballos de fuerza. Potente, rápido y con una presencia imponente.",
    image: "https://bit.ly/40MrS0O",
    cost: 1200000.00
  },
  {
    title: "Chevrolet Camaro ZL1",
    description: "Muscle car con motor V8 supercargado de 650 caballos de fuerza, transmisión de 10 velocidades y un diseño agresivo que destaca en la carretera.",
    image: "https://bit.ly/4ero8Vr",
    cost: 1650000.00
  },
  {
    title: "Dodge Viper ACR",
    description: "Un superdeportivo clásico con motor V10 de 645 caballos de fuerza. La combinación perfecta de potencia, control y un diseño agresivo que nunca pasa desapercibido.",
    image: "https://bit.ly/3Z2tq5g",
    cost: 2000000.00
  },
  {
    title: "Chrysler 300C SRT8",
    description: "Sedán deportivo con motor V8 de 470 caballos de fuerza, diseño imponente y una experiencia de conducción refinada para los que buscan lujo y rendimiento.",
    image: "https://bit.ly/48MXpRU",
    cost: 600000.00
  },
  {
    title: "Dodge Challenger Hellcat Redeye",
    description: "Muscle car con motor HEMI V8 de 797 caballos de fuerza, diseñado para ofrecer una potencia impresionante y un rendimiento excepcional en cada aceleración.",
    image: "https://bit.ly/4fvNByA",
    cost: 1800000.00
  },
  {
    title: "Chevrolet Corvette Z06",
    description: "Un superdeportivo de altas prestaciones con motor V8 de 650 caballos de fuerza, tecnología avanzada y un diseño aerodinámico para ofrecer una experiencia de conducción extrema.",
    image: "https://bit.ly/3Z3OGHM",
    cost: 1500000.00
  },
  {
    title: "Ford Mustang GT350R",
    description: "Versión de alto rendimiento del Mustang con motor V8 de 526 caballos de fuerza, suspensión deportiva y un sistema de frenos avanzado para una conducción sin igual.",
    image: "https://bit.ly/4fN6qwC",
    cost: 1350000.00
  },
  {
    title: "Dodge Durango SRT",
    description: "SUV de alto rendimiento con motor V8 HEMI de 475 caballos de fuerza, diseño robusto y capacidades excepcionales de remolque y velocidad.",
    image: "https://acortar.link/ETwdqS",
    cost: 2500000.00
  },
  {
    title: "RAM 1500 TRX",
    description: "Pick-up de alto rendimiento con motor V8 HEMI supercargado de 702 caballos de fuerza, diseñada para afrontar cualquier terreno con potencia y capacidad.",
    image: "https://acortar.link/MhULfv",
    cost: 2599900.00
  },
  {
    title: "Ford F-150 Raptor R",
    description: "Pick-up de rendimiento extremo con motor V8 supercargado de 700 caballos de fuerza, diseñada para conquistar terrenos difíciles con velocidad y control.",
    image: "https://acortar.link/4oVifP",
    cost: 2842900.00
  },
  // Nuevos carros deportivos V8
  {
    title: "Chevrolet Camaro SS",
    description: "Un vehiculo americano con motor V8 de 455 caballos de fuerza, ideal para los que buscan rendimiento y estilo con un sonido inconfundible.",
    image: "https://acortar.link/zELCCH",
    cost: 1200000.00
  },
  {
    title: "Ford Mustang Mach 1",
    description: "El renacer del Mustang Mach 1 con un motor V8 de 480 caballos de fuerza, optimizado para ofrecer una experiencia de manejo sin igual en la carretera.",
    image: "https://acortar.link/0Meo3Y",
    cost: 1500000.00
  },
  {
    title: "Dodge Charger Daytona",
    description: "Un vehiculo legendario con motor V8 HEMI de 485 caballos de fuerza, combinado con un diseño aerodinámico y potente que destaca entre la multitud.",
    image: "https://acortar.link/umq4wc",
    cost: 1750000.00
  }
];

// Función para renderizar productos en la página
function renderProductos(productos) {
  const productosContainer = document.getElementById('productos');
  productosContainer.innerHTML = ''; // Limpiar el contenedor

  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('col-md-4', 'mb-4');
    productoDiv.innerHTML = `
      <div class="card producto">
        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description}</p>
          <p class="cost">$${producto.cost.toLocaleString()}</p>
          <button class="btn btn-primary" onclick="comprar('${producto.title}')">Comprar</button>
          <button class="btn btn-secondary mt-2" onclick="personalizar('${producto.title}')">Personalizar</button>
        </div>
      </div>
    `;
    productosContainer.appendChild(productoDiv);
  });
}

// Función para manejar la compra (muestra un formulario de compra)
function comprar(productoTitle) {
  // Crear el formulario de compra dinámicamente
  const formHTML = `
      <div class="modal fade" id="purchaseModal" tabindex="-1" aria-labelledby="purchaseModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="purchaseModalLabel">Compra tu vehiculo</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form id="purchaseForm">
                          <div class="mb-3">
                              <label for="fullName" class="form-label">Nombre Completo</label>
                              <input type="text" class="form-control" id="fullName" placeholder="Tu nombre completo" required>
                          </div>
                          <div class="mb-3">
                              <label for="address" class="form-label">Dirección de Envío</label>
                              <input type="text" class="form-control" id="address" placeholder="Tu dirección" required>
                          </div>
                          <div class="mb-3">
                              <label for="paymentMethod" class="form-label">Método de Pago</label>
                              <select class="form-select" id="paymentMethod" required>
                                  <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                                  <option value="PayPal">PayPal</option>
                                  <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="email" class="form-label">Correo Electrónico</label>
                              <input type="email" class="form-control" id="email" placeholder="Tu correo" required>
                          </div>
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary" onclick="submitPurchase()">Enviar</button>
                  </div>
              </div>
          </div>
      </div>
  `;
  document.body.insertAdjacentHTML('beforeend', formHTML);

  const modal = new bootstrap.Modal(document.getElementById('purchaseModal'));
  modal.show();
}

// Función para manejar la personalización
function personalizar(productoTitle) {
  // Crear el formulario de personalización dinámicamente
  const formHTML = `
      <div class="modal fade" id="customizationModal" tabindex="-1" aria-labelledby="customizationModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="customizationModalLabel">Personaliza tu vehiculo</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form id="customizationForm">
                          <div class="mb-3">
                              <label for="color" class="form-label">Color del Vehículo</label>
                              <select class="form-select" id="color" required>
                                  <option value="Rojo">Rojo</option>
                                  <option value="Azul">Azul</option>
                                  <option value="Negro">Negro</option>
                                  <option value="Blanco">Blanco</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="llantas" class="form-label">Tipo de Llantas</label>
                              <select class="form-select" id="llantas" required>
                                  <option value="Deportivas">Deportivas</option>
                                  <option value="Todo Terreno">Todo Terreno</option>
                                  <option value="De Lujo">De Lujo</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="detalles" class="form-label">Detalles Adicionales</label>
                              <input type="text" class="form-control" id="detalles" placeholder="Escribe cualquier detalle adicional">
                          </div>
                      </form>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary" onclick="submitCustomization('${productoTitle}')">Confirmar Personalización</button>
                  </div>
              </div>
          </div>
      </div>
  `;
  document.body.insertAdjacentHTML('beforeend', formHTML);

  const modal = new bootstrap.Modal(document.getElementById('customizationModal'));
  modal.show();
}

// Función para procesar la personalización
function submitCustomization(productoTitle) {
  const color = document.getElementById('color').value;
  const llantas = document.getElementById('llantas').value;
  const detalles = document.getElementById('detalles').value;

  alert(`Personalización Confirmada!\n\nVehículo: ${productoTitle}\nColor: ${color}\nLlantas: ${llantas}\nDetalles: ${detalles}`);

  const modal = bootstrap.Modal.getInstance(document.getElementById('customizationModal'));
  modal.hide();
}

// Función para procesar el formulario de compra
function submitPurchase() {
  const fullName = document.getElementById('fullName').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('paymentMethod').value;
  const email = document.getElementById('email').value;

  alert(`Gracias por tu compra!\n\nNombre: ${fullName}\nDirección: ${address}\nMétodo de Pago: ${paymentMethod}\nCorreo: ${email}`);

  const modal = bootstrap.Modal.getInstance(document.getElementById('purchaseModal'));
  modal.hide();
}

// Función de búsqueda de productos
function searchProducts(event) {
  event.preventDefault(); // Prevenir que la página se recargue

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = productos.filter(producto =>
    producto.title.toLowerCase().includes(searchTerm)
  );

  renderProductos(filteredProducts); // Vuelve a renderizar los productos filtrados
}

// Inicializar los productos al cargar la página
renderProductos(productos);
