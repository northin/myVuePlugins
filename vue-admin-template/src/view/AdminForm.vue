<template>
    <div class="index">
      <div class="index-right">
        <side></side>
      </div>
      <div class="index-left">
         <myHeader></myHeader>
         <div style="margin:20px;">
             <div style="margin-bottom:20px;display:flex;height:">
                <el-input v-model="input" style="width:200px;margin-right:20px;" placeholder="请输入内容"></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" @click.native=add>添加</el-button>
                <el-button type="primary" @click.native=update>修改</el-button>
             </div>
             <el-table
                ref="singleTable"
                :data="tableData3"
                highlight-current-row
                :default-sort = "{prop: 'date', order: 'descending'}"
                tooltip-effect="dark"
                style="width: 100%" 
                @current-change="handleCurrentChange"
                @selection-change="handleSelectionChange">

                <!-- <el-table-column
                    type="selection"
                    width="55">
                </el-table-column> -->
                <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="120">
                    <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
                </el-table-column>
            </el-table>


            <my-dialog 
              :dialogTitle="addTitle"
              :dialogFormVisible=addVisible 
              :form=addForm 
              :formLabelWidth=formLabelWidth
              @btnCancle="addCancle"
              @btnSure="addSure"
              @beforeClose="addbeforeClose"
              @btnReset="addReset"
              >
            </my-dialog>

            <!-- <my-dialog 
              :dialogTitle="addTitle"
              :dialogFormVisible=addVisible 
              :form=addForm 
              :formLabelWidth=formLabelWidth
              @btnCancle="addCancle"
              @btnSure="addSure"
              @beforeClose="addbeforeClose"
              @btnReset="addReset"
              >
            </my-dialog> -->

            <message-dialog
              :messageDialogVisible=messageDialogVisible
              :type=messageType
              :messageContent=messageContent
              @messageSure="messageSure"
              @messageCancle="messageCancle"
              @messageBeforeClose="messageBeforeClose"
              >
            </message-dialog>

         </div>
      </div>
    </div>
</template>
<script>
import side from '../components/side'
import myHeader from '../components/myHeader'
import myDialog from '../components/myDialog'
import messageDialog from '../components/messageDialog'
export default {
  name: '表格',
  data () {
    return {
        messageDialogOrp:"",
        messageDialogOrp1:'',
        messageDialogVisible:false,
        messageType:'',
        messageContent:'',
        addTitle:'添加',
        formLabelWidth:"200px",
        addVisible:false,
        addForm:{
          name:{
            key:'',
            title:'活动内容',
            type:'input'
          },
          region:{
            key:'',
            type:'select',
            title:'活动选项',
            options:[
              {
                label:'上海',
                value:'001'
              },{
                label:'杭州',
                value:'002'
              }
            ]
          },
          address:{
            key:'',
            type:'input',
            title:'地址'
          },

        },
        currentRow:'',
        input:'',
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
        multipleSelection: []
    }
  },
  methods: {
      messageSure(){
        
        if(this.messageDialogOrp == "addReset"){
          this.reset(this.addForm)
          this.messageDialogVisible = false
        }else if(this.messageDialogOrp == "add"){
          if(this.messageDialogOrp1 == ""){
            this.messageDialogVisible = true;
            this.messageType = "info"
            this.messageDialogOrp1 = "add"
            this.addVisible = false
          }else if(this.messageDialogOrp1 == "add"){
            
            this.messageDialogVisible = false;
            this.messageDialogOrp1 = ""
            // this.messageDialogVisible = true;
            // axios.add().then(data=>{
            //   if(success){
            //     this.reset(this.addForm)

            //   }
            // })
          }else if(this.messageDialogOrp1 == "addSuccess"){
            
          }
          
        }else{

        }
      },
      messageCancle(){
        // this.messageDialogStatus = false
        this.messageDialogVisible = false
      },
      messageBeforeClose(){
        // this.messageDialogStatus = false
        this.messageDialogVisible = false
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val){
        this.currentRow = val;
        console.log(this.currentRow)
      },
      add(){
        
        this.addVisible = true
      },
      addReset(){
        this.messageDialogVisible = true
        this.messageType = 'comfirm'
        this.messageDialogOrp = "addReset"
        // if(this.messageDialogStatus)
        // this.reset(this.addForm)
      },
      addCancle(){
        this.addVisible = false
      },
      addSure(){
        // console.log(this.addForm)
        this.messageDialogVisible = true
        this.messageType = 'comfirm'
        this.messageDialogOrp = "add"
        
        
      },
      addbeforeClose(){
        this.addVisible = false
      },
      update(){
        if(this.currentRow == ""){
          this.messageDialogVisible = true
          this.messageType = 'warn'
          this.messageContent = "请先选中一行"
        }else{
          this.addTitle = "修改"
         this.addVisible = true
        }
       
      },
      reset(form){
        let keyList = Object.keys(form);
        for (let index = 0; index < keyList.length; index++) {
          const element = keyList[index];
          form[element].key = ''
        }
      }
  },
  components: {
    side,
    myHeader,
    myDialog,
    messageDialog
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
