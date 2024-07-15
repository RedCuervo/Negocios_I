<template>
<body>
    <div class="container">
        <div class="plan">
            <h2>Plan Básico</h2>
            <p>Acceso a información y tips</p>
            <p>Dietas respecto a requerimientos</p>
            <p>Comunicación continua con nutriologo</p>
            <p>Comunicación continua con personal training</p>
            <p>Validar IMC según tu peso</p>
            <p></p> <br></br>
            <p></p> <br></br>
            <p></p> <br></br>
            <p></p> <br></br>
            
            <div class="price">$19.99/mes</div>
            <button class="btn">Seleccionar</button>
        </div>
        <div class="plan">
            <h2>Plan Estándar</h2>
            <p>Acceso a información y tips</p>
            <p>Dietas respecto a requerimientos</p>
            <p>Comunicación continua con nutriologo</p>
            <p>Comunicación continua con personal training</p>
            <p>Validar IMC según tu peso</p>
            <p>4 clases a la semana</p>
            <p></p> <br></br>
            <p></p> <br></br>
            <p></p> <br></br>
            
            <div class="price">$29.99/mes</div>
            <button class="btn">Seleccionar</button>
        </div>
        <div class="plan">
            <h2>Plan Premium</h2>
            <p>Acceso a información y tips</p>
            <p>Dietas respecto a requerimientos</p>
            <p>Comunicación continua con nutriologo</p>
            <p>Comunicación continua con personal training</p>
            <p>Validar IMC según tu peso</p>
            <p>7 clases a la semana</p>
            <p>Comunicación 24/7 con instructor y nutriologo</p>
         <br></br>
                 <br></br>       
            <div class="price">$49.99/mes</div>
            <button class="btn">Seleccionar</button>
        </div>
    </div>
</body>

</template>
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    display: flex;
    justify-content: space-around; /* Alineación espaciada de los elementos */
    align-items: flex-start; /* Alineación al inicio del eje vertical */
    flex-wrap: wrap;
    max-width: 1200px; /* Ancho máximo del contenedor */
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
}

.plan {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 300px;
    transition: transform 0.3s ease-in-out;
}

.plan:hover {
    transform: translateY(-5px);
}

.plan h3 {
    color: #4a4a4a; /* Morado oscuro */
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.plan p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 15px;
}

.price {
    color: #007bff; /* Azul */
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 20px;
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

.btn:hover {
    background-color: #3a006e; /* Verde más oscuro */
}


    </style>