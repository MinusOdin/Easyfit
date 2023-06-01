<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="container-fluid col-sm-1 m-0 p-0" :data="local_nav_data"></local-nav>
            <router-view class="col-sm-11"></router-view>
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
                    link: '/nutricion'
                },
                {
                    title: 'Carbohidratos',
                    subtitles: [],
                    link: '/carbohidratos'
                },
                {
                    title: 'Proteinas',
                    subtitles: [],
                    link: '/proteinas'
                },
                {
                    title: 'Grasas',
                    subtitles: [],
                    link: '/grasas'
                },
                {
                    title: 'Vitaminas',
                    subtitles: [],
                    link: '/vitaminas'
                },
                {
                    title: 'Agua',
                    subtitles: [],
                    link: '/agua'
                }
            ]
        };
    }
};
</script>