<template>
  <div id="app">
    <areaSelect @selectAddress="selectAddress" :province="province" :city=city :area="area"/>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import areaSelect from './components/areaSelect'

export default {
  name: 'App',
  data(){
    return {
      province:'',
      city:'',
      area:'',
      data:''
    }
  },
  components: {
    areaSelect
  },
  methods:{
    selectAddress(v){
      // console.log(v)
      this.data = v
    },
    submit(){
      console.log(this.data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
