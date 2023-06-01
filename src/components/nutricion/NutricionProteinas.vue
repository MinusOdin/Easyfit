<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2021/08/23/17/32/tuna-6568345_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Atún</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/03/05/21/50/board-1239114_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Crema de cacahuete</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2014/03/05/01/20/chicken-breast-279848_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Pollo</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/12/22/10/46/raspberries-1925178_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Yogurt</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
            </div>
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/12/04/23/38/chickpeas-1882839_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Garbanzos</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2014/12/15/13/40/turkey-hen-569069_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Pavo</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2016/08/05/08/58/almonds-1571810_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Almendras</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Huevos</h5>
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
    name: 'NutricionProteinas',

    data: function() {
        return {
            textoPrueba: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt eros'
        };
    }
}
</script>

<style>

</style>