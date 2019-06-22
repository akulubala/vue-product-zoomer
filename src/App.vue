<template>
  <div class="hero">
    <header class="hero-head">
      <Navbar/>
    </header>
    <ScrollerAtRight/>
    <ScrollerAtLeft/>
  </div>
</template>

<script>
import Navbar from "./components/examples/Navbar";
import ScrollerAtRight from "./components/examples/ScrollerAtRight";
import ScrollerAtLeft from "./components/examples/ScrollerAtLeft";
export default {
  name: "app",
  components: {
    Navbar,
    ScrollerAtRight,
    ScrollerAtLeft
  }
};
</script>
<style>
</style>