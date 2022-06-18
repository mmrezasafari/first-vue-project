<script>
import CartVue from '../components/cart/Cart.vue'

export default {
    name: 'Home',

    data() {
        return {
            objects: [
                {
                    name: 'bmi-project',
                    header: 'BMI Computing',
                    title: 'Take care of your health',
                    text: 'enter your height and weight and get your body mass index',
                    link: 'bmi'
                },
                {
                    name: 'todo-app',
                    header: 'Todo',
                    title: 'Register so you do not forget',
                    text: 'write your to do here!',
                    link: 'todo'
                },
                {
                    name: 'color-picker',
                    header: 'background color',
                    title: 'set your favorite color to background',
                    text: 'to improve my skill in vue js i create this',
                    link: 'colorPicker'
                },
                {
                    name: 'modal-popup',
                    header: 'Modal',
                    title: 'Modal popup',
                    text: 'create modal to improve my skill in vue',
                    link: 'modal'
                },
                {
                    name: 'auto-input',
                    header: 'auto input',
                    title: 'fill inputs',
                    text: 'fill input to see result!',
                    link: 'autoInput'
                },
                {
                    name: 'form-validation',
                    header: 'form',
                    title: 'form validate',
                    text: 'login form validation',
                    link: 'formValidation'
                },
                {
                    name: 'list-of-users',
                    header: 'List of Users',
                    title: 'list of user',
                    text: 'get data and we search in it'
                },
            ]
        }
    },

    components: {
        CartVue
    }
}
</script>

<template>
    <article class="vue-projects w-100 container-fluid p-5">
        <div class="projects row d-flex">
            <cart-vue v-for="object in objects" v-bind="object" />
        </div>
    </article>
</template>