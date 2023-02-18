<template>
  <div class="acc">
    <button v-on:click="show = !show" class="btn">{{ label }}</button>
    <transition>
      <div class="inner-content" v-show="show">
        <slot name="inner-content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AccComp",
  props: {
    accTitle: {
      type: String,
      default: "詳細を見る",
    },
  },
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    label: function () {
      return this.show ? "閉じる" : this.accTitle;
    },
  },
};
</script>

<style lang="scss" scoped>
.acc {
  .btn {
    width: 200px;
    border: 1px solid transparent;
    border-radius: 100px;
    background-color: #4ac0ff;
    cursor: pointer;
    padding: 0.5em;
    margin: 0.5em;
    box-shadow: 0px 2px 3px #00000020;
    font-size: 1rem;
    color: #fff;
  }
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-leave-active {
  transition: opacity 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
