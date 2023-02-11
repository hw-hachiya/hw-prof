<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HeaderComp msg="Welcome" />
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
