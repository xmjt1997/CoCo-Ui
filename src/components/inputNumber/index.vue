<template>
  <div class="cz-iptnum" :class="[`size-${size}`]">
    <span ref="left" class="cz-iptnum-left" @click="clickDown">-</span>
    <input ref="main" class="cz-ipt" type="text" v-model="value" />
    <span class="cz-iptnum-right" @click="clickAdd">+</span>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    },
    count: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      value: 1
    };
  },

  mounted() {},
  methods: {
    clickDown() {
      if (this.min && this.value - this.count > this.min) {
        this.value -= this.count;
      } else {
        this.value > this.min && this.value--;
      }
    },
    clickAdd() {
      if (!this.max) {
        console.log("aa");
        this.value += this.count;
      } else {
        this.value < this.max && this.value++;
      }
    }
  }
};
</script>

<style  scoped>
/* 盒子 */
.cz-iptnum {
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin: 20px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 7px;

  display: flex;
  flex-direction: row;
}
/* 左侧 */
.cz-iptnum-left {
  text-align: center;
  font-size: 20px;
  display: inline-block;
  background-color: #f5f7fa;
  border-radius: 5px 0 0 5px;
  flex: 1;
  cursor: pointer;
  user-select: none;
}
/* 右侧 */
.cz-iptnum-right {
  text-align: center;
  display: inline-block;
  background-color: #f5f7fa;
  border-radius: 0 5px 5px 0;
  flex: 1;
  cursor: pointer;
  user-select: none;
}
/* 输入框 */
.cz-ipt {
  border: none;
  width: 45%;
  text-align: center;
  outline: #dcdfe6;
}
.disabled {
  cursor: not-allowed;
}

.size-small {
  width: 100px;
  height: 30px;
  line-height: 30px;
}
.size-large {
  width: 150px;
  height: 40px;
  line-height: 40px;
}
.size-big {
  width: 200px;
  height: 40px;
  line-height: 40px;
}
</style>
