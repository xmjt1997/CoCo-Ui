<template>
  <div>
    <h2>常规样式</h2>
    <cz-link>默认链接</cz-link>
    <cz-link type="primary">主要链接</cz-link>
    <cz-link type="success">成功链接</cz-link>
    <cz-link type="warning">警告链接</cz-link>
    <cz-link type="danger">危险链接</cz-link>
    <cz-link type="info">提醒链接</cz-link>
    <h2>禁用样式</h2>
    <cz-link disabled>默认链接</cz-link>
    <cz-link type="primary" disabled>主要链接</cz-link>
    <cz-link type="success" disabled>成功链接</cz-link>
    <cz-link type="warning" disabled>警告链接</cz-link>
    <cz-link type="danger" disabled>危险链接</cz-link>
    <cz-link type="info" disabled>提醒链接</cz-link>
    <h2>下划线样式</h2>
    <cz-link underline>默认链接</cz-link>
    <cz-link type="primary" underline>主要链接</cz-link>
    <cz-link type="success" underline>成功链接</cz-link>
    <cz-link type="warning" underline>警告链接</cz-link>
    <cz-link type="danger" underline>危险链接</cz-link>
    <cz-link type="info" underline>提醒链接</cz-link>
    <h2>跳转链接</h2>
    <cz-link href="http://www.baidu.com">百度链接</cz-link>
    <cz-link type="primary" href="http://www.taobao.com">淘宝链接</cz-link>
    <cz-link type="success" href="http://www.jingdon.com">京东链接</cz-link>
    <cz-link type="warning" href="http://www.QQ.com">腾讯链接</cz-link>
    <cz-link type="danger" href="http://www.360.com">360链接</cz-link>
    <cz-link type="info" href="http://www.tianmao.com">天猫链接</cz-link>
  </div>
</template>

<script>
import CzLink from "../components/link/index";
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {
    CzLink
  }
};
</script>

<style>
</style>