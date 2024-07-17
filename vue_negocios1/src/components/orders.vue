<template> <h3 class="text-center mb-4">Pedidos en curso</h3>
 <div class="container border-0 mb-3">
    

    <div class="caja-top d-none d-md-block">
        <div class="row text-center">
            <div class="col-md-3">
                <h5 class="mb-0"><strong>Detalles</strong></h5>
            </div>
            <div class="col-md-2">
                <h5 class="mb-0"><strong>Cantidad</strong></h5>
            </div>
            <div class="col-md-2">
                <h5 class="mb-0"><strong>Total a pagar</strong></h5>
            </div>
            <div class="col-md-2">
                <h5 class="mb-0"><strong>Estatus</strong></h5>
            </div>
            <div class="col-md-2">
                <h5 class="mb-0"><strong>Opciones</strong></h5>
            </div>
        </div>
    </div>

    <div class="caja-bottom border mt-0 mb-0">
        <div class="row align-items-center py-3 border-bottom">
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center">
                    <img class="img-fluid me-3" src="../assets/img/Prod10-1.jpg" alt="Reservatrol Antioxidante" style="max-width: 70px;">
                    <div>
                        <h6 class="mb-1">Reservatrol Antioxidante</h6>
                        <div class="rating d-inline">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half"></i>
                        </div>
                        <h6 class="mb-1">Precio: $424.00</h6>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">3</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">$1,272.00</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">En camino</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <button type="submit" class="btn mb-2 w-100">Cancelar pedido</button>
                <button type="submit" class="btn w-100">Solicitar soporte</button>
            </div>
        </div>
        <div class="row align-items-center py-3">
            <div class="col-12 col-md-4">
                <div class="d-flex align-items-center">
                    <img class="img-fluid me-3" src="../assets/img/Prod8-1.jpg" alt="Birdman Creatina" style="max-width: 70px;">
                    <div>
                        <h6 class="mb-1">Birdman Creatina</h6>
                        <div class="rating d-inline">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h6 class="mb-1">Precio: $498.00</h6>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">1</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">$498.00</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">Validando</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <button type="submit" class="btn mb-2 w-100">Cancelar pedido</button>
                <button type="submit" class="btn w-100">Solicitar soporte</button>
            </div>
        </div>
    </div>
</div>

<h3 class="text-center mb-4">Historial de pedidos</h3>
<div class="container border mb-4">
    <div class="caja-top d-none d-md-block">
        <div class="row text-center">
            <div class="col-md-3">
                <h5><strong>Detalles</strong></h5>
            </div>
            <div class="col-md-2">
                <h5><strong>Cantidad</strong></h5>
            </div>
            <div class="col-md-2">
                <h5><strong>Total a pagar</strong></h5>
            </div>
            <div class="col-md-3">
                <h5><strong>Estatus</strong></h5>
            </div>
            <div class="col-md-2">
                <h5><strong>Opciones</strong></h5>
            </div>
        </div>
    </div>

    <div class="caja-bottom border mt-0">
        <div class="row align-items-center py-3 border-bottom">
            <div class="col-12 col-md-3 mb-3 mb-md-0">
                <div class="d-flex align-items-center">
                    <img class="img-fluid me-3" src="../assets/img/Prod1-1.jpg" alt="Multivitamínico para hombre" style="max-width: 70px;">
                    <div>
                        <h6 class="mb-1">Multivitamínico para hombre</h6>
                        <div class="rating d-inline">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half"></i>
                        </div>
                        <h6 class="mb-1">Precio: $381.00</h6>
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">2</h6>
            </div>
            <div class="col-6 col-md-2 text-center">
                <h6 class="mb-0">$762.00</h6>
            </div>
            <div class="col-12 col-md-3 text-center">
                <h6 class="mb-0">Validado</h6>
            </div>
            <div class="col-12 col-md-2 text-center">
                <button type="submit" class="btn mb-2 w-100">Volver a comprar</button>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>
hr {
    border: 1px solid black;
}

.container {
    padding: 1%;
}

.caja-top {
    padding: 1%;
    background-color: #edf1ff;
    border-radius: 10px 10px 0 0;
}

.caja-bottom {
    padding: 2%;
    border-top: hidden;
    border-radius: 0 0 10px 10px;
}

.btn {
    background-color: rgb(101, 67, 199);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.3s ease-in-out;
}

.rating {
    display: inline-flex;
}

@media (max-width: 767.98px) {
    .btn {
        font-size: 0.7rem;
        padding: 0.5rem 1rem;
    }

    .caja-bottom .row {
        flex-direction: column;
        text-align: center;
    }

    .caja-bottom .col-4, .caja-bottom .col-2 {
        margin-bottom: 1rem;
    }
}
</style>
