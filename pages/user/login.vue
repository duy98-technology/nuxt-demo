<template>
  <div class="login">
    <div style="margin-bottom: 60px">
      <h2>Trang quản trị sân bóng</h2>
    </div>
    <el-form
      ref="formLogin"
      :model="formLogin"
      status-icon
      :rules="rules"
      class="formLogin"
    >
      <el-form-item label="Tên tài khoản" prop="email">
        <el-input
          v-model="formLogin.email"
          type="text"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="Mật khẩu" prop="password">
        <el-input
          v-model="formLogin.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('formLogin')"
        >
          Đăng nhập
        </el-button>
        <el-button
          icon="el-icon-refresh-left"
          @click="resetForm('formLogin')"
        >
          Làm mới
        </el-button>
      </el-form-item>
    </el-form>
    <el-button type="text" @click="redirectForgotPassword()">
      Bạn muốn khôi phục mật khẩu?
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập tên tài khoản'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập mật khẩu'))
      } else if (value !== this.formLogin.password) {
        callback(new Error('Chưa có dữ liệu nhập'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      formLogin: {
        email: '',
        password: '',
        deviceId: '15de8dda-b9de-11eb-8529-0242ac130003',
        trustedDevice: false
      },
      rules: {
        email: [{ validator: validateUsername }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('auth/login', this.formLogin)
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.login {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
</style>
