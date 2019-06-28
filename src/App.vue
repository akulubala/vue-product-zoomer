<template>
  <div class="hero">
    <header class="hero-head">
      <Navbar/>
    </header>
    <ScrollerAtTop />
    <hr class="hr" />
    <ScrollerAtLeft />
    <hr class="hr" />
    <ScrollerAtBottom />
    <hr class="hr" />
    <ScrollerAtRight />
    <hr class="hr" />
    <InsideRound />
    <hr class="hr" />
    <InsideContainer />
  </div>
</template>

<script>
import Navbar from "./components/examples/Navbar";
import ScrollerAtBottom from "./components/examples/ScrollerAtBottom";
import ScrollerAtTop from "./components/examples/ScrollerAtTop";
import ScrollerAtRight from "./components/examples/ScrollerAtRight";
import ScrollerAtLeft from "./components/examples/ScrollerAtLeft";
import InsideRound from "./components/examples/InsideRound";
import InsideContainer from "./components/examples/InsideContainer";
export default {
  name: "app",
  components: {
    Navbar,
    ScrollerAtBottom,
    ScrollerAtTop,
    ScrollerAtRight,
    ScrollerAtLeft,
    InsideRound,
    InsideContainer
  }
};
</script>
<style>
pre {
  padding: 0px !important;
}
</style>