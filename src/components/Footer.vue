<template>
  <footer
    class="
      d-flex
      flex-wrap
      justify-content-between
      align-items-center
      py-3
      border-top
      bg-white
      mt-auto
    "
  >
    <div class="col-md-4 d-flex align-items-center">
      <a
        href="/"
        class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
        <svg class="bi" width="30" height="24">
          <use xlink:href="#bootstrap" />
        </svg>
      </a>
      <span class="text-muted"
        >&copy; 2021 Litsch, Muhammad Khalish Zhafran</span
      >
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="me-3">
        <a
          class="text-muted"
          href="https://web.facebook.com/muhammad.khalish.5"
        >
          <i class="bi bi-facebook" style="font-size: 2rem"></i>
        </a>
      </li>
      <li class="me-3">
        <a class="text-muted" href="https://www.instagram.com/khalish260303">
          <i class="bi bi-instagram" style="font-size: 2rem"></i>
        </a>
      </li>
      <li class="me-3">
        <a class="text-muted" href="https://github.com/Khalish-Litsch">
          <i class="bi bi-github" style="font-size: 2rem"></i>
        </a>
      </li>
      <li class="me-3">
        <a class="text-muted" href="https://wa.me/6282397765768">
          <i class="bi bi-whatsapp" style="font-size: 2rem"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>