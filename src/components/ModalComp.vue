<template>
  <div class="modal">
    <button class="btn" v-on:click="openModal">{{ openBtnTitle }}</button>
    <transition>
      <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div class="modal-content" v-on:click="stopEvent">
          <slot></slot>
          <button class="btn" v-on:click="closeModal">Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  props: {
    openBtnTitle: {
      type: String,
      default: "ウィンドウを開く",
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    openModal: function () {
      this.showContent = true;
    },
    closeModal: function () {
      this.showContent = false;
    },
    stopEvent: function () {
      event.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-content {
    z-index: 2;
    width: 80%;
    max-width: 800px;
    padding: 1em;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px #00000040;
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
