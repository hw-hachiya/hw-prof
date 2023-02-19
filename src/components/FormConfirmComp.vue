<template>
  <div class="form-confirm">
    <h2>Confirmation</h2>
    <p>Name: {{ form.firstName }} {{ form.lastName }}</p>
    <p>Email: {{ form.Email }}</p>
    <p>Tel: {{ form.tel }}</p>
    <p>Birthday: {{ form.birthday }}</p>
  </div>
</template>

<script>
export default {
  name: "FormConfirmComp",
  props: {
    form: Object,
  },
};
</script>
