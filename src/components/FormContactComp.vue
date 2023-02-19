<template>
  <div class="form-contact">
    <form @input="submit">
      <h2>Contact Info</h2>
      <div class="form-group">
        <label for="Email">Email</label>
        <input
          type="text"
          class="form-control"
          v-model="Email"
          placeholder="Enter Email"
        />
      </div>
      <div class="form-group">
        <label for="tel">Tel</label>
        <input
          type="text"
          class="form-control"
          v-model="tel"
          placeholder="Enter Phone Number"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormContactComp",
  data: () => {
    return {
      Email: null,
      tel: null,
    };
  },
  methods: {
    submit: function () {
      this.$emit("update", {
        Email: this.Email,
        tel: this.tel,
      });
    },
  },
};
</script>
