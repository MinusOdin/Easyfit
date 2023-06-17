// Vue Router import
import {createRouter, createWebHashHistory} from 'vue-router';

// Easyfit main components import
import Test from './components/TestPerfil.vue';
import Perfil from './components/PerfilView.vue';
import Inicio from './components/mainComponents/EasyfitInicio.vue';
import EasyfitRutinas from './components/mainComponents/EasyfitRutinas.vue';
import EasyfitNutricion from './components/mainComponents/EasyfitNutricion.vue';
import EasyfitEjercicios from './components/mainComponents/EasyfitEjercicios.vue';

// Rutinas components import
import RutinasInicio from './components/rutinas/RutinasInicio.vue';
import RutinasVolumen from './components/rutinas/RutinasVolumen.vue';
import RutinasDefinicion from './components/rutinas/RutinasDefinicion.vue';


// Ejercicios components import
import EjerciciosFuerza from './components/ejercicios/EjerciciosFuerza.vue';
import EjerciciosInicio from './components/ejercicios/EjerciciosInicio.vue';
import EjerciciosResistencia from './components/ejercicios/EjerciciosResistencia.vue';
import EjerciciosExplosividad from './components/ejercicios/EjerciciosExplosividad.vue';
// Ejercicios especificos
import EjercicioSquat from './components/ejercicios/ejercicios_epecificos/EjercicioSquat';
import EjercicioFlexion from './components/ejercicios/ejercicios_epecificos/EjercicioFlexion';
import EjercicioSalto from './components/ejercicios/ejercicios_epecificos/EjercicioSalto';



// Nutricion components import
import NutricionAgua from './components/nutricion/NutricionAgua.vue';
import NutricionGrasas from './components/nutricion/NutricionGrasas.vue';
import NutricionInicio from './components/nutricion/NutricionInicio.vue';
import NutricionVitaminas from './components/nutricion/NutricionVitaminas.vue';
import NutricionProteinas from './components/nutricion/NutricionProteinas.vue';
import NutricionCarbohidratos from './components/nutricion/NutricionCarbohidratos.vue';


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
            component: EasyfitNutricion,
            children: [
                {
                    path: '',
                    name: 'NutricionInicio',
                    component: NutricionInicio
                },
                {
                    path: '/carbohidratos',
                    name: 'NutricionCarbohidratos',
                    component: NutricionCarbohidratos
                },
                {
                    path: '/proteinas',
                    name: 'NutricionProteinas',
                    component: NutricionProteinas
                },
                {
                    path: '/vitaminas',
                    name: 'NutricionVitaminas',
                    component: NutricionVitaminas
                },
                {
                    path: '/grasas',
                    name: 'NutricionGrasas',
                    component: NutricionGrasas
                },
                {
                    path: '/agua',
                    name: 'NutricionAgua',
                    component: NutricionAgua
                }
            ]
        },
        //articulos nutricion
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
        //ejercicios individuales
        {
            path: '/squat',
            name: 'EjercicioSquat',
            component: EjercicioSquat
        },
        {
            path: '/flexion',
            name: 'EjercicioFlexion',
            component: EjercicioFlexion
        },
        {
            path: '/salto',
            name: 'EjercicioSalto',
            component: EjercicioSalto
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