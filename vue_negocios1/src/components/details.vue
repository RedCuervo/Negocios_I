<template>
    <div class="container border-0 pt-3 my-3">
        <center>
            <div class="row">
                <div class="col-sm-6 border-0 mx-4 mb-3">
                    <center>
                        <img src="../assets/img/Prod1-1.jpg" width="70%" alt="" srcset="">
                    </center>
                </div>
                <div class="col-sm-5 mb-3 pb-3">
                    <div class="container border-0 my-4">
                        <h5><strong>Multivitamínico para hombre </strong></h5>
                    </div>
                    <div class="container border-0">
                        <h5 align="left"><strong>Descripción:</strong></h5>
                        <p align="justify">Multivitamínico para Hombre 180 Cápsulas de 650 mg por cápsula. Creatina
                            Monohidratada, BCAA
                            2:1:1 (L-Leucina, L-Isoleucina, L-Valina) y L-Arginina. Ingredientes Naturales. Mens Blend B
                            Life.</p>
                    </div>
                    <div class="container border-0">
                        <h5 align="left"><strong>Calificacion: </strong>
                            <div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                            </div>
                        </h5>
                    </div>
                    <div class="container border-0">
                        <h5 align="left"><strong>Precio:</strong></h5>
                        <p align="left">$ 381.00</p>
                    </div>
                    <div class="container border-0">
                        <h5 align="left"><strong>Stock:</strong></h5>
                        <p align="left">26</p>
                    </div>
                    <div class="container border-0">
                        <h5 align="left"><strong>Cantidad</strong></h5>
                        <div align="left" class="quantity-container">
                            <button class="quantity-button minus" onclick="decrementQuantity()">-</button>
                            <input type="text" id="quantity" value="1" min="1" max="26">
                            <button class="quantity-button plus" onclick="incrementQuantity()">+</button>
                            <center>
                                <a href="/cart">
                                    <button type="submit" class="btn1">Añadir al carrito</button>
                                </a>
                                <a href="/wishlist">
                                <button type="button" class="btn1">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </button></a> 
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    </div>
    <div class="container border-0 mt-1 mb-1">
        <div class="container border-top-0 border-right-0 border-left-0 mt-3 mb-3">
            <h5><strong>Reseñas</strong></h5>
        </div>
        <div class="review container p-3 mb-2">
            <h6><strong>Escribre tu propia experiencia</strong></h6>
            <form>
                <textarea rows="5" class="form-control" placeholder="Ingrese su reseña"></textarea>
                <div class="container border-0 p-1 mb-2 mt-1">
                    <h6><strong>Califica este producto</strong></h6>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <button type="submit" class="btn">Enviar</button>
            </form>
        </div>

        <div class="review container p-3 mb-2">
            <h6><strong>María G. | 07-07-2024 <br> Calificación: <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div></strong></h6>
            <p align="justify">La Proteína Isolate Sabor Chocolate es simplemente deliciosa. La uso después de mis
                entrenamientos y he notado una mejora considerable en mi recuperación muscular. Además, se disuelve
                fácilmente en agua o leche sin dejar grumos, lo cual es un gran plus. El sabor es auténtico a chocolate
                y no sabe artificial como otras marcas que he probado. Definitivamente, la recomiendo.</p>
        </div>
        <div class="review container p-3 mb-2">
            <h6><strong>Carlos R. | 07-07-2024 <br> Calificación: <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div></strong></h6>
            <p align="justify">Estoy muy satisfecho con la Proteína Isolate Sabor Chocolate. El sabor es excelente y no
                demasiado dulce, lo que es perfecto para mí. La tomo todos los días por la mañana y me ayuda a
                mantenerme lleno hasta la siguiente comida. También he notado que mis músculos se sienten más definidos
                desde que la uso. Una excelente adición a mi rutina de fitness.</p>
        </div>
        <div class="review container p-3 mb-2">
            <h6><strong>Ana L. | 07-07-2024 <br>Calificación: <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                    </div> </strong></h6>
            <p align="justify">La Proteína Isolate Sabor Chocolate ha superado mis expectativas. Tenía dudas sobre el
                sabor y la textura, pero me sorprendió gratamente. Se mezcla bien y el sabor a chocolate es muy
                agradable, sin ser empalagoso. He notado una mejora en mi energía y en la recuperación
                post-entrenamiento. Sin duda, seguiré comprándola.</p>
        </div>
        <div class="review container p-3 mb-2">
            <h6><strong>Javier M. | 07-07-2024 <br> Calificación: <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div></strong></h6>
            <p align="justify">Esta proteína es increíble. La Proteína Isolate Sabor Chocolate tiene un sabor auténtico
                y es fácil de mezclar. La utilizo después de cada sesión de gimnasio y siento que me ha ayudado a ganar
                masa muscular más rápidamente. No he tenido problemas digestivos, lo cual es importante para mí, ya que
                tengo un estómago sensible. Recomiendo esta proteína a cualquiera que busque calidad y buen sabor.</p>
        </div>
    </div>
</template>

<style scoped>
.review {
    border-radius: 20px;
}

.quantity-container input {
    width: 80%;
}

.container {
    border: 1px solid black;
}

.btn {
    background-color: rgb(101, 67, 199);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
}

.btn1 {
    margin-top: 4%;
    background-color: rgb(101, 67, 199);
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
    margin-right: 6%;
}

.btn:hover {
    background-color: #3a006e;
    /* Verde más oscuro */
}

@media (max-width: 760px) {
    .container {
        background-color: #3a006e;
    }
}
</style>