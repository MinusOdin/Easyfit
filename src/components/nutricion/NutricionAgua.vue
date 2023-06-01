<template>
    <div class="container-fluid">
        <div class="row p-5">
            <div class="card">
                <img src="../../assets/hands_whater.png" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">Agua</h5>
                    <p class="card-text">{{ this.textoPrueba }}</p>
                    <button class="btn btn-primary rounded-circle">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NutricionAgua',

    data: function() {
        return {
            textoPrueba: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt eros'
        };
    }
}
</script>

<style>

</style>