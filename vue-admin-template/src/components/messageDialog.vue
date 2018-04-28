<template>
    <el-dialog
        title="提示"
        :visible.sync="messageDialogVisible"
        width="30%"
        :before-close="beforeClose">
        <span>{{ content }}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="btnCancle">取 消</el-button>
            <el-button type="primary" @click="btnSure">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
  name: 'messageDialog',
  data () {
    return {
      
    }
  },
  props:["type","messageDialogVisible","messageContent"],
  computed:{
      content:function(){
          if(this.type == 'info'){
              return "操作成功！"
          }else if(this.type == 'comfirm'){
              return "您确定要执行么！"
          }else if(this.type == 'error'){
              return "操作失败！"
          }else if(this.type=="warn"){
              return this.messageContent
          }
      }
  },
  methods:{
      btnSure(){
        this.$emit("messageSure")
      },
      btnCancle(){
        this.$emit("messageCancle")  
      },
      beforeClose(){
        this.$emit("messageBeforeClose")  
      },
    
  }

}
</script>
<style lang="less" scoped>

</style>
