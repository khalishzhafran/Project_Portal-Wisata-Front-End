<template>
  <Navbar />
  <div class="container mt-5 pt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <div class="mb-3">
            <small for="image">Upload gambar</small>
            <input
              id="image"
              @change="onFileChange"
              type="file"
              class="form-control"
              accept="image/*"
              name="image"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              v-model="caption"
              id="caption"
              placeholder="Masukkan Caption"
              class="form-control"
              name="caption"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Create Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "CreatePost",
  components: { Navbar },
  data() {
    return {
      image: null,
      caption: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    submitForm() {
      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("caption", this.caption);
      axios
        .post("posts", formData)
        .then((res) => {
          if (res.status == 201) this.$router.push("/");
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style>
</style>