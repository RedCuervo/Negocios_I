<template>
    <div class="container-fluid pt-5">
      <div class="text-center mb-4">
        <h2 class="section-title px-5"><span class="px-2">Contacto Para cualquier consulta</span></h2>
      </div>
      <div class="row px-xl-5">
        <div class="col-lg-7 mb-5">
          <div class="contact-form">
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div class="control-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Tu nombre"
                  required="required"
                  v-model="contact.name"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Tu Correo electronico"
                  required="required"
                  v-model="contact.email"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Tema"
                  required="required"
                  v-model="contact.subject"
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <textarea
                  class="form-control"
                  rows="6"
                  id="message"
                  placeholder="Mensaje"
                  required="required"
                  v-model="contact.message"
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
              <div>
                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 mb-5">
          <h5 class="font-weight-semi-bold mb-3">Pongase en contacto</h5>
          <p>
            ¿Tienes alguna pregunta o necesitas ayuda? No dudes en ponerte en contacto con nosotros.
            Estamos aquí para ayudarte.
          </p>
          <div class="d-flex flex-column mb-3">
            <h5 class="font-weight-semi-bold mb-3">Tienda principal</h5>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-primary mr-3"></i>Av Tecnologíco, Aguascalientes,
              México
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope text-primary mr-3"></i>
              <a href="mailto:platinumsuplements@gmail.com">platinumsuplements@gmail.com</a>
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
            </p>
          </div>
          <div class="d-flex flex-column">
            <h5 class="font-weight-semi-bold mb-3">Store 2</h5>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope text-primary mr-3"></i>info@example.com
            </p>
            <p class="mb-0">
              <i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .container-fluid {
    padding-top: 5rem;
  }
  .text-center {
    margin-bottom: 1.5rem;
  }
  .section-title {
    padding: 0 1rem;
  }
  .row {
    padding: 0 2rem;
  }
  .contact-form {
    background: #f7f7f7;
    padding: 2rem;
    border-radius: 0.5rem;
  }
  .control-group {
    margin-bottom: 1rem;
  }
  .form-control {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  .btn {
    background-color: #8a2be2;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 0.25rem;
  }
  .btn:hover {
    background-color: #6f1db4;
  }
  .font-weight-semi-bold {
    font-weight: 600;
  }
  .text-primary {
    color: #8a2be2 !important;
  }
  .d-flex {
    display: flex;
    flex-direction: column;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  .mb-3 {
    margin-bottom: 1rem;
  }
  .mb-5 {
    margin-bottom: 3rem;
  }
  .mr-3 {
    margin-right: 1rem;
  }
  </style>
  