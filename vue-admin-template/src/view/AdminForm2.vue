<template lang="html">
  <div class="index">
    <div class="index-right">
      <side></side>
    </div>
    <div class="index-left">
       <myHeader></myHeader>
       <div class="" style="padding:20px">
         <myForm2
          :form=form
          >
         </myForm2>
       </div>

    </div>
  </div>
</template>

<script>
import myForm2 from "../components/myForm2"
import side from '../components/side'
import myHeader from '../components/myHeader'
export default {
  data(){
    return {
      form:{
        name:{
          key:'',
          title:'活动名称',
          type:'input',

        },
        region:{
          key:'',
          title:'活动区域',
          type:'select',
          options:[
            {label:'上海',value:'001'},
            {label:'杭州',value:'002'},
          ]
        },
        date:{
          date1:'',
          date2:'',
          type:'datePicker',
          title:'活动时间'
        },
        delivery:{
          key:false,
          title:'即时配送',
          type:'switch'
        },
        activeType:{
          key:[],
          title:'活动性质',
          type:'checkbox',
          options:[
            {label:'美食/餐厅线上活动'},
            {label:'地推活动'},
            {label:'线下主题活动'},
            {label:'单纯品牌曝光'},
          ]
        },
        resource:{
          key:'',
          title:'特殊资源',
          type:'radio',
          options:[
            {label:'线上品牌商赞助'},
            {label:'线下场地免费'},
          ]
        },
        desc:{
          key:'',
          title:'活动形式',
          type:'textarea'
        }

      }
    }
  },
  components:{
    side,
    myForm2,
    myHeader
  }
}
</script>

<style lang="less" scoped>
.index{
  display: flex;
  height:100%;

  .index-right{
    height:100%
  }
  .index-left{
    width: 100%;
  }
}
</style>
