
<template> 
    <div class="container border-0">
        <h3>Pedidos en curso</h3>
        <hr width="100%">
        <div class="caja-top container">
            <div class="row">
                <div class="col-4">
                    <h5><strong>Detalles</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Cantidad</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Total a pagar</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Estatus</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Opciones</strong></h5>
                </div>
            </div>
        </div>
        <div class="caja-bottom container border mt-0 mb-0">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-3">
                            <img src="../assets/img/Prod10-1.jpg" width="100%" alt="">
                        </div>
                        <div class="col-9">
                            <h6>Reservatrol Antioxidante</h6>
                            <h6>Calificacion:<div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                            </h6>
                            <h6>Precio: $424.00</h6>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <h6>3</h6>
                </div>
                <div class="col-2">
                    <h6>$1,272.00</h6>
                </div>
                <div class="col-2">
                    <h6>En camino </h6>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn mb-1">Cancelar pedido</button><br>
                    <a href="/contact"><button type="submit" class="btn">Solicitar soporte</button></a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-4">
                    <div class="row">
                        <div class="col-3">
                            <img src="../assets/img/Prod8-1.jpg" width="100%" alt="">
                        </div>
                        <div class="col-9">
                            <h6>Birdman Creatina</h6>
                            <h6>Calificacion:<div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </h6>
                            <h6>Precio: $498.00</h6>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <h6>1</h6>
                </div>
                <div class="col-2">
                    <h6>$498.00</h6>
                </div>
                <div class="col-2">
                    <h6>Validando</h6>
                </div>
                <div class="col-2">
                    <button type="submit" class="btn mb-1">Cancelar pedido</button>
                    <a href="/contact"><button type="submit" class="btn">Solicitar soporte</button></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container border-0">
        <h3>Historial de pedidos</h3>
        <hr>
        <div class="caja-top container">
            <div class="row">
                <div class="col-4">
                    <h5><strong>Detalles</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Cantidad</strong></h5>
                </div>
                <div class="col-2">
                    <h5><strong>Total pagado</strong></h5>
                </div>
                <div class="col-4">
                    <h5><strong>Opciones</strong></h5>
                </div>
            </div>
        </div>
        <div class="caja-bottom container border mt-0 mb-0">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-3">
                            <img src="../assets/img/Prod1-1.jpg" width="100%" alt="">
                        </div>
                        <div class="col-9">
                            <h6>Multivitamínico para hombre</h6>
                            <h6>Calificacion:<div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                            </h6>
                            <h6>Precio: $381.00</h6>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <h6>2</h6>
                </div>
                <div class="col-2">
                    <h6>$762.00</h6>
                </div>
                <div class="col-4">
                    <a href="/details"><button type="submit" class="btn">Volver a comprar</button></a>
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

    padding-top: 1%;
    padding-left: 1%;
    background-color: #edf1ff;
    border-radius: 10px 10px 0px 0px;

}

.caja-bottom {
    padding: 2%;
    border-top: hidden;

    border-radius: 0 0 10px 10px;

    border-radius: 0px 0px 10px 10px;

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
 
