<template>
<nav class="navbar is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="../../assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="28" height="28">
    </a>
    <div class="navbar-burger burger" data-target="header-example-list">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="header-example-list" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="http://www.yoohooworld.com/#/">
        Document
      </a>
       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Demo List
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="#container-round">
            Container Round
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#container">
            Zoom Insider Container
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="#scroll-left">
            Scroller At Left && Pane Container Right
          </a>
          <a class="navbar-item" href="#scroll-right">
            Scroller At Left && Pane Container Right
          </a>
          <a class="navbar-item" href="#scroll-top">
            Scroller At Left && Pane Container Right
          </a>
          <a class="navbar-item" href="#scroll-bottom">
            Scroller At Left && Pane Container Right
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    
}
</script>

