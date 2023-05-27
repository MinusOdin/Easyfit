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
        // {
        //     path: '/perfil',
        //     name: 'Perfil',
        //     component: Perfil,
        // }
    ]
});

export default router;