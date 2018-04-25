<template>
  <div class="hello">
    <validate title="账号" :validate="validate.user"  v-model="user" ></validate>
    <validate title="密码" :validate="validate.pass"  v-model="pass" ></validate>
    <!-- <div>
      <label>账号:</label>
      <input type='text' v-validate=validate.user v-model="user" />
      <span style="color:red" v-if="!validate.user.success" >*</span>
    </div> -->
    <!-- <div>
      <label>密码:</label>
      <input type='text' v-validate=validate.pass v-model="pass" />
    </div> -->
    <div>
      <label>确认密码:</label>
      <input type='text' />
    </div>

    <button @click="submit">提交</button>
    
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
          rules:'require,user',
          message:'',
          success:''
        },
        pass:{
          rules:'require,len[1:6]',
          message:'',
          success:''
        },
      },
      user:'',
      pass:''
    }
  },
  mounted:function(){
    console.log(this.validate.user.message)
  },
  methods:{
    submit(){
      console.log(this.user)
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
