<template>
    <div class="container-fluid mb-5">
        <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a class="btn shadow-none d-flex align-items-center justify-content-between text-white w-100"
                    data-toggle="collapse" href="#navbar-vertical"
                    style="height: 65px; margin-top: -1px; padding: 0 30px; background-color: var(--color11);">
                    <h6 class="m-0">Categorias</h6>

                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                <nav class="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                    id="navbar-vertical">
                    <div class="navbar-nav w-100 overflow-hidden" style="height: 410px">
                        <a href="" class="nav-item nav-link">Vitaminas y Minerales</a>
                        <a href="" class="nav-item nav-link">Proteínas</a>
                        <a href="" class="nav-item nav-link">Suplementos Deportivos</a>
                        <a href="" class="nav-item nav-link">Suplementos Para la Salud</a>
                        <a href="" class="nav-item nav-link">Control de Peso</a>
                        <a href="" class="nav-item nav-link">Energía y Resistencia</a>
                        <a href="" class="nav-item nav-link">Salud y Bienestar</a>
                        <a href="" class="nav-item nav-link">Productos Naturales y Orgánicos</a>
                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" style="height: 410px;">
                            <img class="img-fluid" src="../assets/img/carousel-1.jpg" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 700px;">
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Descuento en Tu
                                        Primer Orden</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Proteínas</h3>
                                    <RouterLink to="/details" class="btn btn-light py-2 px-3">Cómprar ahora</RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style="height: 410px;">
                            <img class="img-fluid" src="../assets/img/carousel-2.png" alt="Image">
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style="max-width: 700px;">
                                    <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Descuento en Tu
                                        Primer Orden</h4>
                                    <h3 class="display-4 text-white font-weight-semi-bold mb-4">Vitaminas</h3>
                                    <RouterLink to="/details" class="btn btn-light py-2 px-3">Cómpralo Ya</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style="width: 45px; height: 45px;">
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style="width: 45px; height: 45px;">
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Featured Start -->
    <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="feature-item text-center border rounded p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor"
                        class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <h5 class="font-weight-semi-bold mb-0">Productos de Calidad</h5>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="feature-item text-center border rounded p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor"
                        class="bi bi-truck" viewBox="0 0 16 16">
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                    </svg>
                    <h5 class="font-weight-semi-bold mb-0">Entrega rapida y eficiente</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="feature-item text-center border rounded p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor"
                        class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path
                            d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        <path
                            d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <h5 class="font-weight-semi-bold mb-0">Seguridad y confianza</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="feature-item text-center border rounded p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor"
                        class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        <path fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <h5 class="font-weight-semi-bold mb-0">Planes de suscripción</h5>
                </div>
            </div>
        </div>
    </div>
    <!-- Featured End -->


    <!-- Categories Start -->
    <div class="container-fluid pt-5">
    <div class="row px-xl-5 pb-3">
        <div class="col-lg-4 col-md-6 pb-1">
            <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
                <p class="text-right">15 Productos</p>
                <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                    <img class="img-fluid img-thumbnail" src="../assets/img/Prod1-3.jpg" alt="Nutrition" style="width: 250px; height: auto;">
                </a>
                <h5 class="font-weight-semi-bold m-0 text-center">Nutrición</h5>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
            <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
                <p class="text-right">15 Productos</p>
                <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                    <img class="img-fluid img-thumbnail" src="../assets/img/Prod1-1.jpg" alt="Proteins" style="max-width: 150px; height: auto;">
                </a>
                <h5 class="font-weight-semi-bold m-0 text-center">Proteínas</h5>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
            <div class="cat-item d-flex flex-column border mb-4" style="padding: 30px;">
                <p class="text-right">15 Productos</p>
                <a href="#" class="cat-img position-relative overflow-hidden mb-3">
                    <img class="img-fluid img-thumbnail" src="../assets/img/Prod1-2.jpg" alt="Vitamins" style="max-width: 220px; height: auto;">
                </a>
                <h5 class="font-weight-semi-bold m-0 text-center">Vitaminas</h5>
            </div>
        </div>
    </div>
</div>




    <!-- Categories End -->


    <!-- Offer Start -->
    <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src="../assets/img/vendor-5.jpg" alt="">
                    <div class="position-relative" style="z-index: 1;">
                        <h5 class="text-uppercase text-primary mb-3">20% de descuento en la primer clase</h5>
                        <h1 class="mb-4 font-weight-semi-bold">CLASES </h1>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Suscribete ahora</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src="../assets/img/vendor-7.jpg" alt="">
                    <div class="position-relative" style="z-index: 1;">
                        <h5 class="text-uppercase text-primary mb-3">20% de descuento en la primera cita</h5>
                        <h1 class="mb-4 font-weight-semi-bold">NUTRIOLOGO</h1>
                        <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Suscribete ahora</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Offer End -->


    <!-- Products Start -->
   <div class="container-fluid pt-5">
    <div class="text-center mb-4">
        <h2 class="section-title px-5"><span class="px-2">Productos en tendencía</span></h2>
    </div>
    <div class="row px-xl-5 pb-3">
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100 mx-auto d-block" src="../assets/img/Prod1-1.jpg" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div class="d-flex justify-content-center">
                        <h6>$123.00</h6>
                        <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100 mx-auto d-block" src="../assets/img/Prod2-1.jpg" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div class="d-flex justify-content-center">
                        <h6>$123.00</h6>
                        <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100 mx-auto d-block" src="../assets/img/Prod3-1.jpg" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div class="d-flex justify-content-center">
                        <h6>$123.00</h6>
                        <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100 mx-auto d-block" src="../assets/img/Prod4-1.jpg" alt="">
                </div>
                <br></br>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                    <div class="d-flex justify-content-center">
                        <h6>$123.00</h6>
                        <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
            </div>
        </div>
        <!-- Repeat for other products -->
    </div>
</div>

    <!-- Products End -->


    <!-- Subscribe Start -->
    <div class="container-fluid bg-secondary my-5">
        <div class="row justify-content-md-center py-5 px-xl-5">
            <div class="col-md-6 col-12 py-5">
                <div class="text-center mb-2 pb-2">
                    <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Mantente actualizado</span></h2>
                    <p>¡Mantente al día con nuestros últimos productos y ofertas en suplementos deportivos! Suscríbete a nuestro boletín y no te pierdas ninguna novedad para mejorar tu rendimiento y bienestar.</p>
                </div>
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-white p-4" placeholder="Email Goes Here">
                        <div class="input-group-append">
                            <button class="btn btn-primary px-4">Suscribete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Subscribe End -->


    <!-- Products Start -->
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Recien llegado</span></h2>
        </div>
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod1-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod2-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod3-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod4-1.jpg" alt="">
                    
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod5-1.jpg" alt="">
                        <br></br>

                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod6-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50.00 mx-auto d-block" src="../assets/img/Prod7-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
           
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-50 mx-auto d-block" src="../assets/img/Prod8-1.jpg" alt="">
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div class="d-flex justify-content-center">
                            <h6>$123.00</h6>
                            <h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="/details" ><i class="fas fa-eye text-primary mr-1"></i>View
                            Detail</a>
                        <a href="" ><i
                                class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Products End -->


   <!-- Vendor Start -->
   <div class="container-fluid py-5">
        <div class="row px-xl-5">
            <div class="col">
                <div class="owl-carousel vendor-carousel">
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/BestLabs.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/DiabloPower.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/Evogen.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/GAT.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/InsaneLabz.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/LanderLan.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/MonkeyPower.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/MusclePharm.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/Mutant.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/NitroLabs.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/Nutrex.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/OmegaLab.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/Ronnie.jpg" alt="">
                    </div>
                    <div class="vendor-item border p-4">
                        <img src="../assets/img/Logos/Muscletech.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Vendor End -->

</template>
<style>
.feature-item {
  background-color: #f8f9fa;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.feature-item h1 {
  font-size: 2.5rem;
}

.feature-item h5 {
  font-size: 1.2rem;
  color: #333;
}
.btn {
    display: inline-block;
    background-color: #6a5acd; /* Color lila */
    color: white; /* Letras blancas */
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-family: 'YourChosenFont', sans-serif; /* Fuente personalizada */
}

.btn:hover {
    background-color: #9370db; /* Cambio de color al pasar el mouse */
}

</style>
<script></script>