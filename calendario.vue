<template>
    <div class="container">
      <div class="calendar-wrapper">
        <!-- Calendario de Clases -->
        <div class="class-calendar">
          <!-- Zumba -->
          <div class="class-card">
            <h3>Zumba</h3>
            <ul>
              <li v-for="time in zumbaTimes" :key="time.id">
                {{ time.time }} - {{ time.instructor }}
              </li>
            </ul>
            <div class="schedule-button">
              <select v-model="selectedZumbaTime">
                <option v-for="time in zumbaTimes" :key="time.id">
                  {{ time.time }} - {{ time.instructor }}
                </option>
              </select>
              <button @click="schedule('Zumba')">Agendar Zumba</button>
            </div>
          </div>
  
          <!-- Yoga -->
          <div class="class-card">
            <h3>Yoga</h3>
            <ul>
              <li v-for="time in yogaTimes" :key="time.id">
                {{ time.time }} - {{ time.instructor }}
              </li>
            </ul>
            <div class="schedule-button">
              <select v-model="selectedYogaTime">
                <option v-for="time in yogaTimes" :key="time.id">
                  {{ time.time }} - {{ time.instructor }}
                </option>
              </select>
              <button @click="schedule('Yoga')">Agendar Yoga</button>
            </div>
          </div>
  
          <!-- Sparring -->
          <div class="class-card">
            <h3>Sparring</h3>
            <ul>
              <li v-for="time in sparringTimes" :key="time.id">
                {{ time.time }} - {{ time.instructor }}
              </li>
            </ul>
            <div class="schedule-button">
              <select v-model="selectedSparringTime">
                <option v-for="time in sparringTimes" :key="time.id">
                  {{ time.time }} - {{ time.instructor }}
                </option>
              </select>
              <button @click="schedule('Sparring')">Agendar Sparring</button>
            </div>
          </div>
  
          <!-- Box -->
          <div class="class-card">
            <h3>Box</h3>
            <ul>
              <li v-for="time in boxTimes" :key="time.id">
                {{ time.time }} - {{ time.instructor }}
              </li>
            </ul>
            <div class="schedule-button">
              <select v-model="selectedBoxTime">
                <option v-for="time in boxTimes" :key="time.id">
                  {{ time.time }} - {{ time.instructor }}
                </option>
              </select>
              <button @click="schedule('Box')">Agendar Box</button>
            </div>
          </div>
        </div>
  
        <!-- Agendar con Nutriólogo -->
        <div class="schedule-nutritionist">
          <h2>Agendar con Nutriólogo</h2>
          <div v-for="nutritionist in nutritionists" :key="nutritionist.id">
            <h3>{{ nutritionist.name }}</h3>
            <p>Especialidad: {{ nutritionist.specialty }}</p>
            <p>Seleccione un horario para su consulta:</p>
            <select v-model="selectedNutritionistTimes[nutritionist.id]">
              <option v-for="time in nutritionist.times" :key="time.id">
                {{ time.time }}
              </option>
            </select>
            <button @click="scheduleNutritionist(nutritionist.id)">Agendar Consulta</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        zumbaTimes: [
          { id: 1, time: "Lunes 18:00", instructor: "María" },
          { id: 2, time: "Miércoles 17:30", instructor: "Juan" },
          { id: 3, time: "Viernes 19:00", instructor: "Laura" }
        ],
        yogaTimes: [
          { id: 4, time: "Martes 09:00", instructor: "Pablo" },
          { id: 5, time: "Jueves 08:30", instructor: "Ana" },
          { id: 6, time: "Sábado 10:00", instructor: "Carlos" }
        ],
        sparringTimes: [
          { id: 7, time: "Lunes 20:00", instructor: "Diego" },
          { id: 8, time: "Miércoles 19:30", instructor: "Elena" },
          { id: 9, time: "Viernes 18:30", instructor: "Andrés" }
        ],
        boxTimes: [
          { id: 10, time: "Martes 18:30", instructor: "Sofía" },
          { id: 11, time: "Jueves 20:00", instructor: "Gabriel" },
          { id: 12, time: "Sábado 11:30", instructor: "Mónica" }
        ],
        nutritionists: [
          {
            id: 1,
            name: "Diana",
            specialty: "Nutrición Deportiva",
            times: [
              { id: 1, time: "Lunes 10:00" },
              { id: 2, time: "Miércoles 15:30" },
              { id: 3, time: "Viernes 12:00" }
            ]
          },
          {
            id: 2,
            name: "Pedro",
            specialty: "Nutrición Clínica",
            times: [
              { id: 4, time: "Martes 14:00" },
              { id: 5, time: "Jueves 11:30" },
              { id: 6, time: "Sábado 09:00" }
            ]
          },
          {
            id: 3,
            name: "Luisa",
            specialty: "Nutrición Infantil",
            times: [
              { id: 7, time: "Lunes 16:30" },
              { id: 8, time: "Miércoles 18:00" },
              { id: 9, time: "Viernes 14:30" }
            ]
          }
        ],
        selectedZumbaTime: "",
        selectedYogaTime: "",
        selectedSparringTime: "",
        selectedBoxTime: "",
        selectedNutritionistTimes: {}
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
    margin: auto;
    padding: 20px;
  }
  
  .calendar-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .class-calendar {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .class-card {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .class-card h3 {
    color: #8a2be2; /* Color lila */
  }
  
  .class-card ul {
    padding: 0;
    margin-bottom: 10px;
  }
  
  .class-card ul li {
    list-style: none;
    margin-bottom: 5px;
  }
  
  .schedule-button {
    display: flex;
    align-items: center;
  }
  
  .schedule-button select {
    flex: 1;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  
  .schedule-button button {
    padding: 10px;
    font-size: 16px;
    background-color: #8a2be2; /* Color lila */
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .schedule-button button:hover {
    background-color: #6a1a9a; /* Color lila más oscuro */
  }
  
  .schedule-nutritionist {
    flex: 1;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  .schedule-nutritionist h2 {
    color: #8a2be2; /* Color lila */
  }
  
  .schedule-nutritionist p {
    margin-bottom: 10px;
  }
  
  .schedule-nutritionist select {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  
  .schedule-nutritionist button {
    padding: 10px;
    font-size: 16px;
    background-color: #8a2be2; /* Color lila */
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .schedule-nutritionist button:hover {
    background-color: #6a1a9a; /* Color lila más oscuro */
  }
  
  @media screen and (max-width: 768px) {
    .class-calendar {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  </style>
  