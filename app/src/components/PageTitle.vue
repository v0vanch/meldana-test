<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
}
</style>
