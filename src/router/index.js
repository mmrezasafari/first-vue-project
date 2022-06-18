import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BMI from "../views/BmiPage.vue";
import Todo from "../views/TodoPage.vue";
import ColorPicker from "../views/ColorPicker.vue";
import ModalPopup from "../views/Modal.vue";
import AutoInput from "../views/AutoInput.vue";
import FormValidation from "../views/FormValidation.vue";

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
    },
    {
        path: '/colorPicker',
        name: 'colorPicker',
        component: ColorPicker,
        meta: {
            title: "color picker"
        }
    },
    {
        path: '/modal',
        name: 'modal',
        component: ModalPopup,
        meta: {
            title: "modal popup"
        }
    },
    {
        path: '/autoInput',
        name: 'autoInput',
        component: AutoInput,
        mata: {
            title: "Auto input"
        }
    },
    {
        path: '/formValidation',
        name: 'formValidation',
        component : FormValidation,
        meta: {
            title: "form validation"
        }
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'active',
    routes  
})

export default router;
