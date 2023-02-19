<template>
  <div class="form">
    <h1>Form</h1>
    <div class="content">
      <h2>Step:{{ stepNumber }}</h2>
      <keep-alive>
        <FormNameComp v-if="stepNumber === 1" @update="updateForm" />
        <FormContactComp v-if="stepNumber === 2" @update="updateForm" />
        <FormBirthdayComp v-if="stepNumber === 3" @update="updateForm" />
        <FormConfirmComp v-if="stepNumber === 4" v-bind:form="form" />
      </keep-alive>
      <button class="btn" @click="backStep" v-show="stepNumber != 1">
        Back
      </button>
      <button class="btn" @click="nextStep" v-show="stepNumber != 4">
        Next
      </button>
    </div>
    <div class="content">
      <pre><code>{{ form }}</code></pre>
    </div>
  </div>
</template>

<script>
import FormNameComp from "@/components/FormNameComp.vue";
import FormContactComp from "@/components/FormContactComp.vue";
import FormBirthdayComp from "@/components/FormBirthdayComp.vue";
import FormConfirmComp from "@/components/FormConfirmComp.vue";

export default {
  name: "FormView",
  components: {
    FormNameComp,
    FormContactComp,
    FormBirthdayComp,
    FormConfirmComp,
  },
  data: () => {
    return {
      stepNumber: 1,
      form: {
        firstName: null,
        lastName: null,
        Email: null,
        tel: null,
        birthday: null,
      },
    };
  },
  methods: {
    updateForm: function (formData) {
      Object.assign(this.form, formData);
    },
    backStep: function () {
      this.stepNumber--;
    },
    nextStep: function () {
      this.stepNumber++;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 80px;
}
</style>
