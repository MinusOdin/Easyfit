<template>
  <header class="container-fluid row m-0 p-5">
        <global-navigator></global-navigator>
      </header>
      <main class="container-fluid row m-0 p-0">
        <easyfit-banner class="row"></easyfit-banner>
        <article class="row bg-light p-0 m-0"></article>
        <article class="row bg-light p-0 m-0"></article>
        <article class="row bg-light p-0 m-0"></article>
        <article class="row bg-light p-0 m-0"></article>
      </main>
      <footer class="container-fluid row m-0">
        <easyfit-footer></easyfit-footer>
      </footer>
</template>

<script>
import GlobalNavigator from './components/GlobalNavigator.vue'
import EasyfitFooter from './components/EasyfitFooter.vue'
import EasyfitBanner from './components/EasyfitBanner.vue'

export default {
  name: 'App',
  components: {
    'global-navigator': GlobalNavigator,
    'easyfit-footer': EasyfitFooter,
    'easyfit-banner': EasyfitBanner
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

body {
    background-color: #E9D07C;
}

a {
    text-decoration: none;
    font-weight: bolder;
}
</style>