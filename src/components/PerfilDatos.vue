<template>
    <div>
      <h2>Datos del Perfil</h2>
      <form @submit.prevent="guardarCambios">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" class="col-md-3 form-control" id="nombre" v-model="datosLocal.nombre" :disabled="!editable">
        </div>
        <div class="form-group" >
          <label for="edad">Edad:</label>
          <input type="number" class="col-md-3 col-form-label" id="edad" v-model="datosLocal.edad" :disabled="!editable">
      </div>
      <div class="form-group">
          <label for="email">Correo Electronico:</label>
          <input type="email" class="form-control" id="email" v-model="datosLocal.email" :disabled="!editable">
        </div>
        <div class="form-group">
          <label for="sexo">Sexo: </label>
          <select class="form-control" id="sexo" v-model="datosLocal.sexo" :disabled="!editable">
            <option>Masculino</option>
            <option>Femenino</option>
            <option>Otro</option>
          </select>
        </div>
        <div class="form-group">
          <label for="altura">Altura en cm:</label>
          <input type="number" class="form-control" id="altura" v-model="datosLocal.altura" :disabled="!editable">
      </div>
      <div class="form-group">
          <label for="peso">Peso en kg:</label>
          <input type="number" class="form-control" id="peso" v-model="datosLocal.peso" :disabled="!editable">
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
    data() {
      return {
        datosLocal: {},
      };
    },
    created() {
      this.datosLocal = { ...this.datos };
    },
    methods:{
        guardarCambios(){
            this.$emit('actualizar-datos', this.datosLocal);
        },
    },
  };
  </script>

<style>
  template {
    text-align: center;
    margin: auto;
  }

  input {
    text-align: center;
  }
</style>
  