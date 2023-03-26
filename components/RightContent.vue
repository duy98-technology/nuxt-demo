<template>
  <div class="right-content">
    <div class="user" @click="logout()">
      <span style="padding: 11px">admin</span>
      <el-avatar :size="48" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'RightContent',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>
<style scoped>
.right-content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
}

.stadium {
  display: flex;
  align-items: center;
}

.stadium >>> .el-input__inner {
  border: none;
  font-weight: 700;
  font-size: 20px;
  color: #333333;
}

.stadium >>> .el-select__caret {
  font-weight: 700;
  font-size: 20px;
  color: #bdbdbd;
}

.user {
  display: flex;
  align-items: center;
}
</style>
