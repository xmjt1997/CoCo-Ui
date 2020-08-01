<template>
  <div>
    <h2>默认计数器</h2>
    <cz-iptnum></cz-iptnum>
    <h2>负数计数器</h2>
    <cz-iptnum :min="-2" :count="2"></cz-iptnum>
    <h2>条件计数器</h2>
    <cz-iptnum :count="2"></cz-iptnum>
    <h2>尺寸</h2>
    <cz-iptnum size="small"></cz-iptnum>
    <cz-iptnum size="default"></cz-iptnum>
    <cz-iptnum size="large"></cz-iptnum>
    <cz-iptnum size="big"></cz-iptnum>

    <h2>自定义样式</h2>
    <cz-iptnum disabled></cz-iptnum>
  </div>
</template>

<script>
import CzIptnum from "../components/inputNumber/index.vue";
export default {
  components: {
    CzIptnum
  }
};
</script>

<style>
</style>