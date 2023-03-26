<template>
  <el-container class="container">
    <AsideContent />
    <el-container>
      <el-header style="height: 92px">
        <RightContent />
      </el-header>
      <el-main>
        <transition name="slide-fade" mode="out-in">
          <Nuxt />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AsideContent from '@/components/AsideContent'
import RightContent from '@/components/RightContent'
export default {
  name: 'BaseLayout',
  components: {
    AsideContent,
    RightContent
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
  height: 100vh;
}

.el-header {
  background-color: #fff;
}
.el-main {
  background-color: #e5e5e5;
  padding: 0px;
}
/* Hiệu ứng chuyển trang */
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
