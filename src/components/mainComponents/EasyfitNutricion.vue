<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="container-fluid col-sm-1 p-0 m-0" :data="local_nav_data"></local-nav>
            <router-view class="col-sm-11"></router-view>
        </div>
    </div>
</template>

<script>
import LocalNavigator from './LocalNavigator.vue';

export default {
    name: 'EasyfitNutricion',

    components: {
        'local-nav': LocalNavigator,
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
                    title: 'Vitaminas',
                    subtitles: [],
                    link: '/vitaminas'
                },
                {
                    title: 'Grasas',
                    subtitles: [],
                    link: '/grasas'
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