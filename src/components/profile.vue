<template>
    <div>
      <h1>Perfil</h1>
      <perfil-datos :datos="datos"></perfil-datos>
      <test @datos-test="actualizarPerfil"></test>
      <button @click="editarPerfil" v-if="!editable">Editar Perfil</button>
      <button @click="guardarPerfil" v-else>Guardar Perfil</button>
    </div>
  </template>
 
<script>
import PerfilDatos from './PerfilDatos.vue'
import Test from './test.vue'

export default {
  components: {
    'perfil-datos': PerfilDatos,
    'test': Test
  },
  
  data() {
    return {
      datos: {},
      editable: false,
    };
  },
  methods: {
    actualizarPerfil(datosTest) {
      this.datos = datosTest;
      this.editable = false;
    },
    editarPerfil(){
      this.editable = true;
    },
    guardarPerfil(){
      this.editable = false;
    }
  },
};
</script>
  