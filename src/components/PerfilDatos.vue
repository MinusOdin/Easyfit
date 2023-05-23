<template>
    <div>
      <h2>Datos del Perfil</h2>
      <p>Nombre: 
        <span v-if="editable">
          <input type="text" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.nombre }}</span>
        </p>
      <p>Edad: 
        <span v-if="editable">
          <input type="number" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.edad }}</span>
    </p>
      <p>Email: 
        <span v-if="editable">
          <input type="text" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.email }}</span>
    </p>
      <p>Sexo: 
        <span v-if="editable">
          <input type="text" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.sexo }}</span></p>
      <p>Altura: 
        <span v-if="editable">
          <input type="text" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.altura }}</span>
    </p>
      <p>Peso: 
        <span v-if="editable">
          <input type="text" v-model="datos.nombre" />
        </span>
        <span v-else>{{ datos.peso }}</span>
    </p>
    <button @click="guardarCambios" v-if="editable">Guardar Cambios</button>
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
            this.$emit('actualzar-datos', this.datos);
        },
    },
  };
  </script>
  