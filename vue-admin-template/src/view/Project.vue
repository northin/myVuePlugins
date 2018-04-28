<template>
    <div class="index">
      <div class="index-right">
        <side></side>
      </div>
      <div class="index-left">
         <myHeader></myHeader>
      </div>
    </div>
</template>
<script>
import side from '../components/side'
import myHeader from '../components/myHeader'
export default {
  name: '首页',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    side,
    myHeader
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
