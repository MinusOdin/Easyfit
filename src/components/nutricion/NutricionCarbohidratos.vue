<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/02/13/05/44/rice-2061877_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Arroz</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2015/05/26/17/42/pop-corn-785074_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Maíz</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Pasta</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/09/26/13/21/apples-2788599_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Manzanas</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
            </div>
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Patatas</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/07/11/17/31/bread-1510155_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Pan</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2018/09/24/20/12/bananas-3700718_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Platanos</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/09/26/23/33/lentils-2790516_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Lentejas</h5>
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
    name: 'NutricionCarbohidratos',

    data: function() {
        return {
            textoPrueba: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt eros'
        };
    }
}
</script>

<style>

</style>