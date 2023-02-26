<template>
  <div class="about">
    <h1>About</h1>
    <div class="content">
      <h2>Json Data</h2>
      <table class="data-table">
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
        <tr v-for="(list, index) in lists" :key="list.id" draggable @dragstart="dragList($event, index)" @drop="dropList($event, index)" @dragover.prevent @dragenter.prevent>
          <td>{{ list.id }}</td>
          <td>{{ list.name }}</td>
        </tr>
      </table>
    </div>
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
      <ClipBoardComp code-num="abcd1234"></ClipBoardComp>
    </div>
  </div>
</template>

<script>
import ModalComp from "@/components/ModalComp.vue";
import ProgressBarComp from "@/components/ProgressBarComp.vue";
import ClipBoardComp from "@/components/ClipBoardComp.vue";
import lists from "../assets/data.json";

export default {
  name: "AboutView",
  data() {
    return {
      lists: lists,
    };
  },
  components: {
    ModalComp,
    ProgressBarComp,
    ClipBoardComp,
  },
  methods: {
    dragList(event, dragIndex) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("drag-index", dragIndex);
    },
    dropList(event, dropIndex) {
      const dragIndex = event.dataTransfer.getData("drag-index");
      const deleteList = this.lists.splice(dragIndex, 1);
      this.lists.splice(dropIndex, 0, deleteList[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 100%;
  th {
    border: 1px solid #ccc;
    padding: 1em;
    background-color: #eee;
  }
  td {
    border: 1px solid #ccc;
    padding: 1em;
  }
}
</style>
