// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import myValidate from './util/validate'

Vue.config.productionTip = false

Vue.component('validate', { 
  template:`<div>
    <label>{{ title }}:</label>
    <input type='text' v-validate="validate" :value="currentValue" @change="$emit('change',currentValue)" @blur="active=true" @input="handInput"/>
    <span style='color:red' v-show="!validate.success" >*</span>
    <span style='color:red' v-show="!validate.success" >{{ validate.message }}</span>
    <div v-if="active"></div>
  </div>`,
  props:["title","validate"],
  data(){
    return {
      currentValue:this.value,
      active:false
    }
  },
  methods:{
    handInput(ev){
      this.currentValue= ev.target.value
    }
  },
  watch:{
    currentValue(val){
      this.$emit("input",val)
    }
  }
 })




Vue.use(myValidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
