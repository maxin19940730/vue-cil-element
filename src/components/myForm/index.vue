<template>
  <el-form
    :ref="formConfig.ref"
    :label-width="formConfig.labelWidth"
    :model="form"
    @submit.native.prevent
  >
    <el-row>
      <my-form-item
        v-for="item in formItems"
        v-bind:key="item.name"
        :item="item"
        :form="form"
      ></my-form-item>
    </el-row>
    <br />
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formConfig.ref)" :disabled='disabled'
        >
        提交</el-button>
      <el-button @click="resetForm(formConfig.ref)" :disabled='disabled'>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import MyFormItem from "./my-form-item";
export default {
  props: {
    formItems: {
      type: Array,
      required: true,
    },
    disabled: {
      default: false
    },
    formConfig: {
      type: Object,
      default: () => {
        return {
          labelWidth: "200px",
          ref: "baseForm",
        };
      },
    },
  },
  data() {
    return {
      form: {},
    };
  },
  created() {},
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$listeners.submit) {
            this.$emit("submit", this.form);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      if (this.$listeners.submit) {
        this.$emit("submit", this.form);
      }
    },
  },
  components: {
    MyFormItem,
  },
};
</script>


