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
          <h5 class="font-weight-semi-bold mb-3">Correo de contacto</h5>
          <p class="mb-2">
            <i class="fa fa-envelope text-primary mr-3"></i>
            <a href="mailto:platinumsuplements@gmail.com">platinumsuplements@gmail.com</a>
          </p>
          <h5 class="font-weight-semi-bold mb-3">Numero de contacto</h5>
          <p class="mb-2">
            <a href="tel:+01234567890">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-telephone-fill mr-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>+012 345 67890
            </a>
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
  