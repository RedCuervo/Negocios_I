<template>
    <div class="container-fluid pt-5">
      <div class="text-center mb-4">
        <h2 class="section-title"><span class="px-2">Panel de Administración</span></h2>
      </div>
  
      <!-- Sección de Clientes -->
      <div class="container px-xl-5 mb-5">
        <h3 class="section-subtitle mb-4">Clientes Agregados</h3>
        <form @submit.prevent="agregarCliente" class="mb-4">
          <div class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Nombre del Cliente" v-model="nuevoCliente.nombre" required>
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control" placeholder="Correo Electrónico" v-model="nuevoCliente.email" required>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-purple mt-3">Agregar Cliente</button>
          </div>
        </form>
        <div v-if="clientes.length === 0" class="alert alert-info">No hay clientes agregados.</div>
        <div v-else>
          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(cliente, index) in clientes" :key="index">
              <span class="fw-bold">{{ cliente.nombre }}</span> - <span>{{ cliente.email }}</span>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Sección de Pedidos -->
      <div class="container px-xl-5 mb-5">
        <h3 class="section-subtitle mb-4">Pedidos de Vitaminas (En Curso)</h3>
        <div v-if="pedidosEnCurso.length === 0" class="alert alert-info">No hay pedidos en curso.</div>
        <div v-else>
          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(pedido, index) in pedidosEnCurso" :key="index">
              <div class="fw-bold mb-2">{{ pedido.detalle }}</div>
              <div class="mb-2">{{ pedido.detalles }}</div>
              <div><span class="fw-bold">Estado:</span> {{ pedido.estado }}</div>
            </li>
          </ul>
        </div>
        <form @submit.prevent="agregarPedido" class="mt-4">
          <div class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Detalle del Pedido" v-model="nuevoPedido.detalle" required>
            </div>
            <div class="col-md-6">
              <textarea class="form-control" rows="3" placeholder="Detalles Adicionales" v-model="nuevoPedido.detalles"></textarea>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-purple mt-3">Agregar Pedido</button>
          </div>
        </form>
      </div>
  
      <!-- Sección de Nutriólogos -->
      <div class="container px-xl-5 mb-5">
        <h3 class="section-subtitle mb-4">Nutriólogos</h3>
        <form @submit.prevent="agregarNutriologo" class="mb-4">
          <div class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Nombre del Nutriólogo" v-model="nuevoNutriologo.nombre" required>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Rama Especializada" v-model="nuevoNutriologo.especialidad" required>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-purple mt-3">Agregar Nutriólogo</button>
          </div>
        </form>
        <div v-if="nutriologos.length === 0" class="alert alert-info">No hay nutriólogos registrados.</div>
        <div v-else>
          <ul class="list-group mt-3">
            <li class="list-group-item" v-for="(nutriologo, index) in nutriologos" :key="index">
              <span class="fw-bold">{{ nutriologo.nombre }}</span> - <span>{{ nutriologo.especialidad }}</span>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Sección de Agregar Producto -->
      <div class="container px-xl-5 mb-5">
        <h3 class="section-subtitle mb-4">Agregar Producto</h3>
        <form @submit.prevent="agregarProducto" class="mb-4">
          <div class="row g-3">
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Nombre del Producto" v-model="nuevoProducto.nombre" required>
            </div>
            <div class="col-md-6">
              <textarea class="form-control" rows="3" placeholder="Detalles del Producto" v-model="nuevoProducto.detalles"></textarea>
            </div>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="URL de la Imagen" v-model="nuevoProducto.imagenUrl">
          </div>
          <div>
            <button type="submit" class="btn btn-purple mt-3">Agregar Producto</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clientes: [],
        pedidos: [
          { detalle: 'Pedido de Vitaminas A', detalles: 'Detalles adicionales del pedido A', estado: 'En curso' },
          { detalle: 'Pedido de Vitaminas B', detalles: 'Detalles adicionales del pedido B', estado: 'En curso' },
          { detalle: 'Pedido de Vitaminas C', detalles: 'Detalles adicionales del pedido C', estado: 'En camino' }
        ],
        nutriologos: [],
        productos: [],
        nuevoCliente: {
          nombre: '',
          email: ''
        },
        nuevoPedido: {
          detalle: '',
          detalles: ''
        },
        nuevoNutriologo: {
          nombre: '',
          especialidad: ''
        },
        nuevoProducto: {
          nombre: '',
          detalles: '',
          imagenUrl: ''
        }
      };
    },
    methods: {
      agregarCliente() {
        this.clientes.push({
          nombre: this.nuevoCliente.nombre,
          email: this.nuevoCliente.email
        });
        this.nuevoCliente.nombre = '';
        this.nuevoCliente.email = '';
      },
      agregarPedido() {
        this.pedidos.push({
          detalle: this.nuevoPedido.detalle,
          detalles: this.nuevoPedido.detalles,
          estado: 'En curso' // Nuevo pedido siempre se agrega como "En curso"
        });
        this.nuevoPedido.detalle = '';
        this.nuevoPedido.detalles = '';
      },
      agregarNutriologo() {
        this.nutriologos.push({
          nombre: this.nuevoNutriologo.nombre,
          especialidad: this.nuevoNutriologo.especialidad
        });
        this.nuevoNutriologo.nombre = '';
        this.nuevoNutriologo.especialidad = '';
      },
      agregarProducto() {
        this.productos.push({
          nombre: this.nuevoProducto.nombre,
          detalles: this.nuevoProducto.detalles,
          imagenUrl: this.nuevoProducto.imagenUrl
        });
        this.nuevoProducto.nombre = '';
        this.nuevoProducto.detalles = '';
        this.nuevoProducto.imagenUrl = '';
      }
    },
    computed: {
      pedidosEnCurso() {
        return this.pedidos.filter(pedido => pedido.estado === 'En curso');
      }
    }
  };
  </script>
  
  <style scoped>
  .container-fluid {
    padding-top: 5rem;
  }
  .section-title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  .section-subtitle {
    font-size: 2rem;
    color: #666;
    margin-bottom: 1.2rem;
  }
  .form-control {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  .btn-purple {
    background-color: #8a2be2;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 0.25rem;
  }
  .btn-purple:hover {
    background-color: #6f1db4;
  }
  .list-group-item {
    padding: 1rem;
    border: 1px solid #ccc;
    margin-bottom: 0.5rem;
  }
  .fw-bold {
    font-weight: bold;
  }
  </style>
  