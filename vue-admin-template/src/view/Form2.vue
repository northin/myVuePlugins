<template>
    <div class="index">
      <div class="index-right">
        <side></side>
      </div>
      <div class="index-left">
         <myHeader></myHeader>
         <myForm
          :tableData3=tableData3
          :addForm=addForm
          @add=add
          @update=update
          @remove=remove
          >
         </myForm>
      </div>
    </div>
</template>
<script>
import side from '../components/side'
import myHeader from '../components/myHeader'
import myForm from '../components/myForm'
export default {
  name: '表格',
  data () {
    return {
        addForm:{
          date:{
            key:'',
            title:'日期',
            type:'input'
          },
          name:{
            key:'',
            title:'姓名',
            type:'input'
          },
          address:{
            key:'',
            type:'input',
            title:'地址'
          },

        },
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    }
  },
  methods: {

      add(form){
        console.log(form)
        // return 1,
        
      },
      update(form){
console.log(form)
      },
      remove(form){
console.log(form)
      }
  },
  components: {
    side,
    myHeader,
    myForm
  }
}
</script>
<style lang="less" scoped>
/* import './index.less'; //引入全局less文件 */
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
