<template>
    <div class="login">
      <div class="login-box">
        <div class="login-title">
          <h3>项目名称</h3>
          <p>登录</p>
        </div>
        <div class="login-form">
          <el-form label-position="top" :model="loginForm" :rules="loginRule" ref="loginForm">
            <el-form-item prop="username">
              <el-input placeholder="员工号" type="text" v-model="loginForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input placeholder="密码" type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button  class="login-btn" type="primary" @click="handleSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        pass: ''
      },
      loginRule: {
        username: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log(1)
    }

  }
}
</script>
<style lang="less" scoped>
/* import './index.less'; //引入全局less文件 */
.login-box{
  width:400px;
  margin:200px auto;
  padding:10px 30px;
  border:1px solid #ccc;
  background-color: #fff;
  box-shadow: 0px 0px 25px #888888;
  .login-btn{
    width:100%;
  }

}
</style>
