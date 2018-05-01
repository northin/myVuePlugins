<template lang="html">
  <div class="">
    <el-form ref="form" label-width="80px">

      <el-form-item v-for="(item,itemValue) in form" :label="item.title">
        <template v-if="item.type=='input'">
          <el-input v-model="item.name"></el-input>
        </template>
        <template v-if="item.type=='select'">

            <el-select v-model="item.key" :placeholder="'请选择'+item.title">
              <el-option v-for="itemO in item.options" :label="itemO.label" :value="itemO.value"></el-option>
            </el-select>
        </template>

        <template v-if="item.type=='checkbox'">
          <el-checkbox-group v-model="item.key">
            <el-checkbox v-for="itemO in item.options" :label="itemO.label" name="type"></el-checkbox>
          </el-checkbox-group>
        </template>

        <template v-if="item.type=='switch'">
          <el-switch v-model="item.key"></el-switch>
        </template>

        <template v-if="item.type=='radio'">
          <el-radio-group v-model="item.key">
            <el-radio v-for="itemO in item.options" :label="itemO.label"></el-radio>
          </el-radio-group>
        </template>

        <template v-if="item.type=='textarea'">
            <el-input type="textarea" v-model="item.key"></el-input>
        </template>

        <template v-if="item.type=='datePicker'" style="width:50%">
          <el-col :span="5">
            <el-date-picker type="date" placeholder="选择日期" v-model="item.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">-</el-col>
          <el-col :span="5">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="item.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </template>

      </el-form-item>
      <!-- <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'myForm2',
  data() {
      return {
        // form: {
        //   name: '',
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // }
      }
    },
    props:["form"],
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style lang="less" scoped>

</style>
