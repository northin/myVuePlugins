<template>
<el-dialog :title=dialogTitle :visible.sync="dialogFormVisible" :before-close=beforeClose>
  <el-form :model="form">
    <el-form-item :key=index v-for="(item,itemValue,index) in form" :label="item.title" :label-width="formLabelWidth">
        <template v-if="item.type=='input'">
            <el-input v-model="item.key" auto-complete="off" :placeholder="'请输入'+item.title"></el-input>
        </template>
        <template v-if="item.type=='select'">
            <el-select v-model="item.key" :placeholder="'请选择'+item.title">
                <el-option v-for="(itemO,itemOV,index1) in item.options" :key=index1 :label="itemO.label" :value="itemO.value"></el-option>
                 <!-- <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option> -->
            </el-select>
        </template>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="btnCancle">取 消</el-button>
    <el-button type="primary" @click="btnSure">确 定</el-button>
    <el-button type="primary" @click="btnReset">重置</el-button>
  </div>
</el-dialog>
</template>
<script>
export default {
  name: 'myDialog',
  data () {
    return {
      
    }
  },
  props:["dialogTitle","dialogFormVisible","formLabelWidth","form"],
  methods:{
      btnSure(){
        this.$emit("btnSure")
      },
      btnCancle(){
        this.$emit("btnCancle")  
      },
      beforeClose(){
        this.$emit("beforeClose")  
      },
      btnReset(){
        this.$emit("btnReset")  
      }
    
  }

}
</script>
<style lang="less" scoped>

</style>
