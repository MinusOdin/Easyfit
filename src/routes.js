import {createRouter, createWebHashHistory} from 'vue-router';
import Inicio from './components/InicioPag.vue';
import Fitness from './components/FitnessInicio.vue';
import Nutricion from './components/NutricionInicio.vue';
//import Perfil from './components/PerfilView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            name: 'Inici',
            component: Inicio,
         },
        {
             path: '/fitness',
             name: 'Fitness',
            component: Fitness
        },
        {
             path: '/nutricion',
             name: 'Nutricion',
             component: Nutricion,
        },
        {
            path: '/ejercicios',
            name: 'Ejercicios',
            //component: /* TODO */,
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
        }
        // {
        //     path: '/perfil',
        //     name: 'Perfil',
        //     component: Perfil,
        // }
    ]
});

export default router;