<template>
  <table-page :tableProps="tableProps" :formProps="formProps" :pageProps='pageProps'></table-page>
</template>

<script>
import TablePage from "@/components/tablePage/index.vue"
export default {
  data() {
    return {
      tableProps: {
        tabelItems: [
          {
            name: "date",
            label: "日期",
            width: 90,
          },
          {
            name: "name",
            label: "姓名",
          },
          {
            name: "address",
            label: "地址",
          },
        ],
        // operationItems: [
        //   {
        //     label: "编辑",
        //     click: this.edit,
        //   },
        //    {
        //     label: "删除",
        //     click: this.edit,
        //   },
        // ],
        defaultOperations: [
          'edit',{key: 'detail',label: '详情11'}
        ],
        height: 300,
      },
      formProps: {
        formItems: [
          {
            label: "活动名称",
            type: "input",
            name: "name",
            span: 12,
            rules: [
              // { required: true, message: "请输入活动名称", trigger: "blur" },
              // {
              //   min: 3,
              //   max: 5,
              //   message: "长度在 3 到 5 个字符",
              //   trigger: "blur",
              // },
            ],
          },
          {
            label: "活动名称2",
            type: "input",
            name: "name2",
            span: 12,
            rules: [
              // { required: true, message: "请输入活动名称", trigger: "blur" },
              // {
              //   min: 3,
              //   max: 5,
              //   message: "长度在 3 到 5 个字符",
              //   trigger: "blur",
              // },
            ],
          },
          {
            label: "下拉选",
            type: "select",
            name: "select",
            rules: [
              { required: false, message: "请输入下拉选", trigger: "blur" },
            ],
            options: [
              { label: "区域一", value: "2" },
              { label: "区域二", value: "1" },
            ],
          },
        ],
       

        // event: {
        //   submit: this.onSubmit,
        // },
      },
      pageProps: {
 title: '用户管理'
      }
    };
  },
  created() {},
  methods: {
    onSubmit(data) {
      console.log("two得到数据", data);
    },
    edit(record) {
      console.log("record----------", record);
    },
  },

  components: {
    TablePage,
  },
};
</script>
