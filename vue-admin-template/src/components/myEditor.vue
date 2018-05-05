<template>
   <div>
     <h4>标题:</h4>
     <el-input
        placeholder="请输入内容"
        v-model="title"
        clearable
        class="title">
     </el-input>
     <h4>内容:</h4>
     <vue-editor v-model="content"></vue-editor>
     <el-button @click="submit" type="primary" class="btn">提交</el-button>
     <el-button  @click="reset" class="btn">重置</el-button>



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
import { VueEditor } from 'vue2-editor'

import messageDialog from './messageDialog'
export default {
 
  components: {
      VueEditor,
      messageDialog
  },
 
  data() {
    return {
      content: '<h1>Some initial content</h1>' ,
      title:'',
      messageDialogVisible:false,
      messageType:'',
      messageContent:'',
      opr:''
    }
  },
  methods:{
    reset(){
      this.messageDialogVisible = true  
      this.messageType = "comfirm"
      this.opr = 'reset'
    },
    submit(){
      this.messageDialogVisible = true  
      this.messageType = "comfirm"
      this.opr = 'submit'
    },
    messageSure(){
      if(this.opr == 'reset'){
          this.content = ''
          this.title = ''
      }else if(this.opr == 'submit'){
          this.$emit("editorSubmit",{"title":this.title,"content":this.content})
          
      }
      this.opr = ''
      this.messageDialogVisible = false
    },
    messageBeforeClose(){
      this.messageDialogVisible = false 
    },
    messageCancle(){
      this.messageDialogVisible = false 
    }
  }
}
 </script> 
 <style lang="less" scoped>
    .title{
        margin-bottom:20px;
    }
    .btn{
        margin-top:20px;
        float: right;
        margin-right:20px;
    }
 </style>
 