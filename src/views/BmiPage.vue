<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-12 d-flex flex-column p-4 bmi-template">
                <header class="bmi-header d-flex justify-content-center"><h4>Calculate BMI</h4></header>
                <main class="bmi-main">
                    <article class="bmi-inputs d-flex flex-column">
                        <section class="input-height d-flex justify-content-center my-3">
                            <label class="mx-2 d-flex align-items-center" for="height">Height(cm)</label>
                            <input type="number" v-model="height" class="self-input p-1" id="height" />
                        </section>
                        <section class="input-weight d-flex justify-content-center my-3">
                            <label class="mx-2 d-flex align-items-center" for="weight">Weight(kg)</label>
                            <input type="number" v-model="weight" class="self-input p-1" id="weight" />
                        </section>
                        <section class="input-button d-flex justify-content-center my-2">
                            <button type="button" class="self-button p-1" @click="handleOnClick">Calculate</button>
                        </section>
                        <section class="result d-flex justify-content-center">
                            <span :class="`result-range ${(result && (range === 'Underweight' || range === 'Overweight')) ? 'bg-warning' : (result && (range === 'healthy')) ? 'bg-success' : (result) ? 'bg-danger' : ''}`">
                                BMI: {{ result ? result : '' }}&nbsp;|&nbsp;{{result ? range : ''}}
                            </span>
                        </section>
                    </article>&nbsp;
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'BmiPage',

    data() {
        return {
            height: null,
            weight: null,
            result: 0,
            range: ''
        }
    },

    methods: {
        handleOnClick() {
            if (!this.weight || !this.height) {
                alert('fill the input')
            } else {
                this.result = (this.weight / (this.height / 100) ** 2).toFixed(1)
            }
            if(this.result < 18.5){
                this.range = 'Underweight'
            }else if(this.result >= 18.5 && this.result < 25){
                this.range = 'healthy'
            }else if(this.result >= 25 && this.result < 30){
                this.range = 'Overweight'
            }else{
                this.range = 'Obese'
            }
        }
    }
}
</script>


<style>
.container {
    height: 100vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
}

.bmi-template{
    background-color: white;
    border-radius: 10px;
}

input {
    width: 80%;
    border: none;
    border-bottom: 2px solid blue;
    outline: none;
    background-color: rgba(170, 169, 169, 0.154);
}

button{
    width: 20vh;
    background-color: whitesmoke;
    border: 2px solid black;
    border-radius: 20px;
}

.result-range{
    background-color: rgba(170, 169, 169, 0.154);
    padding: 10px;
    border-radius: 10px;
}

</style>