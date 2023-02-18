<template>
  <div class="works">
    <h1>Works</h1>
    <div class="content">
      <h2>Works</h2>
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
      <h2>Works</h2>
      <h3>Display Grid の表示テスト</h3>
      <div class="flex-region">
        <div class="flex-region__inner">
          <h4>タイトル</h4>
          <p class="sentence">
            恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを
          </p>
        </div>
        <div class="flex-region__inner">
          <h4>タイトル</h4>
          <p class="sentence">吾輩は猫である。名前はまだ無い。どこで生れたか</p>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>Works</h2>
      <h3>サンプル</h3>
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
  mounted: function () {
    let elements = document.querySelectorAll(".sentence");
    elements.forEach(function (element) {
      let wordLength = element.innerText.length;
      if (wordLength > 28) {
        element.classList.add("long-sentence");
      }
    });
  },
};
</script>
