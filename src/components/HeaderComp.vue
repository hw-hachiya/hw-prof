<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>This is HW Web.</p>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
