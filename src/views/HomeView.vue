<template>
  <div class="home">
    <div class="content">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HeaderComp msg="Welcome" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComp,
  },
};
</script>
