<template>
    <el-header style="display:flex;justify-content: space-between; width:100%;background-color:#409eff">
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-button icon="el-icon-tickets" class="header-btn"></el-button>
      <el-dropdown>
        <div class="header-img">
            <img src="" alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
</template>
<script>
export default {
  name: 'myHeader',
  data () {
    return {
      isCollapse: true
    }
  }

}
</script>
<style lang="less" scoped>
.header-btn{
    height: 40px;
    margin-top:10px;
}
.header-img{
    margin-top:5px;
    margin-right:30px;
    border-radius: 100%;
    width:50px;
    height:50px;
    background: url("../assets/Koala.jpg");
    background-size:50px 50px;
}
</style>
