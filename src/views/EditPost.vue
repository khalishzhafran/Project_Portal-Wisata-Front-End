<template>
  <Navbar />
  <div class="container mt-5 pt-5 mb-4">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <img :src="post.image" class="img-fluid" />
          </div>
          <div class="mb-3">
            <textarea
              v-model="caption"
              placeholder="Masukkan Caption"
              class="form-control"
              name="caption"
              cols="30"
              rows="7"
            ></textarea>
          </div>
          <button class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
export default {
  name: "EditPost",
  components: { Navbar },
  data() {
    return {
      post: {},
      caption: "",
    };
  },
  mounted() {
    axios
      .get("posts/" + this.$route.params.id)
      .then((res) => {
        this.post = res.data;
        this.caption = this.post.caption;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    submitForm() {
      const data = {
        caption: this.caption,
      };
      axios
        .put("posts/" + this.$route.params.id, data)
        .then((res) => this.$router.push("/profile"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>