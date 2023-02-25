<template>
  <div class="clip-board">
    <h2>Clip Board</h2>
    <p class="code-text">{{ code }}</p>
    <button class="btn" v-on:click="clipBtn">↑コードをコピー</button>
    <p class="copied-text" v-show="show"><span>コピーしました！</span></p>
  </div>
</template>

<script>
export default {
  name: "ClipBoardComp",
  data() {
    return {
      code: "abcd1234",
      show: false,
    };
  },
  methods: {
    clipBtn() {
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 1500);
      navigator.clipboard.writeText(this.code);
      return {
        code: this.code,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.clip-board {
  .code-text {
    font-size: 24px;
    font-weight: bold;
    color: #42b300;
  }
  .copied-text {
    font-size: 13px;
  }
  .copied-text {
    span {
      background-color: #ff0034;
      padding: 0.5em;
      border-radius: 4px;
      color: #fff;
      position: relative;
      &::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #ff0034 transparent;
        position: absolute;
        top: -9px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
