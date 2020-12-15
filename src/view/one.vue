<template>
<div>
  <my-form :formItems="formItems" @submit='onSubmit' :newsListShow='newsListShow'></my-form>
</div>

</template>

<script>
import MyForm from "@/components/myForm/index.vue";

export default {
  data() {
    return {
      formItems: [
        {
          label: "活动名称",
          type: "input",
          name: "name",
          span: 12,
          rules: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
        },
        {
          label: "活动名称2",
          type: "input",
          name: "name2",
          span: 12,
          rules: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            {
              min: 3,
              max: 5,
              message: "长度在 3 到 5 个字符",
              trigger: "blur",
            },
          ],
        },
        {
          label: "下拉选",
          type: "select",
          name: "select",
          rules: [{ required: true, message: "请输入下拉选", trigger: "blur" }],
          options: [
            { label: "区域一", value: "2" },
            { label: "区域二", value: "1" },
          ],
        },
      ],
       value: '',
       newsListShow: []
    };
  },
  created() {
    this.setNewsApi();
  },
  methods: {
    onSubmit(data) {
      console.log("submit!111111111111",data);
    },
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000,
      });
    },
    setNewsApi: function () {
      this.$post("/news/index", { type: "top" })
        .then((res) => {
          console.log(res);
          this.newsListShow = res.articles;
        })
        .catch((err) => {
          console.log(err, 1111111111111);
        });
    },
  },
  components: {
    MyForm,
  },
};
</script>


