<template>
<div style="height:100%">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->

    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <div class="side-title">
            后台管理系统
        </div>
        <template>
                <el-input
                    class="header-search"
                    placeholder="请输入搜索的条目"
                    prefix-icon="el-icon-search"
                    v-model="input21">
                </el-input>
            </template>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-submenu index="1-1">
                <span slot="title">选项1</span>
                <el-menu-item index="1-1-1"><router-link to="adminForm">表格</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
                <span slot="title">选项2</span>
                <el-menu-item index="1-2-1"><router-link to="adminForm2">表单</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
                <span slot="title">选项3</span>
                <el-menu-item index="1-3-1">选项1-3-1</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1-4-1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</div>
</template>
<style lang="less" scoped>
// @import '../assets/css/comon.less'; //引入全局less文件
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    height: 100%;
    background-color: #eef1f6;
  }
  .side-title{
      height:60px;
      line-height: 60px;
      font-size:20px;
      color:#fff;
      background-color: rgb(64, 158, 255);
  }
</style>

<script>
import myHeader from './myHeader'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    myHeader
  }
}
</script>
