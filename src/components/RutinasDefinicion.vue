<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="col-sm-1" :data="local_nav_data"></local-nav>
            <article class="col-sm-11 container-fluid p-5">
            </article>
        </div>
    </div>
</template>

<script>
import LocalNavigator from './LocalNavigator.vue'

export default {
    name: 'RutinasVolumen',

    components: {
        'local-nav': LocalNavigator
    },

    data: function() {
        return {
            local_nav_data: [
                {
                    title: 'Introducción',
                    subtitles: [],
                    link: '/rutinas'
                },
                {
                    title: 'Volumen',
                    subtitles: [],
                    link: '/rutinas/volumen'
                },
                {
                    title: 'Definición',
                    subtitles: [],
                    link: '/rutinas/definición'
                },
            ]
        };
    }
}
</script>

<style>

</style>
