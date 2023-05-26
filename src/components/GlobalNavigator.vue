<template>
    <nav class="col-sm-12 row bg-light">
        <p id="logo" class="col-sm-1 p-0 ms-3" @click="hideLocalNavigator"><img src="../assets/Easyfit_logo.png" style="height: 48px;" alt="Easyfit"> Easyfit</p>
        <p class="col-sm-7"></p>
        <a href="#" @click="showFitness" class="col-sm-1 p-1 py-2 text-dark">Fitness</a>
        <a href="#" @click="showFood" class="col-sm-1 p-1 py-2 text-dark">Alimentos</a>
        <a href="#" class="col-sm-1 p-1 py-2 text-dark">Perfil</a>
    </nav>
</template>

<script>
export default {
    name: 'GlobalNavigator',
    methods: {
        showFitness: function() {
            this.$emit('show-local-navigator', {
                local: true,
                fitness: true
            });
        },

        showFood: function() {
            this.$emit('show-local-navigator', {
                local: true,
                fitness: false
            });
        },

        hideLocalNavigator: function() {
            this.$emit('show-local-navigator', {
                local: false,
                fitness: false
            })
        }
    }
}
</script>

<style>
#logo:hover {
    cursor: pointer;
}
</style>
