<template>
  <div id="app">
    <!-- 左侧内容区 -->
    <section class="left" v-if="isShowLeft">
      <!-- 左侧组件放置区 -->
      <div>
        <router-link to="/button">按钮</router-link>
        <router-link to="/link">链接</router-link>
        <router-link to="/inputnum">计数器</router-link>
        <router-link to="/radio">单选框</router-link>

        <!-- <router-link to="/home" tag="a" @click.native="ClickHome">首页</router-link> -->
      </div>
    </section>
    <!-- 右侧内容区 -->
    <section class="right" :class="[rightW]">
      <!-- 内容区框架 -->
      <div class="main">
        <!-- 导航栏 -->
        <el-row :gutter="10" align="middle" type="flex" justify="space-between">
          <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-dark"></div>
          </el-col>
          <el-col :xs="15" :sm="15" :md="15" :lg="15" :xl="11">
            <div class="grid-content bg-purple">
              <router-link to="/home" tag="a" @click.native="ClickHome">首页</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/" tag="a" @click.native="ClickCourse">教程</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/read" tag="a" @click.native="ChangeWidth">组件</router-link>
              <el-divider direction="vertical"></el-divider>
              <router-link to="/" tag="a" @click.native="ClickNews">资源</router-link>
            </div>
          </el-col>
          <el-col :xs="5" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light">Contact</div>
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
      this.isShowLeft = false;
      this.rightW = "rightw";
    },
    //教程点击事件
    ClickCourse() {
      this.isShowLeft = false;
      this.rightW = "rightw";
    },
    //组件点击事件
    ChangeWidth() {
      this.rightW = "";
      this.isShowLeft = true;
    },
    //资源点击事件
    ClickNews() {
      this.isShowLeft = false;
      this.rightW = "rightw";
    }
  }
};
</script>




<style scoped>
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
  background: rgb(248, 248, 248);
  z-index: 1000;
  width: 20%;
  height: 95%;
  border-radius: 15px;
}

.right {
  width: 76%;
  height: 95%;
  background: white;
  border-radius: 15px;
  right: 0px;
}
.rightw {
  width: 95%;
}
.main {
  position: relative;
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
.bg-dark {
  background: url("./assets/img/logo.png") no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
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
  font-size: 14px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.content {
  z-index: 100;
  position: relative;
  background-color: white;
  margin: 5px;
  height: 88%;
  border: 2px solid black;
  overflow-y: auto;
}
.content::-webkit-scrollbar-track-piece {
  background-color: #f5f5f5;
}
.content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.content::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;
  background-clip: padding-box;
  min-height: 28px;
}
</style>
