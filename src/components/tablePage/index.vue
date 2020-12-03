<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >操作按钮</el-button
      >
    </div>
    <!-- <my-form v-bind="$attrs" v-on="$listeners"></my-form> -->
    <my-tabel ></my-tabel>
  </el-card>
</template>

<script>
//:tabelItems='tabelItems' :tableData='tableData'
import MyForm from "../myForm/index.vue";
import MyTabel from "../myTabel/index.vue";
export default {
  props: {
  
  },
  data() {
    return {
      form: {},
      tabelItems: [
        {
          name: 'date',
          label: '日期'
        },
        {
          name: 'name',
          label: '姓名'
        },
        {
          name: 'address',
          label: '地址'
        }
      ],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  created() {},
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          if (this.$listeners.submit) {
            this.$emit("submit", this.form);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  components: {
    MyForm,
    MyTabel,
  },
};
</script>


