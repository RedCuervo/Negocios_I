<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
      <form @submit.prevent="handleSubmit">
        <!-- Información de Envío -->
        <div class="section">
          <h2>Información de Envío</h2>
          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input type="text" id="name" v-model="shippingInfo.name" required />
          </div>
          <div class="form-group">
            <label for="address">Dirección</label>
            <input type="text" id="address" v-model="shippingInfo.address" required />
          </div>
          <div class="form-group">
            <label for="city">Ciudad</label>
            <input type="text" id="city" v-model="shippingInfo.city" required />
          </div>
          <div class="form-group">
            <label for="postalCode">Código Postal</label>
            <input type="text" id="postalCode" v-model="shippingInfo.postalCode" required />
          </div>
        </div>
  
        <!-- Información de Pago -->
        <div class="section">
          <h2>Información de Pago</h2>
          <div class="form-group">
            <label for="cardNumber">Número de Tarjeta</label>
            <input type="text" id="cardNumber" v-model="paymentInfo.cardNumber" required />
          </div>
          <div class="form-group">
            <label for="expiryDate">Fecha de Expiración</label>
            <input type="text" id="expiryDate" v-model="paymentInfo.expiryDate" required />
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" v-model="paymentInfo.cvv" required />
          </div>
        </div>
  
        <!-- Resumen del Pedido -->
        <div class="section">
          <h2>Resumen del Pedido</h2>
          <div class="order-summary">
            <div class="order-item" v-for="item in orderItems" :key="item.id">
              <span>{{ item.name }}</span>
              <span>{{ item.price | currency }}</span>
            </div>
            <div class="order-total">
              <span>Total:</span>
              <span>{{ orderTotal | currency }}</span>
            </div>
          </div>
        </div>
  
        <!-- Botón de Checkout -->
        <button type="submit" class="checkout-button">Completar Pedido</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shippingInfo: {
          name: "",
          address: "",
          city: "",
          postalCode: ""
        },
        paymentInfo: {
          cardNumber: "",
          expiryDate: "",
          cvv: ""
        },
        orderItems: [
          { id: 1, name: "Producto 1", price: 10.0 },
          { id: 2, name: "Producto 2", price: 20.0 }
        ]
      };
    },
    computed: {
      orderTotal() {
        return this.orderItems.reduce((total, item) => total + item.price, 0);
      }
    },
    methods: {
      handleSubmit() {
        alert("Pedido completado!");
      }
    },
    filters: {
      currency(value) {
        return `$${value.toFixed(2)}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f7f4fb;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1, h2 {
    color: #8a2be2; /* Color lila */
  }
  
  .section {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #4c2a7f;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .order-summary {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
  
  .order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .order-total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  
  .checkout-button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    background-color: #8a2be2; /* Color lila */
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .checkout-button:hover {
    background-color: #6a1a9a; /* Color lila más oscuro */
  }
  </style>
  