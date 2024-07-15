<template>
  <div class="container">
    <div class="profile-header">
      <img src="https://via.placeholder.com/150" alt="Foto de perfil">
      <h1>Juan Pérez</h1>
      <h2>Cliente</h2>
    </div>
    
    <div class="profile-content">
      <h3>Detalles Personales</h3>
      <div class="card">
        <div class="card-body">
          <p><strong>Nombre:</strong> Juan Pérez</p>
          <p><strong>Edad:</strong> 30 años</p>
          <p><strong>Ubicación:</strong> Aguascalientes, México</p>
          <p><strong>Objetivo:</strong> Ganar masa muscular</p>
          <p><strong>Suplementos favoritos:</strong> Proteína de suero, Creatina, Multivitamínicos</p>
          <p><strong>Nivel de actividad:</strong> Alto</p>
        </div>
      </div>

      <h3>Historial de Compras</h3>
      <div class="card">
        <div class="card-body">
          <ul>
            <li>Compra 1: Proteína de suero - $30</li>
            <li>Compra 2: Creatina - $20</li>
            <li>Compra 3: Multivitamínicos - $15</li>
          </ul>
        </div>
      </div>
      
      <h3>Clases Programadas</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Cita 1:</strong> Yoga - Martes 10:00 AM</p>
            <p><strong>Cita 2:</strong> Yoga - Jueves 15:00 PM</p>
            <p><strong>Cita 3:</strong> Zumba - Viernes 09:30 AM</p>
            <button > <a href="/calendario"> Agregar cita</a></button>
          </div>
          
        </div>

      <h3>Configuración de la Cuenta</h3>
      <div class="card">
        <div class="card-body">
          <p><strong>Correo Electrónico:</strong> juan.perez@example.com</p>
          <p><strong>Teléfono:</strong> +1234567890</p>
          <p><strong>Contraseña:</strong> **********</p>
          <a href="#" class="btn btn-primary">Editar Información</a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.profile-header {
  text-align: center;
  margin-bottom: 30px;
}
.profile-header img {
  border-radius: 50%;
  margin-bottom: 20px;
}
.profile-header h1, .profile-header h2 {
  margin: 0;
}
.profile-header h2 {
  color: #6c757d;
}
.profile-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.profile-content h3 {
  margin-bottom: 20px;
}
.profile-content .card {
  margin-bottom: 20px;
}
</style>
