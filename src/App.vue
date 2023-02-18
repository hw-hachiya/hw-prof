<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="footer">
      <p>Copyright &copy; H-Works All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setMeta(route) {
      // タイトルを設定
      if (route.meta.title) {
        let setTitle = route.meta.title;
        document.title = setTitle;
      }
      // ディスクリプションを設定
      if (route.meta.desc) {
        let setDesc = route.meta.desc;
        document
          .querySelector("meta[name='description']")
          .setAttribute("content", setDesc);
      }
    },
  },
  mounted() {
    let route = this.$route;
    this.setMeta(route);
  },
  watch: {
    $route(route) {
      this.setMeta(route);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@100;400&display=swap");

@mixin base-color($color: #2c3e50) {
  color: $color;
}

body {
  @include base-color;
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  h1 {
    // 40px-30px
    font-size: clamp(1.875rem, 1.25rem + 2vw, 2.5rem);
  }
  h2 {
    // 32px-24px
    font-size: clamp(1.5rem, 1rem + 1.6vw, 2rem);
  }
  h3 {
    // 24px-18px
    font-size: clamp(1.125rem, 0.75rem + 1.2vw, 1.5rem);
  }
  a {
    @include base-color;
    font-weight: bold;
    text-decoration: none;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #469fc9;
    }
  }
  button {
    font-family: "Roboto", "Noto Sans JP", sans-serif;
  }
  .long-sentence {
    text-align: left;
  }
}
#app {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  nav {
    padding: 20px;
  }
  .content {
    padding: 50px 0;
    border-top: 1px solid #ccc;
    .flex-region {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
  .footer {
    padding: 20px;
    border-top: 1px solid #ccc;
  }
}
</style>
