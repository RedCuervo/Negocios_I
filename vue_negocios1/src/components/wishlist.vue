<template>
    <div class="container mt-5">
        <h3>Lista de deseados</h3>
        <div class="caja-top container">
            <div class="row">
                <div class="col-4">
                    <h5><strong>Detalles</strong></h5>
                </div>
                <div class="col-4">
                    <h5><strong>Estatus</strong></h5>
                </div>
                <div class="col-4">
                    <h5><strong>Opciones</strong></h5>
                </div>
            </div>
        </div>
        <div class="caja-bottom container  mt-0 mb-0">
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
                <div class="col-4">
                    <h6>Disponible</h6>
                </div>
                <div class="col-4">
                    <a href="/details"><button type="submit" class="btn">Ver producto</button></a><br>
                    <a href="/cart"><button type="submit" class="btn">Añadir al carrito</button></a><br>
                    <a href="/main"><button type="submit" class="btn">Remover</button></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.caja {
    border: 1px solid black;
}

.btn {
    background-color: rgb(101, 67, 199);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: .8rem;
    margin-top: 1.2%;
    transition: background-color 0.3s ease-in-out;
}
</style>