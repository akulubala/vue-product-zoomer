<template>
  <div class="hero">
    <header class="hero-head">
      <Navbar />
    </header>
    <ScrollerAtRight />
  </div>
</template>

<script>
import Navbar from "./components/examples/Navbar";
import ScrollerAtRight from "./components/examples/ScrollerAtRight";
export default {
  name: "app",
  components: {
    Navbar,
    ScrollerAtRight
  }
};
</script>
<style>
</style>