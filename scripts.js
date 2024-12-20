document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("is-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  // Obtén la URL actual
  const currentPage = window.location.pathname;

  // Compara cada enlace y marca el activo
  navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

var myCarousel = document.querySelector('#valoracionesCarrusel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // Intervalo de 3 segundos
  ride: 'carousel' // Inicia el carrusel automáticamente
})

function mostrarFormulario(tipo) {
  const contenedorFormulario = document.getElementById('contenedor-formulario');
  const contenedorSeleccion = document.getElementById('contenedor-seleccion');
  contenedorSeleccion.style.display = 'none'; // Ocultar la selección inicial

  const botonRegresar = `
    <button class="btn-regresar" onclick="regresar()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
      </svg>
      Volver
    </button>
  `;

  if (tipo === 'gratuito') {
    contenedorFormulario.innerHTML = `
    <div class="caja-registro">
      ${botonRegresar}
      <div class="titulo-registro">Registro Gratuito</div>
      <form>
        <div class="form-group mb-3">
          <label for="nombre" class="form-control-label">Nombre Completo</label>
          <input type="text" id="nombre" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for="correo" class="form-control-label">Correo Electrónico</label>
          <input type="email" id="correo" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for="telefono" class="form-control-label">Número de Teléfono</label>
          <input type="tel" id="telefono" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for="codigo-postal" class="form-control-label">Código Postal</label>
          <input type="text" id="codigo-postal" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for="contrasena" class="form-control-label">Contraseña</label>
          <input type="password" id="contrasena" class="form-control">
        </div>
        <div class="form-group mb-3">
          <label for="repetir-contrasena" class="form-control-label">Repetir Contraseña</label>
          <input type="password" id="repetir-contrasena" class="form-control">
        </div>
        <button type="submit" class="btn">Registrarse</button>
      </form>
    </div>`;
  } else if (tipo === 'premium') {
    contenedorFormulario.innerHTML = `
    <div class="caja-registro">
      ${botonRegresar}
      <div class="titulo-registro">Registro Premium</div>
      <form>
        <!-- Datos personales -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="nombre-premium" class="form-control-label">Nombre Completo</label>
              <input type="text" id="nombre-premium" class="form-control">
            </div>
            <div class="form-group mb-3">
              <label for="correo-premium" class="form-control-label">Correo Electrónico</label>
              <input type="email" id="correo-premium" class="form-control">
            </div>
            <div class="form-group mb-3">
              <label for="telefono-premium" class="form-control-label">Número de Teléfono</label>
              <input type="tel" id="telefono-premium" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="codigo-postal-premium" class="form-control-label">Código Postal</label>
              <input type="text" id="codigo-postal-premium" class="form-control">
            </div>
            <div class="form-group mb-3">
              <label for="contrasena-premium" class="form-control-label">Contraseña</label>
              <input type="password" id="contrasena-premium" class="form-control">
            </div>
            <div class="form-group mb-3">
              <label for="repetir-contrasena-premium" class="form-control-label">Repetir Contraseña</label>
              <input type="password" id="repetir-contrasena-premium" class="form-control">
            </div>
          </div>
        </div>
        <!-- Datos de la tarjeta -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="numero-tarjeta" class="form-control-label">Número de Tarjeta</label>
              <input type="text" id="numero-tarjeta" class="form-control">
            </div>
            <div class="form-group mb-3">
              <label for="nombre-tarjeta" class="form-control-label">Nombre en la Tarjeta</label>
              <input type="text" id="nombre-tarjeta" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-3">
              <label for="fecha-expiracion" class="form-control-label">Fecha de Expiración</label>
              <input type="text" id="fecha-expiracion" class="form-control" placeholder="MM/AA">
            </div>
            <div class="form-group mb-3">
              <label for="cvv" class="form-control-label">Código CVV</label>
              <input type="text" id="cvv" class="form-control">
            </div>
          </div>
        </div>
        <button type="submit" class="btn">Registrarse</button>
      </form>
    </div>`;
  }
}

function regresar() {
  document.getElementById('contenedor-formulario').innerHTML = '';
  document.getElementById('contenedor-seleccion').style.display = 'block';
}

function mostrarDetallesTicket(idTicket) {
  const todosLosDetalles = document.querySelectorAll('.ticket-details');
  todosLosDetalles.forEach(detalle => detalle.style.display = 'none');
  const seccionDetalle = document.getElementById('ticket-' + idTicket);
  if (seccionDetalle) {
      seccionDetalle.style.display = 'block';
  }
}

function cerrarDetallesTicket(idTicket) {
  const seccionDetalle = document.getElementById('ticket-' + idTicket);
  if (seccionDetalle) {
      seccionDetalle.style.display = 'none';
  }
}
