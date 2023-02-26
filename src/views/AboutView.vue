<template>
  <div class="about">
    <h1>About</h1>
    <div class="content">
      <p>This is an about page</p>
      <ModalComp open-btn-title="詳細はこちら">
        <h2>Modal</h2>
        <p>恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。自分は停車場のブリッジを</p>
      </ModalComp>
      <ModalComp>
        <h2>Modal2</h2>
        <p>別のモーダルウィンドウが開きます</p>
      </ModalComp>
    </div>
    <div class="content">
      <ProgressBarComp></ProgressBarComp>
    </div>
    <div class="content">
      <h2>Clip Board</h2>
      <ClipBoardComp code-num="wxyz6789"></ClipBoardComp>
      <ClipBoardComp code-num="qqqq9999"></ClipBoardComp>
    </div>
  </div>
</template>

<script>
import ModalComp from "@/components/ModalComp.vue";
import ProgressBarComp from "@/components/ProgressBarComp.vue";
import ClipBoardComp from "@/components/ClipBoardComp.vue";

export default {
  name: "AboutView",
  components: {
    ModalComp,
    ProgressBarComp,
    ClipBoardComp,
  },
};
</script>
