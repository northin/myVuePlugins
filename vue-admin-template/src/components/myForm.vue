<template>
         <div style="margin:20px;">
             <div style="margin-bottom:20px;display:flex;height:">
                <el-input v-model="input" style="width:200px;margin-right:20px;" placeholder="请输入内容"></el-input>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" @click.native=add>添加</el-button>
                <el-button type="primary" @click.native=update>修改</el-button>
                <el-button type="primary" @click.native=remove>删除</el-button>
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
</template>
<script>
import myDialog from './myDialog'
import messageDialog from './messageDialog'
export default {
  name: '表格',
  data () {
    return {
        operate:'',
        messageDialogOrp:"",
        messageDialogOrp1:'',
        messageDialogVisible:false,
        messageType:'',
        messageContent:'',
        addTitle:'添加',
        formLabelWidth:"200px",
        addVisible:false,
        // addForm:{
        //   date:{
        //     key:'',
        //     title:'日期',
        //     type:'input'
        //   },
        //   name:{
        //     key:'',
        //     title:'姓名',
        //     type:'input'
        //   },
        //   address:{
        //     key:'',
        //     type:'input',
        //     title:'地址'
        //   },
        //
        // },
        currentRow:'',
        input:'',
        // tableData3: [{
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-08',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }],
        multipleSelection: []
    }
  },
  props:["tableData3","addForm"],
  methods: {
      messageSure(){

        if(this.messageDialogOrp == "addReset"){ //重置
          this.reset(this.addForm)
          this.messageDialogVisible = false
        }else if(this.messageDialogOrp == "add"){ //添加
          if(this.messageDialogOrp1 == ""){  //添加的是否确认提示
            // this.messageDialogVisible = true;
            // this.messageType = "info"
            // this.messageDialogOrp1 = "add"
            this.addVisible = false
            this.messageDialogVisible = false;
            let returnV = this.$emit("add",this.addForm)
            // console.log(returnV)
          }

        }else if(this.messageDialogOrp == "warn"){   //提示选中
          this.messageDialogVisible = false
        }else if(this.messageDialogOrp == "update"){ //修改
          if(this.messageDialogOrp1 == ""){//修改的是否确认提示
            // this.messageDialogVisible = true;
            // this.messageType = "info"
            // this.messageDialogOrp1 = "update"
            this.addVisible = false
            this.messageDialogVisible = false;
            this.$emit("update",this.addForm)
          }

        }else if(this.messageDialogOrp == "remove"){


          if(this.messageDialogOrp1 == ""){//修改的是否确认提示
            // this.messageDialogVisible = true;
            // this.messageType = "info"
            // this.messageDialogOrp1 = "remove"
            // this.addVisible = false
            this.messageDialogVisible = false;
            this.$emit("remove",this.addForm)
          }

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
      },
      add(){
        this.addTitle = "添加"
        this.reset(this.addForm)
        this.addVisible = true
        this.operate = 'add'
      },
      addReset(){
        this.messageDialogVisible = true
        this.messageType = 'comfirm'
        if(this.operate == 'add'){
          this.messageDialogOrp = "addReset"
        }else if(this.operate == 'update'){
          this.messageDialogOrp = "addReset"
        }

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
        if(this.operate == 'add'){
          this.messageDialogOrp = "add"
        }else if(this.operate == 'update'){
          this.messageDialogOrp = "update"
        }



      },
      addbeforeClose(){
        this.addVisible = false
      },
      update(){
        if(this.currentRow == ""){
          this.messageDialogVisible = true
          this.messageType = 'warn'
          this.messageDialogOrp = "warn"
          this.messageContent = "请先选中一行"
        }else{
          this.addTitle = "修改";
          this.addVisible = true;
          this.operate = 'update'
          for (var key in this.currentRow) {
            if (this.currentRow.hasOwnProperty(key)) {
              this.addForm[key].key =  this.currentRow[key]
            }
          }

        }

      },
      remove(){
        if(this.currentRow == ""){
          this.messageDialogVisible = true
          this.messageType = 'warn'
          this.messageDialogOrp = "warn"
          this.messageContent = "请先选中一行"
        }else{
          this.messageDialogOrp = 'remove'
          this.messageDialogVisible = true;
          this.messageType = "comfirm"
          for (var key in this.currentRow) {
            if (this.currentRow.hasOwnProperty(key)) {
              this.addForm[key].key =  this.currentRow[key]
            }
          }

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
