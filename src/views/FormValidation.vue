<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

const alpha = helpers.regex(/^[a-zA-Z]*$/);

export default {
  data() {
    return {
      v$: useValidate(),
      userName: "",
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      userName: {
        required,
        minLength: minLength(6),
      },
      email: { required, email },
      password: {
        required,
        minLength: minLength(6),
        alpha: helpers.withMessage("must should A, a => Z, z", alpha),
      },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("form successfully submited");
        this.$refs.validateForm.reset();
      } else {
        alert("Form failed validation");
      }
    },
  },
};
</script>

<template>
  <article class="container">
    <form ref="validateForm" @submit.prevent="submitForm">
      <section class="validate-inpusts row w-50 h-50 d-flex flex-column">
        <input
          :class="`validate-input
          ${v$.userName.$error ? 'validate-error' : ''}`"
          id="username"
          type="text"
          v-model="userName"
          placeholder="Username"
        />
        <span v-if="v$.userName.$error" class="error-text">
          {{ v$.userName.$errors[0].$message }}
        </span>
        <input
          :class="`validate-input
          ${v$.userName.$error ? 'validate-error' : ''}`"
          id="email"
          v-model="email"
          type="email"
          placeholder="Email"
        />
        <span v-if="v$.email.$error" class="error-text">
          {{ v$.email.$errors[0].$message }}
        </span>
        <input
          :class="`validate-input
          ${v$.userName.$error ? 'validate-error' : ''}`"
          id="password"
          v-model="password"
          type="password"
          placeholder="password"
        />
        <span v-if="v$.password.$error" class="error-text">
          {{ v$.password.$errors[0].$message }}
        </span>
      </section>
      <section class="validate-buttons">
        <button class="validate-button" id="confirm">Sign in</button>
      </section>
    </form>
  </article>
</template>

<style>
form {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  top: 33%;
}

.validate-input {
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px 5px 0 0;
}

.validate-button{
  background-color: rgb(255, 174, 0);
}

.validate-error {
  border: 2px soild red !important;
  background-color: rgba(255, 0, 0, 0.267);
}

.error-text {
  color: red;
}
</style>
