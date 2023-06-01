<template>
  <header class="row sticky-top bg-light border-bottom m-0 p-2">
    <global-navigator class="col-sm-12"></global-navigator>
  </header>
  <main>
    <router-view></router-view>
  </main>
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
}
</script>

<style>
#app {
  font-family: Helvetica, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a{
  text-decoration: none;
  color: #303030;
}

a:hover{
  color: #707070;
}
</style>
