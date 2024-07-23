<template>
    <!-- Shop Start -->
    <div class="container-fluid pt-5">
        <div class="row px-xl-5">
            <!-- Shop Sidebar Start -->
            <div class="col-lg-3 col-md-12">
                <!-- Filter by Price Start -->
                <div class="border-bottom mb-4 pb-4">
                    <h5 class="font-weight-semi-bold mb-4">Filtrado por Precio</h5>
                    <form>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" checked id="price-all">
                            <label class="custom-control-label" for="price-all">All Price</label>
                            <span class="badge border font-weight-normal">1000</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="price-1">
                            <label class="custom-control-label" for="price-1">$0 - $100</label>
                            <span class="badge border font-weight-normal">150</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="price-2">
                            <label class="custom-control-label" for="price-2">$100 - $200</label>
                            <span class="badge border font-weight-normal">295</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="price-3">
                            <label class="custom-control-label" for="price-3">$200 - $300</label>
                            <span class="badge border font-weight-normal">246</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="price-4">
                            <label class="custom-control-label" for="price-4">$300 - $400</label>
                            <span class="badge border font-weight-normal">145</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" class="custom-control-input" id="price-5">
                            <label class="custom-control-label" for="price-5">$400 - $500</label>
                            <span class="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                <!-- Filter by Price End -->
                <!-- Filter by Color Start -->
                <div class="border-bottom mb-4 pb-4">
                    <h5 class="font-weight-semi-bold mb-4">Filtrado por Color</h5>
                    <form>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" checked id="color-all">
                            <label class="custom-control-label" for="color-all">All Color</label>
                            <span class="badge border font-weight-normal">1000</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="color-1">
                            <label class="custom-control-label" for="color-1">Black</label>
                            <span class="badge border font-weight-normal">150</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="color-2">
                            <label class="custom-control-label" for="color-2">White</label>
                            <span class="badge border font-weight-normal">295</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="color-3">
                            <label class="custom-control-label" for="color-3">Red</label>
                            <span class="badge border font-weight-normal">246</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="color-4">
                            <label class="custom-control-label" for="color-4">Blue</label>
                            <span class="badge border font-weight-normal">145</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" class="custom-control-input" id="color-5">
                            <label class="custom-control-label" for="color-5">Green</label>
                            <span class="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                <!-- Filter by Color End -->

                <!-- Filter by Size Start -->
                <div class="mb-5">
                    <h5 class="font-weight-semi-bold mb-4">Filtrado por Tamaño</h5>
                    <form>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" checked id="size-all">
                            <label class="custom-control-label" for="size-all">All Size</label>
                            <span class="badge border font-weight-normal">1000</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="size-1">
                            <label class="custom-control-label" for="size-1">XS</label>
                            <span class="badge border font-weight-normal">150</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="size-2">
                            <label class="custom-control-label" for="size-2">S</label>
                            <span class="badge border font-weight-normal">295</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="size-3">
                            <label class="custom-control-label" for="size-3">M</label>
                            <span class="badge border font-weight-normal">246</span>
                        </div>
                        <div
                            class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" class="custom-control-input" id="size-4">
                            <label class="custom-control-label" for="size-4">L</label>
                            <span class="badge border font-weight-normal">145</span>
                        </div>
                        <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" class="custom-control-input" id="size-5">
                            <label class="custom-control-label" for="size-5">XL</label>
                            <span class="badge border font-weight-normal">168</span>
                        </div>
                    </form>
                </div>
                <!-- Filter by Size End -->
            </div>
            <!-- Shop Sidebar End -->

            <!-- Shop Product Start -->
            <div class="col-lg-9 col-md-12">
                <div class="row pb-3">
                    <div class="col-12 pb-1">
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search by name">
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-transparent text-primary">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div class="dropdown ml-4">
                                <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                            Sort by
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a class="dropdown-item" href="#">Nuevo</a>
                                    <a class="dropdown-item" href="#">Popularidad</a>
                                    <a class="dropdown-item" href="#">Mejor Calificados</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 border ml-5 mr-5">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod1-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Multivitamínico para hombre</strong></p>
                                <p>Precio: $381.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-3 mr-3">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod2-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Vitamina C y Raíz de Jengibre</strong></p>
                                <p>Precio: $289.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-5 mr-5">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod3-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Citrato de Calcio</strong></p>
                                <p>Precio: $404.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3 border ml-5 mr-3">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod4-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>EVOLUTION, Proteína de Suero de Leche</strong></p>
                                <p>Precio: $604.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-5 mr-3">
                            <div class="container mb-3 mt-5 mb-5 pb-4">
                                <img src="../assets/img/Prod5-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Birdman Falcon Protein Proteina Vegetal</strong></p>
                                <p>Precio: $1,340.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-5 mr-5">
                            <div class="container mb-4">
                                <img src="../assets/img/Prod6-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Proteína clara de huevo</strong></p><br>
                                <p>Precio: $849.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 mb-3">
                        <div class="col-3 border ml-5 mr-5">
                            <div class="container mb-5 pb-5 pt-5 mt-5">
                                <img src="../assets/img/Prod7-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Elemental Performance Pre Workout</strong></p>
                                <p>Precio: $560.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-3 mr-3">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod8-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Birdman Creatina</strong></p><br>
                                <p>Precio: $498.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                        <div class="col-3 border ml-5 mr-5">
                            <div class="container mb-3">
                                <img src="../assets/img/Prod10-1.jpg" width="100%">
                            </div>
                            <div>
                                <p><strong>Reservatrol Antioxidante</strong></p><br>
                                <p>Precio: $424.00</p>
                            </div>
                            <div class="mb-3 row ml-1">
                                <a href="/details"><i class="fas fa-eye text-primary mr-1"></i>Ver producto</a>
                                <a href="/cart"><i class="fas fa-shopping-cart text-primary mr-1"></i>Añadir al carrito</a>
                            </div>
                        </div>
                    </div>
                    
                    

                    <div class="col-12 pb-1">
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-center mb-3">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Shop Product End -->
        </div>
    </div>
    <!-- Shop End -->
</template>
<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Multivitamínico para hombre",
                    price: 381.00,
                    original_price: 381.00,
                    image: "../assets/img/Prod1-1.jpg"
                },
                {
                    id: 2,
                    name: "Vitamina C y Raíz de Jengibre",
                    price: 289.00,
                    original_price: 289.00,
                    image: "../assets/img/Prod2-1.jpg"
                },
                {
                    id: 3,
                    name: "Citrato de Calcio",
                    price: 404.00,
                    original_price: 404.00,
                    image: '../assets/img/Prod3-1.jpg'
                },
                {
                    id: 4,
                    name: "EVOLUTION, Proteína de Suero de Leche",
                    price: 604.00,
                    original_price: 604.00,
                    image: "../assets/img/Prod4-1.jpg"
                },
                {
                    id: 5,
                    name: "Birdman Falcon Protein Proteina Vegetal ",
                    price: 1340.00,
                    original_price: 1340.00,
                    image: "../assets/img/Prod5-1.jpg"
                },
                {
                    id: 6,
                    name: "Proteína clara de huevo",
                    price: 849.00,
                    original_price: 849.00,
                    image: "../assets/img/Prod6-1.jpg"
                },
                {
                    id: 7,
                    name: "Elemental Performance Pre Workout",
                    price: 560.00,
                    original_price: 560.00,
                    image: "../assets/img/Prod7-1.jpg"
                },
                {
                    id: 8,
                    name: "Birdman Creatina",
                    price: 498.00,
                    original_price: 498.00,
                    image: "../assets/img/Prod8-1.jpg"
                }
            ]
        };
    }
}
</script>


<style scoped>
.btn {
    display: inline-block;
    background-color: #6a5acd;
    /* Color lila */
    color: white;
    /* Letras blancas */
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-family: 'YourChosenFont', sans-serif;
    /* Fuente personalizada */
}

.btn:hover {
    background-color: #9370db;
    /* Cambio de color al pasar el mouse */
}
</style>
