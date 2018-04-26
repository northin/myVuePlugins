<template>
  <div class="hello">
    <validate title="账号" :validate="validate.user"  v-model="user" ></validate>
    <validate ref="pass" title="密码" :validate="validate.pass"  v-model="pass" ></validate>
    <validate title="确认密码" :validate="validate.checkPass"  v-model="checkPass" ></validate>
    <!-- <div>
      <label>账号:</label>
      <input type='text' v-validate=validate.user v-model="user" />
      <span style="color:red" v-if="!validate.user.success" >*</span>
    </div> -->
    <!-- <div>
      <label>密码:</label>
      <input type='text' v-validate=validate.pass v-model="pass" />
    </div> -->
    <!-- <div>
      <label>确认密码:</label>
      <input type='text' />
    </div> -->

    <button @click="submit" :disabled=!isDis>提交</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:'false',
      validate:{
        user:{
          key:'user',
          rules:'require,user',
          message:'',
          success:''
        },
        pass:{
          key:'pass',
          rules:'require,len[1:6]',
          message:'',
          success:''
        },
        checkPass:{
          key:'checkPass',
          rules:'require,equal[pass]',
          message:'',
          success:''
        },
      },
      user:'',
      pass:'',
      checkPass:''
    }
  },
  computed:{
    isDis:function(){
      return this.validate.user.success&&this.validate.pass.success&&this.validate.checkPass.success
    }
  },
  mounted:function(){
    console.log(this.validate.user)
  },
  methods:{
    submit(){
      console.log(this.validate.user)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
