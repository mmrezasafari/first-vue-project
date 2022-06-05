import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import BMI from '../views/BmiPage.vue'
import Todo from '../views/TodoPage.vue'

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
    },
    {
        path: '/todo',
        name: 'TodoPage',
        component: Todo,
        meta: {
            title: "Todo"
        }
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'active',
    routes  
})

export default router;
