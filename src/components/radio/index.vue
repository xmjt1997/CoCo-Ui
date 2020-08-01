<template>
  <div>
    <span>
      <i>选项1</i>
      <input type="radio" value="选项1" name="name" v-model="msg" :disabled="disabled" />
    </span>
    <span>
      <i>选项2</i>
      <input type="radio" value="选项2" name="name" v-model="msg" :disabled="disabled" />
    </span>
    <p>选择结果:{{msg}}</p>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style>
</style>