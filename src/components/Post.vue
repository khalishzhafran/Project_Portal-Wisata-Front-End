<template>
  <div class="card card-post shadow">
    <img :src="post.image" class="card-img-top" />
    <div class="card-body">
      <p class="mb-2 profile">
        <img :src="user.profile" class="me-2" />
        <b>{{ user.name }}</b>
        <span class="text-muted float-end"
          ><small> {{ timeUpload }} </small></span
        >
      </p>
      <small class="card-text post-caption">{{ post.caption }}</small>
      <!-- Tombol Edit dan Hapus -->
      <div v-if="nav" class="post-nav mt-3 text-center">
        <button
          @click="deletePost()"
          class="btn btn-outline-danger btn-sm me-2"
        >
          <i class="bi bi-trash"></i> Delete
        </button>
        <router-link
          :to="`/posts/${post.id}/edit`"
          class="btn btn-outline-primary btn-sm"
        >
          <i class="bi bi-pencil-fill"></i> Edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "Post",
  props: ["post", "user", "nav"],
  computed: {
    timeUpload() {
      return moment(this.post.created_at).fromNow();
    },
  },
  methods: {
    deletePost() {
      axios
        .delete("/posts/" + this.post.id)
        .then((res) => this.$router.go())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.card-post {
  width: 100%;
  margin-bottom: 2em;
  border-radius: 15px;
}
.card-post .card-body {
  padding: 0 1em 1em;
}
.card-post .card-img-top {
  padding: 0.8em;
}
.card-post .profile img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: text-top;
}
.card-post .profile a {
  text-decoration: none;
  color: unset;
}
</style>