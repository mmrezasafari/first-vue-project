<script>
import './assets/style.css'
export default {
    name: 'cart',
    props: {
        name: String,
        header: String,
        title: String,
        text: String,
        link: String
    }
}
</script>

<template>
    <section :class="`${name} col-12 col-lg-6`">
<<<<<<< HEAD
        <div class="card mb-3">
=======
        <div class="card  mb-3">
>>>>>>> 3ec17c9439095178631e03622e2d4b050618eb66
            <div class="card-header">{{header}}</div>
            <div class="card-body text-primary p-4">
                <h5 class="card-title text-secondary">{{title}}</h5>
                <p class="card-text text-dark">{{text}}</p>
                <router-link :to="`/${link}`">
                    <button type="button" class="btn btn-warning">start</button>
                </router-link>
            </div>
        </div>
    </section>
</template>