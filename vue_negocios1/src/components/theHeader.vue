<template>
  <div class="container-fluid">
    <div class="row bg-secondary py-2 px-xl-5">
      <div class="col-lg-6 d-none d-lg-block">
        <div class="d-inline-flex align-items-center">
          <RouterLink to="/FAQ" class="text-dark">Preguntas frecuentes</RouterLink>
          <span class="text-muted px-2">|</span>
          <a class="text-dark"
            href="https://wa.me/34678910112?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos"
            target="_blank">
            <i class="fab fa-whatsapp"></i> Ayuda
          </a>
        </div>
      </div>
      <div class="col-lg-6 text-center text-lg-right">
        <div class="d-inline-flex align-items-center">
          <a class="text-dark px-2" href="https://www.facebook.com/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a class="text-dark px-2" href="https://x.com/">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="text-dark px-2" href="https://mx.linkedin.com/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="text-dark px-2" href="https://www.instagram.com/">
            <i class="fab fa-instagram"></i>
          </a>
          <a class="text-dark pl-2" href="https://www.youtube.com/?gl=ES">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="row align-items-center py-3 px-xl-5">
      <div class="col-lg-5 d-none d-lg-block">
        <a href="/" class="text-decoration-none">
          <h1 class="m-0 display-5 font-weight-semi-bold">
            <span style="color: rgb(101, 67, 199) !important;"
              class="text-primary font-weight-bold border px-3 mr-1">Platinum</span>Suplements
          </h1>
        </a>
      </div>
      <div class="col-lg-4 col-6 text-left">
        <form action="">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Buscar productos" />
            <div class="input-group-append">
              <span class="input-group-text bg-transparent text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-3 col-6 text-right">
        <a href="/wishlist" class="btn border">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart"
            viewBox="0 0 16 16">
            <path
              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
          <span class="badge">0</span>
        </a>
        <a href="/cart" class="btn border">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart"
            viewBox="0 0 16 16">
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <span class="badge">0</span>
        </a>
        <a href="/usuario" class="btn border">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        </a>
      </div>
    </div>
    <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        <a href="" class="text-decoration-none d-block d-lg-none">
          <h1 class="m-0 display-5 font-weight-semi-bold">
            <span style="color: rgb(101, 67, 199) !important;"
              class="text-primary font-weight-bold border px-3 mr-1">Platinum</span>Suplements
          </h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
          <div class="navbar-nav mr-auto py-0">
            <RouterLink to="/" class="nav-item nav-link active">Inicio</RouterLink>
            <RouterLink to="/shop" class="nav-item nav-link">Tienda</RouterLink>
            <RouterLink to="/cart" class="nav-item nav-link">Carrito</RouterLink>
            <a href="/contact" class="nav-item nav-link">Contáctanos</a>
          </div>
          <div class="navbar-nav ml-auto py-0">
            <RouterLink to="/login" class="nav-item nav-link active">Iniciar sesión</RouterLink>
            <RouterLink to="/register" class="nav-item nav-link active">Registrarse</RouterLink>
            <RouterLink to="/planes" class="nav-item nav-link active">Planes</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  top: 0;
  position: fixed;
  padding: 0 20px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  z-index: 1000;
  border-bottom: 3px solid;
  border-image: radial-gradient(circle, var(--color11), gray) 1;
}

.text-dark:hover {
  text-decoration: none;
  background-color: var(--color11_opaco);
}

.user-icon {
  /* Estilos para el contenedor del icono */
  display: inline-block;
  /* Ajusta el display según tu diseño */
}

.user-icon a {
  /* Estilos para el enlace */
  text-decoration: none;
  /* Elimina subrayado del enlace */
  color: #333;
  /* Color del texto del enlace */
}

.user-icon a:hover {
  /* Estilos para el enlace al pasar el ratón */
  color: #666;
  /* Cambia el color al pasar el ratón */
}

.user-icon i {
  /* Estilos para el icono */
  font-size: 24px;
  /* Tamaño del icono */
  margin-right: 5px;
  /* Espacio entre el icono y el texto (si aplica) */
}
</style>