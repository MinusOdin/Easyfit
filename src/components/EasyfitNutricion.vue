<template>
    <div class="container-fluid">
        <div class="row">
            <local-nav class="col-sm-1" :data="local_nav_data"></local-nav>
            <article class="col-sm-11 container-fluid p-5">
                <div class="row mb-3">
                    <h2>Tipos de rutinas</h2>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Volumen</h3>
                        <p>
                            Una rutina de volumen es un programa de entrenamiento donde se busca como principal
                            objetivo la hipertrofia de los músculos. Por lo tanto, estas rutinas se centran en hacer
                            crecer los músculos mediante grandes pesos y suficiente carga de trabajo para estimular
                            los diferentes tipos de fibras musculares.
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <h3>Definición</h3>
                        <p>
                            Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                            es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                            durante nuestras rutinas de fuerza y volumen.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <h2>Beneficios de las rutinas</h2>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                    <p>
                        Una rutina de definición muscular es un programa de entrenamiento donde el principal objetivo
                        es reducir nuestro porcentaje de grasa corporal pero manteniendo el músculo que hemos ganado
                        durante nuestras rutinas de fuerza y volumen.
                    </p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import LocalNavigator from './LocalNavigator.vue'

export default {
    name: 'EasyfitEjercicios',

    components: {
        'local-nav': LocalNavigator
    },

    data: function() {
        return {
            local_nav_data: [
                {
                    title: 'Introducción',
                    subtitles: [],
                    link: '/nutricion'
                },
                {
                    title: 'Carbohidratos',
                    subtitles: [],
                    link: '/nutricion/carbohidratos'
                },
                {
                    title: 'Proteinas',
                    subtitles: [],
                    link: '/nutricion/proteinas'
                },
                {
                    title: 'Grasas',
                    subtitles: [],
                    link: '/nutricion/grasas'
                },
                {
                    title: 'Vitaminas',
                    subtitles: [],
                    link: '/nutricion/vitaminas'
                },
                {
                    title: 'Agua',
                    subtitles: [],
                    link: '/nutricion/agua'
                }
            ]
        };
    }
};
</script>