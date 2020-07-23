<template>
  <div id="app">
    <!-- 左侧内容区 -->
    <section class="left" v-if="isShowLeft"></section>
    <!-- 右侧内容区 -->
    <section class="right" :class="[rightW]">
      <!-- 内容区框架 -->
      <div class="main">
        <!-- 导航栏 -->
        <el-row :gutter="10" align="middle" type="flex" justify="space-between">
          <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-dark">Logo</div>
          </el-col>
          <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="11">
            <div class="grid-content bg-purple">
              <router-link to="/home" tag="a" @click.native="ClickHome">首页</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/" tag="a" @click.native="ClickCourse">教程</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/" tag="a" @click.native="ChangeWidth">组件</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/" tag="a" @click.native="ClickNews">资源</router-link>
            </div>
          </el-col>
          <el-col :xs="5" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light">资源</div>
          </el-col>
        </el-row>
        <!-- 视图区 -->
        <router-view class="content"></router-view>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowLeft: false,
      rightW: "rightw"
    };
  },
  methods: {
    //首页点击事件
    ClickHome() {
      console.log("home");
    },
    //教程点击事件
    ClickCourse() {
      console.log("ClickCourse");
    },
    //组件点击事件
    ChangeWidth() {
      this.rightW = "";
      this.isShowLeft = true;
    },
    //资源点击事件
    ClickNews() {
      console.log("ClickNews");
    }
  }
};
</script>




<style lang="scss">
#app {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  height: 95%;
  background: rgb(208, 210, 222);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.left {
  background: rgb(230, 227, 220);
  z-index: 1000;
  width: 20%;
  height: 95%;
  border-radius: 15px;
}

.right {
  width: 76%;
  height: 95%;
  // background:rgb(241,241,243);
  background: rgb(241, 241, 243);
  border-radius: 15px;
  right: 0px;
}
.rightw {
  width: 90%;
}
.main {
  position: relative;
  // background: green;
  height: 100%;
}

.el-col {
  border-radius: 4px;
  font-size: 20px;
  line-height: 24px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.bg-purple-dark {
}
.bg-purple {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.bg-purple a {
  padding: 0 10px 0 10px;
}

.bg-purple-light {
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.content {
  background: yellow;
}
</style>
