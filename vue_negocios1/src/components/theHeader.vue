<template>
      <div class="container-fluid">
        <div class="row bg-secondary py-2 px-xl-5">
          <div class="col-lg-6 d-none d-lg-block">
                <div class="d-inline-flex align-items-center">
                    <RouterLink to="/FAQ" class="text-dark">Preguntas frecuentes</RouterLink>
                    <span class="text-muted px-2">|</span>
                    <a class="text-dark" href="">Ayuda</a>
                    <span class="text-muted px-2">|</span>
                    <a class="text-dark" href="">Soporte</a>
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
            <a href="" class="text-decoration-none">
              <h1 class="m-0 display-5 font-weight-semi-bold">
                <span style="color: rgb(101, 67, 199) !important;" class="text-primary font-weight-bold border px-3 mr-1">Platinum</span>Suplements
              </h1>
            </a>
          </div>
          <div class="col-lg-5 col-6 text-left">
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for products" />
                        <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-2 col-6 text-right">
                <a href="" class="btn border">
                    <i class="fas fa-heart text-primary"></i>
                    <span class="badge">0</span>
                </a>
                <a href="" class="btn border">
                    <i class="fas fa-shopping-cart text-primary"></i>
                    <span class="badge">0</span>
                </a>
            </div>
        </div>
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" class="text-decoration-none d-block d-lg-none">
              <h1 class="m-0 display-5 font-weight-semi-bold">
                <span style="color: rgb(101, 67, 199) !important;" class="text-primary font-weight-bold border px-3 mr-1">Platinum</span>Suplements
              </h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div class="navbar-nav mr-auto py-0">
                <RouterLink to="/" class="nav-item nav-link active">Inicio</RouterLink>
                <RouterLink to="/shop" class="nav-item nav-link">Tienda</RouterLink>
                <div class="nav-item dropdown">
                  <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Páginas</a>
                  <div class="dropdown-menu rounded-0 m-0">
                    <a href="cart.html" class="dropdown-item">Carrito</a>
                    <a href="checkout.html" class="dropdown-item">Pago</a>
                  </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contáctanos</a>
              </div>
              <div class="navbar-nav ml-auto py-0">
                <a href="" class="nav-item nav-link">Iniciar Sesión</a>
                <a href="" class="nav-item nav-link">Registrar</a>
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
  border-image: radial-gradient(circle,var(--color11),gray ) 1;
}
.text-dark:hover{
  text-decoration: none;
  background-color: var(--color11_opaco);
} 

  </style>
  