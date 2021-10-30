<template>
  <div class="container auth-container">
    <div class="row">
      <div class="col-md-4 login text-center">
        <h3>Please Login</h3>
        <br />
        <form @submit.prevent="submitForm()">
          <div class="mb-3">
            <input
              v-model="email"
              name="email"
              type="email"
              class="form-control"
              placeholder="Email"
              autofocus
            />
          </div>
          <div class="mb-3">
            <input
              v-model="password"
              name="password"
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100 mb-4">
            LOGIN
          </button>
        </form>
        <span
          >Don't have any account?
          <router-link to="/register">Register!</router-link>
          <br />
          <br />
          Don't want to login?
          <router-link to="/">Home!</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      const data = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("login", data)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("login");
            this.$router.push("/");
          }
        })
        .catch((err) => console.log(err));
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