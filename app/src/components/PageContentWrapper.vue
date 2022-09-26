<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.wrapper {
  flex-grow: 1;
  padding: 24px 24px 0;
  background-color: $grey1;
}
</style>
