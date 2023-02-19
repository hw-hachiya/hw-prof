<template>
  <div class="form-birthday">
    <form @input="submit">
      <h2>User Info</h2>
      <div class="form-group">
        <label for="birthday">Birthday</label>
        <input
          type="text"
          class="form-control"
          v-model="birthday"
          placeholder="Enter Birthday"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormBirthdayComp",
  data: () => {
    return {
      birthday: null,
    };
  },
  methods: {
    submit: function () {
      this.$emit("update", {
        birthday: this.birthday,
      });
    },
  },
};
</script>
