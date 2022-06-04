import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import BMI from '../views/BmiPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: "Home"
        }
    },
    {
        path: '/bmi',
        name: 'BmiPage',
        component: BMI,
        meta: {
            title: 'BMI'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'active',
    routes  
})

export default router;
