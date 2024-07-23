<template>
    <div class="container">
      <div class="profile-header">
        <img src="https://via.placeholder.com/150" alt="Foto de perfil">
        <h1>Maria García</h1>
        <h2>Nutrióloga</h2>
      </div>
      
      <div class="profile-content">
        <h3>Clientes Suscritos</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Cliente 1:</strong> Ana Rodríguez</p>
            <p><strong>Cliente 2:</strong> Pedro Martínez</p>
            <p><strong>Cliente 3:</strong> Laura Gutiérrez</p>
          </div>
        </div>
  
        <h3>Clases Programadas</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Cita 1:</strong> Desarrollo de masa muscular - Martes 10:00 AM</p>
            <p><strong>Cita 2:</strong> Nutrición deportiva - Jueves 15:00 PM</p>
            <p><strong>Cita 3:</strong> Dieta balanceada - Viernes 09:30 AM</p>
          </div>
        </div>
  
        <h3>Detalles Personales</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Nombre:</strong> Maria García</p>
            <p><strong>Edad:</strong> 35 años</p>
            <p><strong>Ubicación:</strong> Ciudad de México, México</p>
            <p><strong>Especialización:</strong> Nutrición Deportiva</p>
            <p><strong>Experiencia:</strong> 10 años</p>
          </div>
        </div>
  
        <h3>Configuración de la Cuenta</h3>
        <div class="card">
          <div class="card-body">
            <p><strong>Correo Electrónico:</strong> maria.garcia@example.com</p>
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
    color: #8a2be2; /* Color lila */
  }
  .profile-content .card {
    margin-bottom: 20px;
  }
  </style>
  