<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://www.sportlife.es/uploads/s1/77/98/52/1/sentadilla-con-rebote.jpeg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Sentadilla</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hacer-plancha-1550071354.jpg?crop=1.00xw:0.752xh;0,0.0505xh" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Palanca Estática</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Flexiones</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://nutricion360.es/wp-content/uploads/2020/04/fondos-en-banca-tecnica-1200x900.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Fondo de triceps</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
            </div>
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://www.sportlife.es/uploads/s1/77/98/52/1/sentadilla-con-rebote.jpeg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Sentadilla</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hacer-plancha-1550071354.jpg?crop=1.00xw:0.752xh;0,0.0505xh" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Palanca Estática</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfF_RNoZDFg30kBkB3hWWgKkog3wBa9iy1bg&usqp=CAU" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Flexiones con una mano</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://nutricion360.es/wp-content/uploads/2020/04/fondos-en-banca-tecnica-1200x900.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Fondo de triceps</h5>
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
    name: 'EjerciciosFuerza',

    data: function() {
        return {
            textoPrueba: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim tincidunt eros,'
        };
    }
};
</script>

<style>

</style>
