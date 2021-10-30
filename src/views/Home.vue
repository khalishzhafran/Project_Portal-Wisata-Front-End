<template>
  <div>
    <Navbar></Navbar>
    <Carousel></Carousel>
    <PostWrapper>
      <h1 class="text-center mb-4">All Posts</h1>
      <div class="col-md-6" v-for="post in posts" :key="post.id">
        <Post :post="post" :user="post.user" :nav="false" />
      </div>
    </PostWrapper>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Post from "../components/Post.vue";
import PostWrapper from "../components/PostWrapper.vue";
import Carousel from "../components/Carousel.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Navbar, Post, PostWrapper, Carousel, Footer },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("posts")
      .then((res) => (this.posts = res.data))
      .catch((err) => console.log(err));
  },
};
</script>