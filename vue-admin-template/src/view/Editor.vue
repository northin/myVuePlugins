<template lang="html">
  <div class="index">
    <div class="index-right">
      <side></side>
    </div>
    <div class="index-left">
       <myHeader></myHeader>
       <div class="" style="padding:20px">
         <myEditor></myEditor>
       </div>

    </div>
  </div>
</template>

<script>
import myEditor from "../components/myEditor"
import side from '../components/side'
import myHeader from '../components/myHeader'
export default {
  data(){
    return {
    }
  },
  components:{
    side,
    myEditor,
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
