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
            component: Inicio,
         },
        {
             path: '/nutricion',
             name: 'Nutricion',
             components: {default: EasyfitNutricion, nutricionContent: NutricionInicio}
        },
        {
            path: '/ejercicios',
            name: 'Ejercicios',
            components: {default: EasyfitEjercicios, ejerciciosContent: EjerciciosInicio}
        },
        {
            path: '/ejercicios/fuerza',
            name: 'Ejercicios de Fuerza',
            components: {default: EasyfitEjercicios, ejerciciosContent: EjerciciosFuerza},
        },
        {
            path: '/ejercicios/explosividad',
            name: 'Ejercicios de explosividad',
            components: {default: EasyfitEjercicios, ejerciciosContent: EjerciciosExplosividad}
        },
        {
            path: '/ejercicios/resistencia',
            name: 'Ejercicios de resistencia',
            components: {default: EasyfitEjercicios, ejerciciosContent: EjerciciosResistencia}
        },
        {
            path: '/rutinas',
            name: 'Rutinas',
            components: {default: EasyfitRutinas, rutinasContent: RutinasInicio}
        },
        {
            path: '/rutinas/volumen',
            name: 'Rutinas de volumen',
            components: {default: EasyfitRutinas, rutinasContent: RutinasVolumen}
        },
        {
            path: '/rutinas/definicion',
            name: 'Rutinas de definición',
            components: {default: EasyfitRutinas, rutinasContent: RutinasDefinicion}
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