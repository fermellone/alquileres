<template>
  <v-text-field
    :label="label"
    class="custom-input"
    :rules="rules"
    v-model="localValue"
    :counter="counter"
  />
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    rules: { type: Array, default: () => [] },
    value: { type: Number | String, default: null },
    counter: { type: Number | String, default: null },
    required: { type: Boolean, default: false },
  },

  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },

  mounted() {
    if (this.required) {
      const notEmptyRule = (v) => {
        return (v && v.length > 0) || "Este campo no puede estar vacío.";
      };

      this.rules.push(notEmptyRule);
    }
  },
};
</script>
