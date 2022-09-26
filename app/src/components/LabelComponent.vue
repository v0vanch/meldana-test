<template>
  <label class="label">
    <span class="label-text">{{ label }}</span>
    <slot/>
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.label {
  display: block;
}

.label-text {
  display: block;
  padding-bottom: 8px;
  font-size: 12px;
  line-height: 14px;
  color: $grey5;
}
</style>
