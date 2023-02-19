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
