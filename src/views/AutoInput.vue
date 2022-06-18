<script>
export default {
    methods: {
        onChange(e) {
            if ((e.target.value).toString().length > 3) {
                if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.focus();
                }
            }
        }
    }
}
</script>

<template>
    <article class="container">
        <div class="row h-100 d-flex  align-items-center justify-content-center">
            <section class=" inputs col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <input
                    v-for="n in 4" 
                    @keyup="onChange($event)" 
                    type="text" 
                    class="input m-1 px-3 py-1 col-3 col-md-12"
                    maxlength="4"
                    :key="n"
                >
            </section>
        </div>
    </article>
</template>
<style>
.inputs {
    width: 50%;
    background-color: white;
    border-radius: 5px;
    padding: 10px 0 ;
}

.input {
    width: 5rem;
    height: 2rem;
    background-color: rgba(128, 128, 128, 0.288);
}
</style>