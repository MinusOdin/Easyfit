<template>
    <div>
      <h2>Datos del Perfil</h2>
      <form @submit.prevent="guardarCambios">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" class="form-control" id="nombre" v-model="datos.nombre" :disabled="!editable">
        </div>
        <div class="form-group">
          <label for="edad">Edad:</label>
          <input type="number" class="form-control" id="edad" v-model="datos.edad" :disabled="!editable">
      </div>
      <div class="form-group">
          <label for="email">Correo Electronico:</label>
          <input type="email" class="form-control" id="email" v-model="datos.email" :disabled="!editable">
        </div>
        <div class="form-group">
          <label for="sexo">Sexo: </label>
          <select class="form-control" id="sexo" v-model="datos.sexo" :disabled="!editable">
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="altura">Altura en cm:</label>
          <input type="number" class="form-control" id="altura" v-model="datos.altura" :disabled="!editable">
      </div>
      <div class="form-group">
          <label for="peso">Peso en kg:</label>
          <input type="number" class="form-control" id="peso" v-model="datos.peso" :disabled="!editable">
      </div>
    <button @click="guardarCambios" v-if="editable">Guardar Cambios</button>
  </form>  
  </div>
  </template>
  
  <script>
  export default {
    props: {
        datos: Object,
        editable: Boolean,
    },
    methods:{
        guardarCambios(){
            this.$emit('actualizar-datos', this.datos);
        },
    },
  };
  </script>
  