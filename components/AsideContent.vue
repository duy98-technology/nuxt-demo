<template>
  <div class="menu">
    <el-menu
      :default-active="menuKey"
      class="el-menu"
      active-text-color="#14B06F"
      :collapse="isCollapse"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item style="margin-bottom: 40px">
        <img v-if="isCollapse" id="logo" src="@/assets/logo2.svg" alt="">
        <span> <img src="@/assets/logo.svg" alt=""></span>
      </el-menu-item>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/parent">
        Parent
      </NuxtLink>
    </el-menu>
    <el-button
      v-if="isCollapse"
      style="width: 100%"
      icon="el-icon-arrow-right"
      @click="isCollapse = false"
    />
    <el-button
      v-else
      style="width: 100%"
      icon="el-icon-arrow-left"
      @click="isCollapse = true"
    />
  </div>
</template>
<script>
export default {
  name: 'AsideContent',
  data () {
    return {
      isCollapse: false,
      menuKey: '2'
    }
  },
  methods: {
    handleSelect (key) {
      this.menuKey = key
    }
  }
}
</script>
<style>
.menu {
  font-size: 18px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

#logo {
  width: 25px;
}
.el-menu {
  font-family: "Inter";
  text-align: left;
}

.el-menu:not(.el-menu--collapse) {
  width: 240px;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #fff;
}
.el-submenu .el-menu-item {
  margin-left: 10px;
}

.menu-icon {
  margin-right: 10px;
}

.menu-text-active {
  color: #14b06f;
}
</style>
