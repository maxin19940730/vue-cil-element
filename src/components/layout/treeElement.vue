<template>
  <div>
    <div v-for="(item, index) in menu" :key="index">
      <el-menu-item
        :router="item.path"
        :index="item.path"
        v-if="!item.children || (item.children && item.children.length == 0)"
      >
        <i v-if="item.icon" :class="item.icon ? item.icon : 'el-icon-menu'"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.name">
        <template slot="title">
          <i :class="item.icon ? item.icon : 'el-icon-menu'"></i>
          <span slot="title">{{ item.name }}</span>
        </template>
        <tree-element :menu="item.children" />
      </el-submenu>
    </div>
  </div>
</template>
<script>
export default {
  name: "tree-element", // name用来在本组件内引用自己
  props: {
    menu: {
      default: () => [],
    },
  },
  created() {
  
  },
};
</script>