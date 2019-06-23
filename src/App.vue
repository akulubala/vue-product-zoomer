<template>
  <div class="hero">
    <header class="hero-head">
      <Navbar/>
    </header>
    <ScrollerAtTop/>
    <ScrollerAtBottom/>
    <ScrollerAtRight/>
    <ScrollerAtLeft/>
  </div>
</template>

<script>
import Navbar from "./components/examples/Navbar";
import ScrollerAtBottom from "./components/examples/ScrollerAtBottom";
import ScrollerAtTop from "./components/examples/ScrollerAtTop";
import ScrollerAtRight from "./components/examples/ScrollerAtRight";
import ScrollerAtLeft from "./components/examples/ScrollerAtLeft";
export default {
  name: "app",
  components: {
    Navbar,
    ScrollerAtBottom,
    ScrollerAtTop,
    ScrollerAtRight,
    ScrollerAtLeft
  }
};
</script>
<style>
pre {
  padding: 0px !important;
}
</style>