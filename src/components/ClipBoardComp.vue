<template>
  <div class="clip-board">
    <p class="code-text">{{ codeNum }}</p>
    <div class="clip-btn">
      <button v-on:click="clipBtn">コードをコピー</button>
      <p class="copied-text" v-show="show"><span>コピーしました！</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClipBoardComp",
  props: {
    codeNum: {
      type: String,
      default: "aaaa1111",
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    clipBtn() {
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 1500);
      navigator.clipboard.writeText(this.codeNum);
    },
  },
};
</script>

<style lang="scss" scoped>
.clip-board {
  padding: 10px;
  .code-text {
    font-size: 24px;
    font-weight: bold;
    color: #42b300;
    margin: 0;
  }
  .clip-btn {
    position: relative;
    button {
      margin: 5px;
      border: none;
      background-color: #ffb700;
      border-radius: 100px;
      padding: 0 10px;
      cursor: pointer;
      position: relative;
    }
  }
  .copied-text {
    font-size: 13px;
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
  .copied-text {
    span {
      background-color: #ff0034;
      padding: 0.4em;
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
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
