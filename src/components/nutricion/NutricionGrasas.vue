<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://s1.eestatic.com/2016/07/07/ciencia/salud/salud_138247652_9194422_1706x960.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Grasas Saturadas</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.ecestaticos.com/O_IiC4zFN4xtdz0AaM_EvJEeqOQ=/6x153:2120x1262/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffb3%2F441%2F7c6%2Ffb34417c6501c65724d81f727f2c9a8e.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Grasas Insaturadas</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://statics-cuidateplus.marca.com/cms/styles/natural_md/azblob/grasas-trans.jpg.webp?itok=T-B0vQtb" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Grasas Trans</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NutricionGrasas',

    data: function() {
        return {
            textoPrueba: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt eros'
        };
    }
}
</script>

<style>

</style>