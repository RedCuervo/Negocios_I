<template>
       
    <div class="container pt-3 my-3">
     <div class="row">
        <div class="col-sm-6 border mx-4 mb-3">
            <center>
                <img src="https://yaoca.com/cdn/shop/products/arte1.jpg?v=1704416955" width="70%" alt="" srcset="">
            </center>
          </div>
          <div class="col-sm-5 mx-3 mb-3 pb-3">
            <div class="container my-4">
                <h5 align="center"><strong>Proteína Isolate Sabor Chocolate 1 Kg </strong></h5>
            </div>
            <div class="container">
                <h5><strong>Descripción:</strong></h5>
                <p>Es un macronutriente esencial para el crecimiento y el mantenimiento de las estructuras corporales.</p>
            </div>
            <div class="container">
                <h5><strong>Precio:</strong></h5>
                <p>$ 990.00 <br>Los gastos de envío se calculan en la pantalla de pagos. </p>
            </div>
            <div class="container">
                <h5><strong>Stock:</strong></h5>
                <p>26</p>
            </div>
            <div class="container">
                <h5><strong>Cantidad</strong></h5>
                    <div class="quantity-container">
                        <button class="quantity-button minus" onclick="decrementQuantity()">-</button>
                        <input type="text" id="quantity" value="1" min="1" max="26">
                        <button class="quantity-button plus" onclick="incrementQuantity()">+</button>
                        <button class="add-to-cart-button" onclick="addToCart()">Agregar al carrito</button>
                    </div>    
            </div>
          </div>
     </div>
    </div>

    <div class="container mt-1 mb-1">
        <div class="container border-bottom mt-3 mb-3">
            <h5><strong>Reseñas</strong></h5>
        </div>
        <div class="container border p-3 mb-2">
            <h6><strong>Escribre tu propia experiencia</strong></h6>
            <form>
            <textarea rows="5"class="form-control" placeholder="Ingrese su reseña"></textarea> <br>
            <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    
        <div class="container border p-3 mb-2">
            <h6><strong>María G. | 07-07-2024</strong></h6>
            <p align="justify">La Proteína Isolate Sabor Chocolate es simplemente deliciosa. La uso después de mis entrenamientos y he notado una mejora considerable en mi recuperación muscular. Además, se disuelve fácilmente en agua o leche sin dejar grumos, lo cual es un gran plus. El sabor es auténtico a chocolate y no sabe artificial como otras marcas que he probado. Definitivamente, la recomiendo.</p>
        </div>
        <div class="container border p-3 mb-2">
            <h6><strong>Carlos R. | 07-07-2024</strong></h6>
            <p align="justify">Estoy muy satisfecho con la Proteína Isolate Sabor Chocolate. El sabor es excelente y no demasiado dulce, lo que es perfecto para mí. La tomo todos los días por la mañana y me ayuda a mantenerme lleno hasta la siguiente comida. También he notado que mis músculos se sienten más definidos desde que la uso. Una excelente adición a mi rutina de fitness.</p>
        </div>
        <div class="container border p-3 mb-2">
            <h6><strong>Ana L. | 07-07-2024</strong></h6>
            <p align="justify">La Proteína Isolate Sabor Chocolate ha superado mis expectativas. Tenía dudas sobre el sabor y la textura, pero me sorprendió gratamente. Se mezcla bien y el sabor a chocolate es muy agradable, sin ser empalagoso. He notado una mejora en mi energía y en la recuperación post-entrenamiento. Sin duda, seguiré comprándola.</p>
        </div>
        <div class="container border p-3 mb-2">
            <h6><strong>Javier M. | 07-07-2024</strong></h6>
            <p align="justify">Esta proteína es increíble. La Proteína Isolate Sabor Chocolate tiene un sabor auténtico y es fácil de mezclar. La utilizo después de cada sesión de gimnasio y siento que me ha ayudado a ganar masa muscular más rápidamente. No he tenido problemas digestivos, lo cual es importante para mí, ya que tengo un estómago sensible. Recomiendo esta proteína a cualquiera que busque calidad y buen sabor.</p>
        </div>
    </div>
</template>

<style>

</style>