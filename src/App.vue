<template>
  <header class="row sticky-top bg-light border-bottom m-0 p-2">
    <global-navigator class="col-sm-12"></global-navigator>
  </header>
  <router-view></router-view>
    <footer class="container-fluid row m-0 p-3 bg-light border-top">
      <easyfit-footer></easyfit-footer>
    </footer>
</template>

<script>
import GlobalNavigator from './components/GlobalNavigator.vue'
import EasyfitFooter from './components/EasyfitFooter.vue'

export default {
  name: 'App',

  components: {
    'global-navigator': GlobalNavigator,
    'easyfit-footer': EasyfitFooter,
  },

  data: function() {
    return {
      local: false,
      fitness: false,
      profile: false,
      food: false,
      fitnessData: ['Introducción', 'Explosividad', 'Fuerza', 'Velocidad', 'Volumen', 'Agilidad'],
      foodData: ['Introducción', 'Proteinas', 'Carbohidratos', 'Grasas', 'Vitaminas', 'Agua'],
      lorem_ipsum_mid: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ullamcorper risus. Sed commodo congue erat, ac placerat metus semper.',
      lorem_ipsum_large: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dapibus diam sollicitudin aliquam. Sed posuere commodo nibh ac laoreet. Sed sit amet congue nisi. Integer sed massa libero. Nullam tempus risus eu lorem condimentum tempor. Aenean eu iaculis diam, eu vulputate enim. Aenean imperdiet elit quis tortor pulvinar venenatis. Proin vel blandit purus, eu aliquet velit. In bibendum cursus nibh nec rhoncus. Sed non justo rutrum, tempus tortor sed, efficitur ex. '
    };
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
