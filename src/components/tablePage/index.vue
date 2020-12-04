<template>
<div>
 <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>查询条件</span>
    </div>
    <my-form v-bind="formProps" v-on="formEvent" :disabled="loading"></my-form>
  </el-card>
   <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>查询结果</span>
    </div>
    <my-tabel
      v-loading="loading"
      v-bind="tableProps"
      :tableData="tableData"
      :paginationProps="paginationProps"
      :handleSizeChange="handleSizeChange"
      :handleCurrentChange="handleCurrentChange"
    ></my-tabel>
  </el-card>
</div>
 
</template>

<script>
//
import MyForm from "../myForm/index.vue";
import MyTabel from "../myTabel/index.vue";
export default {
  props: {
    tableProps: {
      require: true,
      default: () => {},
    },
    formProps: {
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      paginationProps: {},
      tableData: [],
      formEvent: {
        ...(this.formProps.event ? this.formProps.event : {}),
        submit: this.onSubmit,
      },
      loading: false,
      querydata: {}
    };
  },
  created() {
    this.onSubmit()
  },
  methods: {
    onSubmit(data) {
      this.querydata={...data}
      this.paginationProps = {
        ...this.paginationProps,
        startPage: 1,
      };
      this.getTabelList(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条, 刷新列表`);
      this.paginationProps = {
        ...this.paginationProps,
        startPage: 1,
        pageSize: val,
      };
      this.getTabelList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.paginationProps = {
        ...this.paginationProps,
        startPage: val,
      };
      this.getTabelList();
    },
    getTabelList() {
      let querydata={ ...this.paginationProps, ...this.querydata }
      this.loading = true;
      console.log("请求的数据", querydata);
      this.$get("/getList", querydata)
        .then((res) => {
          setTimeout(() => {
            const { list, ...pageObj } = res;
            this.tableData = list;
            this.paginationProps = pageObj;
            this.loading = false;
          }, 2000);
        })
        .catch((err) => {
          console.log(err, 1111111111111);
          // this.loading=false
          this.tableData = [];
        });
    },
  },
  components: {
    MyForm,
    MyTabel,
  },
};
</script>


