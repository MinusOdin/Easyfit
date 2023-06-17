<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card-group my-5">
                <router-link to="/squat" class="card">
                    <img src="https://www.sportlife.es/uploads/s1/77/98/52/1/sentadilla-con-rebote.jpeg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Sentadilla con salto</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </router-link>
                <router-link to="/flexion" class="card">
                    <img src="https://i.blogs.es/cf9678/clapping/1366_2000.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Flexiones con impulso</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </router-link>
                <router-link to="/salto" class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhS3ZKKUljAxLfLRDI9x0dFha_T3KYhrk4ZA&usqp=CAU" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Salto vertical</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </router-link>
                <div class="card">
                    <img src="https://risbelmagazine.es/wp-content/uploads/2023/03/como-hacer-sentadilla-bulgara-tecnica-cuadriceps.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Zancada con salto</h5>
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
        </div>
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
        <div class="row">
            <div class="card-group my-5">
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.668xw:1.00xh;0.260xw,0&resize=1200:*" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Running</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://www.karateymas.com/wp-content/uploads/2021/09/beneficios-saltar-cuerda-artes-marciales.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Salto a la cuerda</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1_VGOGQHQjCeNteMtIZhuX-S1KCQQJdqIQ&usqp=CAU" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Ciclismo</h5>
                        <p class="card-text">{{ this.textoPrueba }}</p>
                        <button class="btn btn-primary rounded-circle">+</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://img2.rtve.es/i/?w=1600&i=1659088822807.jpg" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">Natación</h5>
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
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>