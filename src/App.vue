<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/works">Works</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="footer">
      <p>Copyright &copy; H-Works All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@100;400&display=swap");

body {
  margin: 0;
  h1 {
    font-size: clamp(1.875rem, 1.25rem + 2vw, 2.5rem);
  }
  h2 {
    font-size: clamp(1.5rem, 1rem + 1.6vw, 2rem);
  }
  h3 {
    font-size: clamp(1.125rem, 0.75rem + 1.2vw, 1.5rem);
  }
}
#app {
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1100px;
  margin: auto;
  padding: 20px;
  nav {
    padding: 20px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .content {
    padding: 50px 0;
    border-top: 1px solid #ccc;
  }
  .footer {
    padding: 20px;
    border-top: 1px solid #ccc;
  }
}
</style>
