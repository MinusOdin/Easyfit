<template>
  <header class="row sticky-top bg-light border-bottom m-0 p-2">
        <global-navigator class="col-sm-12" @show-local-navigator="showLocalNavigator" @hide-local-navigator="hideLocalNavigator"></global-navigator>
      </header>
      <main class="container-fluid row m-0 p-0">
        <div class="row" v-if="!local">
          <easyfit-banner class="row"></easyfit-banner>
          <article class="row container-fluid">
            <div class="row px-5 py-2">
              <div class="col-sm-4 card">
                <div class=card-body>
                  <h2>Fitness</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quam orci, viverra a sapien vitae, porta scelerisque mauris. Donec ultrices.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <local-navigator class="row col-sm-1" :data="getData()" v-if="local"></local-navigator>
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

export default {
  name: 'App',

  components: {
    'global-navigator': GlobalNavigator,
    'easyfit-footer': EasyfitFooter,
    'easyfit-banner': EasyfitBanner,
    'local-navigator': LocalNavigator
  },

  data: function() {
    return {
      local: false,
      fitness: false,
      fitnessData: ['Introducción', 'Explosividad', 'Fuerza', 'Velocidad', 'Volumen', 'Agilidad'],
      foodData: ['Introducción', 'Proteinas', 'Carbohidratos', 'Grasas', 'Vitaminas', 'Agua']
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
  color: #2c3e50;
  margin-top: 60px;
}

p {
    margin: 0;
    font-weight: bolder;
}

a {
    text-decoration: none;
    font-weight: bolder;
}

article{
  display: grid;
  align-items: center;
}
</style>
