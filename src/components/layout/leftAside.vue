<template>
  <el-aside width="auto">
    <div style="text-align: right" class="collapseIcon">
      <i class="el-icon-s-fold" v-if="!isCollapse" @click="changeIsCollapse"
        >收起</i
      >
      <i class="el-icon-s-unfold" v-if="isCollapse" @click="changeIsCollapse"
        >展开</i
      >
    </div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <tree-element :menu="menu"></tree-element>
    </el-menu>
  </el-aside>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

/*隐藏文字*/
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
.collapseIcon {
  text-align: right;
  color: darkolivegreen;
  padding: 10px 0;
}
</style>

<script>
import menu from "@/config/menu";
import treeElement from "./treeElement";
export default {
  data() {
    return {
      isCollapse: false,
      menu,
    };
  },
  methods: {
    changeIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    treeElement
    // "tree-element": {
    //   name: "treeElement",
    //   props: ["arr"],
    //   template: `<div>
    //     <div v-for="(item, index) in arr" :key="index" v-if="item.name">
    //       <el-menu-item :router="item.path" :index="item.path" v-if="!item.children || (item.children && item.children.length==0)">
    //          <i v-if="item.icon" :class="item.icon ? item.icon:'el-icon-menu'"></i>
    //         <span slot="title">{{ item.name }}</span>
    //       </el-menu-item>
    //       <el-submenu  v-else :index="item.name">
    //         <template slot="title">
    //           <i :class="item.icon ? item.icon:'el-icon-menu'"></i>
    //           <span slot="title">{{ item.name }}</span>
    //         </template>
    //         <tree-element :arr="item.children"/>
    //       </el-submenu>
    //     </div>
    //   </div>`,
    // },

  },
};
</script>