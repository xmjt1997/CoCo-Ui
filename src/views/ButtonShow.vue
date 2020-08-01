<template>
  <div>
    <h1>按钮组件</h1>
    <h2>方形按钮</h2>
    <Button>按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="warning">按钮</Button>
    <Button type="danger">按钮</Button>
    <Button type="info">按钮</Button>
    <h2>圆角按钮</h2>
    <Button round>按钮</Button>
    <Button type="success" round>按钮</Button>
    <Button type="warning" round>按钮</Button>
    <Button type="danger" round>按钮</Button>
    <Button type="info" round>按钮</Button>
    <h2>圆形按钮</h2>
    <Button circle>@</Button>
    <Button type="success" circle>+</Button>
    <Button type="warning" circle>-</Button>
    <Button type="danger" circle>!</Button>
    <Button type="info" circle>/</Button>
    <h2>禁用按钮</h2>
    <Button disabled>按钮</Button>
    <Button type="success" disabled>按钮</Button>
    <Button type="warning" disabled>按钮</Button>
    <Button type="danger" disabled>按钮</Button>
    <Button type="info" disabled>按钮</Button>
    <h2>按钮尺寸</h2>
    <Button type="success" size="small"></Button>
    <Button type="danger" size="default"></Button>
    <Button type="warning" size="large"></Button>
    <Button type="info" size="big"></Button>
    <h2>事件按钮</h2>
    <Button @click="clickHandler"></Button>
    <h2>自定义按钮样式</h2>
    <Button type="special" personStyle_1></Button>
    <Button type="special" personStyle_2 circle>+</Button>
    <Button type="special" personStyle_3 circle>+</Button>
    <Button type="special" personStyle_4></Button>
    <Button type="special" personStyle_5></Button>
  </div>
</template>

<script>
import Button from "../components/button";
export default {
  data() {
    return {
      colorList: "cor1=green&cor2=yellow"
    };
  },
  components: {
    Button
  },
  methods: {
    clickHandler(value) {
      console.log("父组件方法");
    }
  }
};
</script>

<style>
</style>