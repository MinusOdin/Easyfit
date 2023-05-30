<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="col-sm-1" :data="local_nav_data"></local-nav>
            <router-view name="ejerciciosContent"></router-view>
        </div>
    </div>
</template>

<script>
import LocalNavigator from './LocalNavigator.vue'

export default {
    name: 'EasyfitEjercicios',

    components: {
        'local-nav': LocalNavigator
    },

    data: function() {
        return {
            local_nav_data: [
                {
                    title: 'Introducción',
                    subtitles: [],
                    link: '/ejercicios'
                },
                {
                    title: 'Fuerza',
                    subtitles: [],
                    link: '/ejercicios/fuerza'
                },
                {
                    title: 'Explosividad',
                    subtitles: [],
                    link: '/ejercicios/explosividad'
                },
                {
                    title: 'Resistencia',
                    subtitles: [],
                    link: '/ejercicios/resistencia'
                }
            ]
        };
    }
};
</script>