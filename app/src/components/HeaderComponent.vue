<script setup>
import {sidebar} from "@/stores/sidebar";
</script>

<template>
  <header class="header">
    <button class="burger-btn" @click="
sidebar.toggleSidebar()"/>
    <a href="#" class="logo">
      <img src="../assets/images/logo.png" alt="Logo"/>
    </a>
    <div class="title">
      Информационная <br/>
      система МЕЛ
    </div>
    <button class="user-btn"/>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 12px 40px 12px 24px;
  height: $headerHeight;
  color: $black;
}

.burger-btn {
  margin-right: 24px;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url('../assets/icons/menu-burger.svg');
}

.logo {
  width: 74px;
  height: 40px;
}

.title {
  margin-left: 24px;
  padding-left: 24px;
  border-left: 1px solid $grey4;
  height: 40px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
}

.user-btn {
  margin-left: auto;
  width: 24px;
  height: 24px;
  @include default-background;
  background-image: url('../assets/icons/user.svg');
}
</style>
