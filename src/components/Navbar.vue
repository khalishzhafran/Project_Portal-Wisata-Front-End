<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark pt-2 shadow-sm fixed-top"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">Makassar Travel</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bstarget="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-if="login" to="/posts/create" class="nav-link me-3"
            ><i class="bi bi-plus"></i> Create New Post</router-link
          >
          <router-link v-if="login" to="/profile" class="nav-link me-3"
            ><i class="bi bi-person"></i> My Profile</router-link
          >
        </div>
        <form class="d-flex ms-auto">
          <router-link
            v-if="!login"
            to="/register"
            class="btn btn-outline-danger me-2"
            ><i class="bi bi-journal-plus"></i> Register</router-link
          >
          <router-link
            v-if="!login"
            to="/login"
            class="btn btn-outline-primary me-2"
            ><i class="bi bi-box-arrow-in-left"></i> Login</router-link
          >
          <button
            v-if="login"
            @click.prevent="logout()"
            class="btn btn-outline-primary me-2"
          >
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  computed: {
    login() {
      return this.$store.state.login;
    },
  },
  methods: {
    logout() {
      axios
        .post("logout")
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("logout");
            this.$router.push("/");
          }
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style scoped>
.navbar {
  padding-top: 0.75em !important;
}
.navbar-brand {
  font-size: 1.5em;
}
</style>