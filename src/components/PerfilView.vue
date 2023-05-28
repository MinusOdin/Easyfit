<template>
    <div>
      <h1>Perfil</h1>
      <perfil-datos :datos="datos" v-if="!testView"></perfil-datos>
      <test @datos-test="actualizarPerfil" @test-visible="testVisible" v-if="testView" ></test>
      <button @click="editarPerfil" v-if="!editable && !testView" >Editar Perfil</button>
      <button @click="guardarPerfil" v-else-if="!testView">Guardar Perfil</button>
      <button @click="testVisible(true)" v-if="!testView">Hacer Test</button>
    </div>
  </template>

 
<script>
import PerfilDatos from './PerfilDatos.vue'
import Test from './TestPerfil.vue'

export default {
  components: {
    'perfil-datos': PerfilDatos,
    'test': Test
  },
  
  data() {
    return {
      datos: {},
      editable: false,
      testView: false,
    };
  },
  methods: {
    testVisible(visibilidadTest) {
      this.testView = visibilidadTest;
    },
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
  