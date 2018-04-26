<template>
  <div class="hello">
    <div>
      <select @change="selectProvince($event.target.value)">
        <option :value="itemValue" :key=itemValue v-for="(item,itemValue) in provinceList">{{ item }}</option>
      </select>
    </div>
    <div>
      <select :disabled="cityDisabled" @change="selectCity($event.target.value)">
        <option :value="itemValue" :key=itemValue v-for="(item,itemValue) in cityList">{{ item }}</option>
      </select>
    </div>
    <div>
      <select :disabled="cityDisabled" @change="selectArea($event.target.value)">
        <option :value="itemValue" :key=itemValue v-for="(item,itemValue) in areaList">{{ item }}</option>
      </select>
    </div>
    
  </div>
</template>

<script>
import chinaData from "china-area-data"
export default {
  name: 'areaSelect',
  data () {
    return {
      provinceSelected:'',
      citySelected:'',
      areaSelected:'',
      cityDisabled:false
    }
  },
  props:["province","city","area"],
  computed:{
    provinceList:function(){
      // console.log(chinaData[86])
      return chinaData[86]
    },
    cityList:function(){
      return chinaData[this.provinceSelected]
    },
    areaList:function(){
      return chinaData[this.citySelected]
    }
  },
  created:function(){
    this.provinceSelected = this.province == ""?110000:this.province
    this.citySelected = this.city==""?110100:this.city
    this.areaSelected = this.area==""?110101:this.area
    this.selectEmit()
  },
  mounted:function(){
    // console.log(provinceList)
  },
  methods:{
    selectEmit(){
      this.$emit("selectAddress",{
        province:this.provinceSelected,
        city:this.citySelected,
        area:this.areaSelected
      })
    },
    selectProvince(v){
      this.provinceSelected = v;
      // console.log(Object.keys(chinaData[v]))
      this.citySelected = Object.keys(chinaData[v])[0]
      this.areaSelected = Object.keys(chinaData[this.citySelected])[0]
      this.selectEmit()
    },
    selectCity(v){
      this.citySelected = v
      this.selectEmit()
    },
    selectArea(v){
      this.areaSelected = v
      this.selectEmit()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
  width:60%;
  padding:10px;
  margin-bottom: 5%
}
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
