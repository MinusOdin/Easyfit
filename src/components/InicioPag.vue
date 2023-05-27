<template><!-- Landing Page -->
    <article class="row container-fluid m-0 p-0">
        <easyfit-banner class="row"></easyfit-banner>

        <!-- Que es Easyfit -->
        <div class="row my-3 m-0 ps-5" style="text-align: left;">
        <img class="col-sm-4 rounded ms-1 p-0" src="../assets/man.jpg" alt="squad_man">
        <div class="col-sm-7 ms-5">
            <h2>Que es Easyfit</h2>
            <p>{{ this.lorem_ipsum_large }}</p>
            <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 14ch;">Descubre más</a>
        </div>
        </div>

        <!-- Porque usar Easyfit -->
        <div class="row my-3 m-0 ps-" style="text-align: left;">
        <div class="col-sm-7">
            <h2>Porque usar Easyfit</h2>
            <p>{{ this.lorem_ipsum_large }}</p>
            <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 12ch;">Crear perfil</a>
        </div>
        <img class="col-sm-4 rounded ms-5 p-0" src="../assets/Squad_man.jpg" alt="squad_man">
        </div>

        <!-- KeyPoints -->
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

    <!-- Fitness Page
    <article class="row container-fluid" v-if="local && fitness">
        <local-navigator class="row col-sm-1" :data="getData()"></local-navigator>
    </article>

     Food Page 
    <article class="row container-fluid" v-if="local && food">
        <local-navigator class="row col-sm-1" :data="getData()"></local-navigator>
    </article>

     Profile Page 
    <article class="row container-fluid" v-if="local && profile">
        <local-navigator class="row" :data="getData()"></local-navigator>
    </article> -->
</template>

<script>
import EasyfitBanner from './EasyfitBanner.vue'
import EasyfitKeyPoints from './EasyfitKeyPoint.vue'

export default {
  components: {
    'easyfit-banner': EasyfitBanner,
    'key-point': EasyfitKeyPoints,
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
    },
}
</script>