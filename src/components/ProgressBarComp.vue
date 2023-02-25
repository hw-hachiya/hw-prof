<template>
  <div class="progress-bar">
    <h2>Progress Bar</h2>
    <p>{{ max }}文字まで入力できます</p>
    <textarea v-model="message" maxlength="144"></textarea>
    <div class="bar-region">
      <div class="bar-length" :style="styles"></div>
    </div>
    <p class="max-length">
      <span>{{ max - message.length }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProgressBarComp",
  data() {
    return {
      max: 144,
      message: "メッセージをどうぞ",
    };
  },
  computed: {
    styles() {
      let width = (this.message.length / this.max) * 100;
      return {
        width: width + "%",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar {
  max-width: 640px;
  margin: auto;
  textarea {
    width: calc(100% - 22px);
    height: 10em;
    padding: 10px;
    border: 1px solid #ccc;
    line-height: 1.5;
  }
  .bar-region {
    width: 100%;
    background-color: #ddd;
    border-radius: 100px;
    overflow: hidden;
    .bar-length {
      border-radius: 100px;
      border: 7px solid #93cd00;
    }
  }
  .max-length {
    span {
      color: #42b300;
      font-weight: bold;
      font-size: 24px;
    }
    &:before {
      content: "あと";
    }
    &:after {
      content: "文字";
    }
  }
}
</style>
