<template>
    <nav class="nav flex-column">
        <ul class="list-group">
            <li class="list-group-item nav-link border-0" v-for="item in data" :key="item">
                <router-link to="{{ item.link }}">{{ item.title }}</router-link>
                <ul class="list-group" v-if="item.subtitles">
                    <li class="list-group-item nav-link border-0" v-for="subtitle in item.subtitles" :key="subtitle">{{ subtitle }}</li>
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
    
}
</script>

<style>

</style>
