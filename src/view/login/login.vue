<template>
  <div class="login-div">
    <el-form ref="form" :model="form" label-width="80px" class="login-form">
      <el-divider content-position="left">用户登录</el-divider>
      <el-form-item
        label="用户名"
        prop="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      >
        <el-input v-model="form.username" size="small"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <el-input
          v-model="form.password"
          type="password"
          size="small"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import "./style/login.scss";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: "one" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>