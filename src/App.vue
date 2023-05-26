<template>
  <header class="row sticky-top bg-light border-bottom m-0 p-2">
    <global-navigator class="col-sm-12" @show-local-navigator="showLocalNavigator" @hide-local-navigator="hideLocalNavigator"></global-navigator>
  </header>
  <main class="row container-fluid m-0 p-0 max-auto">
    <article class="row container-fluid m-0 p-0" v-if="!local">
      <easyfit-banner class="row"></easyfit-banner>
      <div class="row my-5 m-0 ps-5" style="text-align: left;">
        <img class="col-sm-4 rounded ms-1 p-0" src="./assets/man.jpg" alt="squad_man">
        <div class="col-sm-7 ms-5">
          <h2>Que es Easyfit</h2>
          <p>{{ this.lorem_ipsum_large }}</p>
          <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 14ch;">Descubre más</a>
        </div>
      </div>
      <div class="row my-3 m-0 ps-" style="text-align: left;">
        <div class="col-sm-7">
          <h2>Porque usar Easyfit</h2>
          <p>{{ this.lorem_ipsum_large }}</p>
          <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 12ch;">Crear perfil</a>
        </div>
        <img class="col-sm-4 rounded ms-5 p-0" src="./assets/Squad_man.jpg" alt="squad_man">
      </div>
      <div class="row my-3 p-0">
        <h2>Conceptos Clave</h2>
        <key-point class="col-sm-4" :title="'Fitness'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Nutrición'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Salud'" :text="this.lorem_ipsum_mid"></key-point>
      </div>
      <div class="row m-0 p-0">
        <key-point class="col-sm-4" :title="'Volumen'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Repeticiones'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Series'" :text="this.lorem_ipsum_mid"></key-point>
      </div>
    </article>
    <article class="row container-fluid">
        <local-navigator class="row col-sm-1" :data="getData()" v-if="local"></local-navigator>
    </article>
    <article class="row container-fluid">
        <local-navigator class="row col-sm-1" :data="getData()" v-if="local"></local-navigator>
    </article>
  </main>
    <footer class="container-fluid row m-0 p-3 bg-light border-top">
      <easyfit-footer></easyfit-footer>
    </footer>
</template>

<script>
import GlobalNavigator from './components/GlobalNavigator.vue'
import EasyfitFooter from './components/EasyfitFooter.vue'
import EasyfitBanner from './components/EasyfitBanner.vue'
import LocalNavigator from './components/LocalNavigator.vue'
import EasyfitKeyPoints from './components/EasyfitKeyPoint.vue'

export default {
  name: 'App',

  components: {
    'global-navigator': GlobalNavigator,
    'easyfit-footer': EasyfitFooter,
    'easyfit-banner': EasyfitBanner,
    'local-navigator': LocalNavigator,
    'key-point': EasyfitKeyPoints
  },

  data: function() {
    return {
      local: false,
      fitness: false,
      fitnessData: ['Introducción', 'Explosividad', 'Fuerza', 'Velocidad', 'Volumen', 'Agilidad'],
      foodData: ['Introducción', 'Proteinas', 'Carbohidratos', 'Grasas', 'Vitaminas', 'Agua'],
      lorem_ipsum_mid: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ullamcorper risus. Sed commodo congue erat, ac placerat metus semper.',
      lorem_ipsum_large: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dapibus diam sollicitudin aliquam. Sed posuere commodo nibh ac laoreet. Sed sit amet congue nisi. Integer sed massa libero. Nullam tempus risus eu lorem condimentum tempor. Aenean eu iaculis diam, eu vulputate enim. Aenean imperdiet elit quis tortor pulvinar venenatis. Proin vel blandit purus, eu aliquet velit. In bibendum cursus nibh nec rhoncus. Sed non justo rutrum, tempus tortor sed, efficitur ex. '
    };
  },

  methods: {
    showLocalNavigator: function(data) {
      this.local = data.local;
      this.fitness = data.fitness;
    },

    getData: function() {
      if(this.fitness)
        return this.fitnessData;
      else
        return this.foodData;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Cabinet Grotesk', 'Satoshi';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

p {
    margin: 0;
    font-weight: bolder;
}

a {
    color: #FF7F50;
    text-decoration: none;
}

a:hover {
    color: #FF6347;
}

#button1 {
  background-color:#FF7F50;
  color: white;
  padding: 1rem;
}

#button1:hover {
  background-color:#FF6347;
  color: white;
}
</style>
