<template>
<div class="container">
    <div class="row">
        <div class="col-6">
            <header class="bmi-header">Calculate BMI</header>
            <main class="bmi-main">
                <article class="bmi-inputs">
                    <section class="input-height">
                        <label for="height">Height</label>
                        <input type="number" class="self-input" id="height"/>
                    </section>
                    <section class="input-weight">
                        <label for="weight">Weight</label>
                        <input type="number" class="self-input" id="weight"/>
                    </section>
                    <section class="input-button">
                        <button type="button" class="self-button">Calculate</button>
                    </section>
                </article>
            </main>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name : 'BmiPage'
    },
    computed: {
        userName() {
            
        }
    }
</script>
