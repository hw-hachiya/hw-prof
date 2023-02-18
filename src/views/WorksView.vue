<template>
  <div class="works">
    <h1>Works</h1>
    <div class="content">
      <h2>Works1</h2>
      <h3>アコーディオンサンプル</h3>
      <p>これが最初の仕事です。</p>
      <AccComp acc-title="表示する">
        <template v-slot:inner-content>
          <p>これが最初のボタンで表示される文章です。</p>
        </template>
      </AccComp>
      <AccComp>
        <template v-slot:inner-content>
          <p>これが次のボタンで表示される文章です。</p>
        </template>
      </AccComp>
    </div>
    <div class="content">
      <h1>Works 2</h1>
      <p>This is my second work.</p>
      <button @click="clickBtn('OK')">クリック</button>
    </div>
  </div>
</template>

<script>
import AccComp from "@/components/AccComp.vue";

export default {
  name: "WorksView",
  components: {
    AccComp,
  },
  methods: {
    clickBtn: (e) => {
      console.log(e);
    },
  },
};
</script>
