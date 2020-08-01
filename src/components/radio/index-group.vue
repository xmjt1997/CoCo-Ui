<template>
  <div class="cz-radio-box">
    <span
      :class="[style_1?`radio-style_1`:'', style_2?`radio-style_2`:'',style_3?`radio-style_3`:'',style_4?`radio-style_4`:'' ]"
    >
      <i>北京</i>
      <input type="radio" value="北京" name="name" v-model="msg" :disabled="disabled" />
    </span>
    <span
      :class="[style_1?`radio-style_1`:'',style_2?`radio-style_2`:'',style_3?`radio-style_3`:'',style_4?`radio-style_4`:'']"
    >
      <i>上海</i>
      <input class="index" type="radio" value="上海" name="name" v-model="msg" :disabled="disabled" />
    </span>
    <span
      :class="[style_1?`radio-style_1`:'',style_2?`radio-style_2`:'',style_3?`radio-style_3`:'',style_4?`radio-style_4`:'']"
    >
      <i>广州</i>
      <input type="radio" value="广州" name="name" v-model="msg" :disabled="disabled" />
    </span>
    <span
      :class="[style_1?`radio-style_1`:'',style_2?`radio-style_2`:'',style_3?`radio-style_3`:'',style_4?`radio-style_4`:'']"
    >
      <i>深圳</i>
      <input type="radio" value="深圳" name="name" v-model="msg" :disabled="disabled" />
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
    },
    style_1: {
      type: Boolean,
      default: false
    },
    style_2: {
      type: Boolean,
      default: false
    },
    style_3: {
      type: Boolean,
      default: false
    },
    style_4: {
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

<style scoped>
.cz-radio-box {
  display: flex;
  align-items: center;
}

[class|="radio"] {
  cursor: pointer;
  display: flex;
  border: 1px solid black;
  width: 60px;
  line-height: 25px;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #dcdfe6;
  padding: 5px 8px 5px 8px;
  border-radius: 5px;
}

.radio-style_1 {
  background-color: #fad0c4;
  color: #ffffff;
}
.radio-style_2 {
  background-color: #8fd3f4;
  color: #ffffff;
}
.radio-style_3 {
  background-color: #330867;
  color: #ffffff;
}
.radio-style_4 {
  background-color: #5ee7df;
  color: #ffffff;
}

.index {
  background-color: red;
}
</style>

