<template>
  <div class="works">
    <div class="content">
      <h1>Works</h1>
      <h2>Works</h2>
      <h3>Works</h3>
      <p>This is my first work.</p>
      <p>これが最初の仕事です。</p>
    </div>
    <div class="content">
      <h1>Works 2</h1>
      <p>This is my second work.</p>
      <button @click="clickBtn('OK')">クリック</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickBtn: (e) => {
      console.log(e);
    },
  },
};
</script>
