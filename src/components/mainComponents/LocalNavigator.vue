<template>
    <nav class="row nav bg-light">
        <ul class="col-sm-12 list-group text-start border-end rounded-0 bg-light">
            <li class="list-group-item border-0 bg-light" v-for="item in data" :key="item">
                <router-link :to="item.link" :class="{ highlight: active === item.title }" @click="activate(item.title)">{{ item.title }}</router-link>
                <ul class="list-group" v-if="item.subtitles">
                    <li class="list-group-item border-0" v-for="subtitle in item.subtitles" :key="subtitle">{{ subtitle }}</li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'LocalNavigator',
    props: {
        data: {
            type: Array,
            required: true
        }
    },

    data: function() {
        return {
            active: ''
        }
    },

    methods: {
        activate: function(component) {
            this.active = component;
        }
    }
}
</script>

<style>
nav {
    position: -webkit-sticky;
    position: sticky;
}

.highlight {
    color: #FF4500;
}

ul {
    text-align: left;
}
</style>
