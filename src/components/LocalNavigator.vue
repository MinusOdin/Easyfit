<template>
    <nav class="col-sm-2 ">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in data" :key="item">{{ item }}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'LocalNavigator',
    props: ['data']
}
</script>

<style>

</style>
