<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
<script>
import Nav from "@components/front/Nav.vue";
import Foot from "@components/front/Foot.vue";
// import { getListApi } from "@api/front/home.js";
import {
  getListApi,
} from "@/api/front/home";
export default {
  name: "Home",
  components: {
    Nav,
    Foot,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  mounted() {

  },
  created() {
    // this.getListfun();
    
    console.log(window.location.href)
  },
};
</script>
<style lang="less" scoped>
</style>