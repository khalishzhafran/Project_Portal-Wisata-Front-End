<template>
  <!-- Carousel -->
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img
          src="../assets/TampilanMakassar.jpg"
          class="d-block w-100"
          height="657"
          alt=""
        />
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          src="../assets/BentengSombaOpu.jpg"
          class="d-block w-100"
          height="657"
          alt=""
        />
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          src="../assets/PantaiLosari.jpg"
          class="d-block w-100"
          height="657"
          alt=""
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style>
</style>