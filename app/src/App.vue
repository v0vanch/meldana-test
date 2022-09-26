<template>
  <HeaderComponent />
  <div class="content">
    <SidebarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
  }
}
</script>

<style lang="scss">
@import './assets/styles/modules/index.scss';

body {
  margin: 0;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: $white;
  color: $black;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
</style>

<style scoped lang="scss">
.content {
  display: flex;
}
</style>
