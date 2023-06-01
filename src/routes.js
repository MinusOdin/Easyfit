// Vue Router import
import {createRouter, createWebHashHistory} from 'vue-router';

// Components import
import Test from './components/TestPerfil.vue';
import Perfil from './components/PerfilView.vue';
import Inicio from './components/EasyfitInicio.vue';
import RutinasInicio from './components/RutinasInicio.vue';
import RutinasVolumen from './components/RutinasVolumen.vue';
import EasyfitRutinas from './components/EasyfitRutinas.vue';
import NutricionInicio from './components/NutricionInicio.vue';
import EjerciciosFuerza from './components/EjerciciosFuerza.vue';
import EasyfitNutricion from './components/EasyfitNutricion.vue';
import EjerciciosInicio from './components/EjerciciosInicio.vue';
import EasyfitEjercicios from './components/EasyfitEjercicios.vue';
import RutinasDefinicion from './components/RutinasDefinicion.vue';
import EjerciciosResistencia from './components/EjerciciosResistencia.vue';
import EjerciciosExplosividad from './components/EjerciciosExplosividad.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            name: 'Inici',
            component: Inicio
         },
        {
            path: '/nutricion',
            name: 'Nutricion',
            components: EasyfitNutricion,
            children: [
                {
                    path: '',
                    name: 'NutricionInicio',
                    component: NutricionInicio
                },
                /*{
                    path: '/carbohidratos',
                    name: 'NutricionCarbohidratos',
                    component: NutricionCarbohidratos
                },
                {
                    path: '/proteinas',
                    name: 'NutricionProteinas',
                    component: Nutricionproteinas
                }*/
            ]
        },
        {
            path: '/ejercicios',
            name: 'Ejercicios',
            component: EasyfitEjercicios,
            children: [
                {
                    path: '',
                    name: 'EjerciciosInicio',
                    component: EjerciciosInicio
                },
                {
                    path: '/fuerza',
                    name: 'EjerciciosFuerza',
                    component: EjerciciosFuerza
                },
                {
                    path: '/explosividad',
                    name: 'EjerciciosExplosividad',
                    component: EjerciciosExplosividad
                },
                {
                    path: '/resistencia',
                    name: 'EjerciciosResistencia',
                    component: EjerciciosResistencia
                }
            ]
        },
        {
            path: '/rutinas',
            name: 'Rutinas',
            component: EasyfitRutinas,
            children: [
                {
                    path: '',
                    name: 'RutinasInicio',
                    component: RutinasInicio
                },
                {
                    path: '/volumen',
                    name: 'RutinasVolumen',
                    component: RutinasVolumen
                },
                {
                    path: '/definicion',
                    name: 'RutinasDefinicion',
                    component: RutinasDefinicion
                }
            ]
        },
        {
             path: '/perfil',
             name: 'Perfil',
             component: Perfil,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        }
    ]
});

export default router;