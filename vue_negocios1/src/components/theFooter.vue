<template>
    <footer>
<!-- Footer Start -->
<div class="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div class="row px-xl-5 pt-5">
            <div class="col-lg-5 col-md-12 mb-5 pr-3 pr-xl-5">
                <a href="" class="text-decoration-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold"><span style="color: var(--color11) !important;" class="text-primary font-weight-bold border px-3 mr-1" >Platinum</span>Suplements</h1>
                </a>
                <p>Nuestra misión es proporcionar a nuestros clientes los mejores suplementos deportivos y productos relacionados, asegurando calidad, variedad y asesoramiento experto para apoyar sus metas de salud y fitness.</p>
                <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Av. Tecnologíco, Aguascalientes, México</p>
                <p class="mb-2">
                    <i class="fa fa-envelope text-primary mr-3"></i>
                    <a href="mailto:platinumsuplements@gmail.com">platinumsuplements@gmail.com</a>
                </p>
                <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div class="col-lg-7 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Preguntas</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2" href="/FAQ"><i class="fa fa-angle-right mr-2"></i>Realizar pedido</a>
                            <a class="text-dark mb-2" href="/shop"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a class="text-dark mb-2" href="/shop"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a class="text-dark mb-2" href="/cart"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a class="text-dark mb-2" href="/checkout"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a class="text-dark" href="/contact"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Nosotros</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <RouterLink to="/AboutUs" class="text-dark mb-2"><i class="fa fa-angle-right mr-2"></i>Quienes somos</RouterLink>
                            <RouterLink to="/Terms" class="text-dark mb-2"><i class="fa fa-angle-right mr-2"></i>Terminos y condiciones</RouterLink>
                            <a class="text-dark mb-2" href="/FAQl"><i class="fa fa-angle-right mr-2"></i>Preguntas y respuestas</a>
                            <RouterLink to="/privacy" class="text-dark mb-2"><i class="fa fa-angle-right mr-2"></i>Aviso de privacidad</RouterLink>
                            <a class="text-dark mb-2" href="/contact"><i class="fa fa-angle-right mr-2"></i>Contacto</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Boletín</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 py-4" placeholder="Tu nombre" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 py-4" placeholder="Tu correo electronico"
                                    required="required" />
                            </div>
                            <div>
                                <button class="btn btn-block border-0 py-3" type="submit" style="background-color: #5E9188; color: white;">Suscríbete ahora</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-top border-light mx-xl-5 py-4">
            <div class="col-md-6 px-xl-0">
                <p class="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a class="text-dark font-weight-semi-bold" href="#">Platinum Suplements</a>. Todos los derechos reservados.
                </p>
            </div>
            <div class="col-md-6 px-xl-0 text-center text-md-right">
                <img class="img-fluid" src="../assets/img/payments.png" alt="">
            </div>
        </div>
    </div>
    <!-- Footer End -->
    </footer>
</template>
<script></script>
<style>
footer{
    bottom: 0;
}
</style>