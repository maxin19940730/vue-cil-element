<template>
  <el-container class="layout-container">
    <leftAside />
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="16"><h2>**系统</h2></el-col>
          <el-col :span="8" class="text-right"
            ><el-dropdown>
              <i
                class="el-icon-setting"
                style="margin-right: 15px; color: #fff"
              ></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
           
            <el-popover
              placement="top-start"
              title="个人信息"
              width="200"
              trigger="hover"
            >
              <slot>
                <div>
                  <span>美 貌</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>才 华</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>于一身的 </span>
                  <el-divider direction="vertical"></el-divider>
                  <b> super-铁柱</b>
                </div>
              </slot>
              <el-link :underline="false" slot="reference" style="color: #fff">
                <el-avatar size='small' style="margin-bottom: -10px;margin-right: 8px" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                super-马铁柱
              </el-link>
            </el-popover>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>版权所有：@matiezhu.super.com</el-footer>
    </el-container>
  </el-container>
</template>

<script type="text/javascript">
import "./style/layout.scss";
import leftAside from "./leftAside.vue";
export default {
  //这里需要将模块引出，可在其他地方使用
  name: "linkToHelloWorld",
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      message: "A great expedition!",
    };
  },
  components: { leftAside },
};
</script> 