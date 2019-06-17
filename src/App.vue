<template>
  <div class="hero">
    <header class="hero-head">
      <Navbar />
    </header>
    <ScrollerAtLeft />
  </div>
</template>

<script>
import Navbar from "./components/examples/Navbar";
import ScrollerAtLeft from "./components/examples/ScrollerAtLeft";
export default {
  name: "app",
  components: {
    Navbar,
    ScrollerAtLeft
  }
};
</script>
<style>
</style>