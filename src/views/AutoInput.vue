<script>
    export default{
        data() {
            return{
                valueLenght: null
            }
        },
        methods: {
            onChange(e, n) {
                if(e.target.value > 4){
                    this.$refs.input-n.focus()
                }
            }
        }
    }
</script>

<template>
    <article class="container">
        <div class="row h-100 d-flex  align-items-center justify-content-center">
            <section class=" inputs col-12 d-flex justify-content-center align-items-center">
                <input
                    v-for="n in 4"
                    @keyup="onChange($event, n)"
                    type="text"
                    class="auto-input m-1 px-3 py-1"
                    :ref="`input-${n}`"
                    :key="n"
                >
            </section>
        </div>
    </article>
</template>
<style>

.inputs{
    width: 50%;
    height: 5rem;
    background-color: white;
    border-radius: 5px;
}
.auto-input{
    width: 5rem;
    height: 2rem;
    background-color: rgba(128, 128, 128, 0.288);
}

</style>