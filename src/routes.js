import {createRouter, createWebHashHistory} from 'vue-router';
import Inicio from './components/InicioPag.vue';
import Ejercicios from './components/Ejercicios.vue'
import Nutricion from './components/NutricionInicio.vue';
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
             component: Nutricion,
        },
        {
            path: '/ejercicios',
            name: 'Ejercicios',
            component: Ejercicios,
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