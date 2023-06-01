<template><!-- Landing Page -->
    <article class="row container-fluid m-0 p-0">
        <easyfit-banner class="row"></easyfit-banner>

        <!-- Que es Easyfit -->
        <div class="row my-3 m-0 py-3 px-5" style="text-align: left;">
        <img class="col-sm-4 rounded ms-1 p-0" src="../../assets/man.jpg" alt="squad_man">
        <div class="col-sm-7 ms-5">
            <h2>Que es Easyfit</h2>
            <p>{{ this.lorem_ipsum_large }}</p>
            <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 14ch;">Descubre más</a>
        </div>
        </div>

        <!-- Porque usar Easyfit -->
        <div class="row my-3 m-0 py-3 px-5" style="text-align: left;">
        <div class="col-sm-7">
            <h2>Porque usar Easyfit</h2>
            <p>{{ this.lorem_ipsum_large }}</p>
            <a id="button1" href="#" class="btn btn-light border rounded-pill my-2" style="width: 12ch;">Crear perfil</a>
        </div>
        <img class="col-sm-4 rounded ms-5 p-0" src="../../assets/Squad_man.jpg" alt="squad_man">
        </div>

        <!-- KeyPoints -->
        <div class="row my-3 p-0">
        <h2>Conceptos Clave</h2>
        <key-point class="col-sm-4" :title="'Rutinas'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Nutrición'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Salud'" :text="this.lorem_ipsum_mid"></key-point>
        </div>
        <div class="row m-0 p-0">
        <key-point class="col-sm-4" :title="'Volumen'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Repeticiones'" :text="this.lorem_ipsum_mid"></key-point>
        <key-point class="col-sm-4" :title="'Series'" :text="this.lorem_ipsum_mid"></key-point>
        </div>
    </article>
</template>

<script>
import EasyfitBanner from '../EasyfitBanner.vue'
import KeypointsCards from '../KeypointsCards.vue'

export default {
    name:'EasyfitInicio',
    components: {
        'easyfit-banner': EasyfitBanner,
        'key-point': KeypointsCards
    },

    data: function() {
        return {
            lorem_ipsum_large: '',
            lorem_ipsum_mid: ''
        }
    }
}
</script>

<style>

</style>
