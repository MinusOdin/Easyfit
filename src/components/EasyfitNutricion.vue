<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="col-sm-1" :data="local_nav_data"></local-nav>
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
                    title: 'Carbohidratos',
                    subtitles: [],
                    link: '/ejercicios/carbohidratos'
                },
                {
                    title: 'Proteinas',
                    subtitles: [],
                    link: '/ejercicios/proteinas'
                },
                {
                    title: 'Grasas',
                    subtitles: [],
                    link: '/ejercicios/grasas'
                },
                {
                    title: 'Vitaminas',
                    subtitles: [],
                    link: '/ejercicios/vitaminas'
                },
                {
                    title: 'Agua',
                    subtitles: [],
                    link: '/ejercicios/agua'
                }
            ]
        };
    }
};
</script>