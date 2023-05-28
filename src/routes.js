import {createRouter, createWebHashHistory} from 'vue-router';
import Inicio from './components/InicioPag.vue';
import EasyfitEjercicios from './components/EasyfitEjercicios.vue'
import EasyfitNutricion from './components/EasyfitNutricion.vue';
import Perfil from './components/PerfilView.vue';
import Test from './components/TestPerfil.vue';

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
             component: EasyfitNutricion,
        },
        {
            path: '/ejercicios',
            name: 'Ejercicios',
            component: EasyfitEjercicios,
        },
        {
            path: '/ejercicios/fuerza',
            name: 'Ejercicios de Fuerza',
            //component: /* TODO */,
        },
        {
            path: '/ejercicios/explosividad',
            name: 'Ejercicios de explosividad',
            //component: /* TODO */,
        },
        {
            path: '/ejercicios/resistencia',
            name: 'Ejercicios de resistencia',
            //component: /* TODO */,
        },
        {
            path: '/rutinas',
            name: 'Rutinas',
            //component: /* TODO */,
        },
        {
            path: '/rutinas/volumen',
            name: 'Rutinas de volumen',
            //component: /* TODO */,
        },
        {
            path: '/ejercicios/definicion',
            name: 'Rutinas de definición',
            //component: /* TODO */,
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