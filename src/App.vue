<template>
  <main>
    <article class="vue-projects w-100 container-fluid p-5">
      <div class="projects row d-flex">
        <section class="bmi-project col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">BMI Computing</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">Take care of your health</h5>
              <p class="card-text text-dark">enter your height and weight and get your body mass index</p>
              <router-link to="/bmi">
                <button type="button" class="btn btn-primary">start</button>
              </router-link>
            </div>
          </div>
        </section>
        <section class="color-picker col-6 justify-content-center">
          <div class="card border-primary mb-3">
            <div class="card-header">background color</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">set your favorite color to background</h5>
              <p class="card-text text-dark">to improve my skill in vue js i create this</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
        <section class="todo-app col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">Todo</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">Register so you do not forget</h5>
              <p class="card-text text-dark">write your to do here!</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
        <section class="modal-popup col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">Modal</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">Modal popup</h5>
              <p class="card-text text-dark">create modal to improve my skill in vue</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
        <section class="auto-input col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">auto input</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">fill inputs</h5>
              <p class="card-text text-dark">fill input to see result!</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
        <section class="form-validation col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">form</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">form validate</h5>
              <p class="card-text text-dark">login form validation</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
        <section class="list-of-users col-6">
          <div class="card border-primary mb-3">
            <div class="card-header">List of Users</div>
            <div class="card-body text-primary">
              <h5 class="card-title text-secondary">list of user</h5>
              <p class="card-text text-dark">get data and we search in it</p>
              <button type="button" class="btn btn-primary">start</button>
            </div>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>

<script>

export default {

}

</script>


<style>
.card {
  max-width: 94vh !important;
  background-color: rgba(199, 199, 199, 0.211);
}
</style>
