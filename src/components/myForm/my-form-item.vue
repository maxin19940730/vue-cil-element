<template>
  <el-col :span="item.span || span">
    <el-form-item :label="item.label" :rules="item.rules" :prop="item.name">
      <el-input
        v-if="item.type == 'input'"
        v-model="form[item.name]"
      ></el-input>
      <el-switch
        v-if="item.type == 'switch'"
        active-color="#13ce66"
        inactive-color="#ff4949"
        v-model="form[item.name]"
      >
      </el-switch>
      <el-select
        v-if="item.type == 'select'"
        v-model="form[item.name]"
        :placeholder="item.label"
      >
        <el-option
          v-for="option in item.options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-col>
</template>

<script>
// v-bind="$attrs"
// v-on="$listeners"
export default {
  props: {
    form: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      span: 24,
    };
  },
};
</script>


