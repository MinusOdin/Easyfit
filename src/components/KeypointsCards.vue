<template>
    <div class="card my-3 border-0">
        <div class="card-body">
            <h3><a href="#">{{ title }}</a></h3>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EasyfitKeyPoint',
    props: {
        title: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>