<template>
  <div class="home">
    <div class="content">
      <svg
        width="240"
        height="240"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>alpha-h-box</title>
        <path
          d="M9,7V17H11V13H13V17H15V7H13V11H11V7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
        />
      </svg>
      <HeaderComp msg="Welcome" />
    </div>
    <div class="content">
      <LimitedComp />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";
import LimitedComp from "@/components/LimitedComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
    LimitedComp,
  },
};
</script>

<style scoped>
svg {
  background-color: #4ac0ff;
  border-radius: 20px;
}
</style>
