<script>
export default {
    data() {
        return {
            hexCode: null
        }
    },
    watch: {
        hexCode(value) {
            this.$refs.bg.style.backgroundColor = value
        }
    }
}
</script>

<template> 
<article class="container">
    <div class="row h-100 d-flex flex-column align-items-center justify-content-center">
        <section class="bg col-12" ref="bg" @click="handleOnClick">
            <div class="bg-changing">
                <h2 class="heading text-light">
                    select your ideal color
                </h2>
            </div>
        </section>
        <section class="picker">
            <div class="picker-parent">
                <label for="pick" class="text-white">pick color &DownArrow;</label>
                <input v-model="hexCode" type="color" ref="colorPicker" class="picker-input w-100" id="pick"/>
            </div>
        </section>
    </div>
</article>
</template>

<style> 
.bg{
    background-color: black;
    min-height: 45vh;
    border: 5px solid white;
    border-radius: 12px;
    padding: 8px;
    margin-bottom: 10px;
}

.heading{
    text-align: center;
}

.picker-input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    cursor: pointer;
}

.picker-input::-webkit-color-swatch{
    border-radius: 12px;
    border: none;
    border: 5px solid white;
}

.picker-input::-moz-color-swatch{
    border-radius: 12px;
    border: none;
    border: 5px solid white;
}

</style>