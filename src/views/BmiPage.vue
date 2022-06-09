<template>
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row bmi-template">
            <div class="col-12 d-flex flex-column p-4">
                <header class="bmi-header d-flex justify-content-center">
                    <h4>Calculate BMI</h4>
                </header>
                <article class="bmi-main">
                    <div class="bmi-inputs d-flex flex-column">
                        <section class="input-height d-flex justify-content-center my-3">
                            <label class="mx-2 d-flex align-items-center" for="height">Height(cm)</label>
                            <input type="number" v-model="height" class="self-input p-1" id="height" />
                        </section>
                        <section class="input-weight d-flex justify-content-center my-3">
                            <label class="mx-2 d-flex align-items-center" for="weight">Weight(kg)</label>
                            <input type="number" v-model="weight" class="self-input p-1" id="weight" />
                        </section>
                        <section class="input-button d-flex justify-content-center my-2">
                            <button type="button" class="self-button p-1 btn-warning"
                                @click="handleOnClick">Calculate</button>
                        </section>
                        <section class="result d-flex justify-content-center">
                            <span
                                :class="`result-range ${(result && (range === 'Underweight' || range === 'Overweight')) ? 'bg-warning text-white' : (result && (range === 'healthy')) ? 'bg-success text-white' : (result) ? 'bg-danger text-white' : ''}`">
                                BMI: {{ result ? result : '' }}&nbsp;|&nbsp;{{ result ? range : '' }}
                            </span>
                        </section>
                    </div>
                </article>
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
            if (this.result < 18.5) {
                this.range = 'Underweight'
            } else if (this.result >= 18.5 && this.result < 25) {
                this.range = 'healthy'
            } else if (this.result >= 25 && this.result < 30) {
                this.range = 'Overweight'
            } else {
                this.range = 'Obese'
            }
        }
    }
}
</script>


<style>
.container {
    height: 100%;
}

.bmi-template {
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

button {
    width: 20vh;
    background-color: whitesmoke;
    border: 2px solid black;
    border-radius: 20px;
    margin: 20px;
}

.container {
    height: 100vh;
}

.bmi-template {
    min-height: 40vh;
    background-color: whitesmoke;
    border-radius: 12px;
}

.result-range {
    background-color: rgba(170, 169, 169, 0.154);
    padding: 10px;
    border-radius: 10px;
}

.result {
    margin-top: 10px;
}
</style>