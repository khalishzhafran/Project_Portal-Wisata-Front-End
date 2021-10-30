<template>
  <div class="container auth-container">
    <div class="row">
      <div class="col-md-4 login text-center">
        <h3>Register</h3>
        <br />
        <form @submit.prevent="submitForm()">
          <div class="mb-3">
            <input
              v-model="name"
              type="text"
              class="form-control"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              v-model="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <input
              v-model="password_confirmation"
              type="password"
              class="form-control"
              placeholder="Re-entry Password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-4">
            REGISTER
          </button>
        </form>
        <span
          >Already Have an account?
          <router-link to="/login">Login!</router-link>
          <br />
          <br />
          Don't want to register?
          <router-link to="/">Home!</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      axios
        .post("register", data)
        .then((response) => {
          if (response.status == 201) this.$router.push("/login");
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style>
.auth-container,
.auth-container .row {
  height: 100vh;
}
.auth-container .row {
  align-items: center;
  justify-content: center;
}
.auth-container .login {
  padding: 2em;
  background: white;
  border-radius: 15px;
}
.login img {
  display: block;
  margin: auto;
  width: 40%;
}
</style>