<template>
    <local-nav :data="local_nav_data"></local-nav>

</template>

<script>
import LocalNavigator from './LocalNavigator.vue'

export default {
    name: 'Ejercicios',

    components: {
        'local-nav': LocalNavigator
    },

    data: function() {
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
                title: 'Explosividad',
                subtitles: [],
                link: '/ejercicios/explosividad'
            }
        ];
    }
};
</script>