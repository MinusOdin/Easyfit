<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="container-fluid col-sm-1 p-0 m-0" :data="local_nav_data"></local-nav>
            <router-view class="col-sm-11" name="rutinasContent"></router-view>
        </div>
    </div>
</template>

<script>
import LocalNavigator from './LocalNavigator.vue'

export default {
    name: 'EasyfitRutinas',

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
                    link: '/volumen'
                },
                {
                    title: 'Definición',
                    subtitles: [],
                    link: '/definicion'
                },
            ]
        };
    }
}
</script>

<style>

</style>
