<template>
    <local-nav :data="local_nav_data"></local-nav>
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