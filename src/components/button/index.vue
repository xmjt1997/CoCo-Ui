<template>
  <button
    class="cz-btn"
    :class="[type?'cz-btn-'+type:'',
   round?'round':'',
   circle?'circle':'',
   disabled?'disabled':'',
   size?`cz-btn-size-${size}`:'default',
   personStyle_1?'personStyle_1':'',
   personStyle_2?'personStyle_2':'',
    personStyle_3?'personStyle_3':'',
       personStyle_4?'personStyle_4':'',
          personStyle_5?'personStyle_5':''
   ]"
    :style="styles"
    @click="handleClick"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
// "backgroundImage: linear-gradient(to right, red 0%, yellow 100%)";
import qs from "querystring";
export default {
  props: {
    type: {
      default: "default",
      type: String
    },
    round: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    circle: {
      type: Boolean
    },
    styles: {
      type: String
    },
    curom: {
      type: Object,
      default: () => {}
    },
    personStyle_1: {
      type: Boolean
    },
    personStyle_2: {
      type: Boolean
    },
    personStyle_3: {
      type: Boolean
    },
    personStyle_4: {
      type: Boolean
    },
    personStyle_5: {
      type: Boolean
    }
  },

  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleClick(evt) {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.cz-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

/*默认按钮的样式*/

.cz-btn-default:hover,
.cz-btn-default-default:focus {
  /*color: #409eff ;*/
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.cz-btn-default:active,
.cz-btn-default-default:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: 0;
}

/*警告按钮的样式*/
.cz-btn-warning,
.cz-btn-warning-default {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.cz-btn-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.cz-btn-warning:focus,
.cz-btn-warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.cz-btn-warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: 0;
}

/*成功按钮样式*/
.cz-btn-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.cz-btn-success:focus,
.cz-btn-success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}
.cz-btn-success-active,
.cz-btn-success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: 0;
}

/*危险按钮样式*/
.cz-btn-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.cz-btn-danger:focus,
.cz-btn-danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.cz-btn-danger-active,
.cz-btn-danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: 0;
}

/*提示按钮样式*/
.cz-btn-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.cz-btn-info:focus,
.cz-btn-info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.cz-btn-info-active,
.cz-btn-info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: 0;
}

/*圆角按钮样式*/
.round {
  border-radius: 20px;
  padding: 12px 23px;
}

/*圆形按钮样式*/
.circle {
  padding: 12px 15px;
  border-radius: 50%;
}

/*禁用按钮样式*/
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-image: none;
}
.disabled:hover {
  transform: scale(1) !important;
}

/*自定义按钮*/

.cz-btn-special:active,
.cz-btn-special:hover {
  transform: scale(1.1);
}

/*按钮大小样式*/
.cz-btn-size-default {
  font-size: 14px;
}
.cz-btn-size-small {
  padding: 8px 10px;
  font-size: 12px;
}
.cz-btn-size-large {
  padding: 10px 15px;
  font-size: 22px;
}
.cz-btn-size-big {
  padding: 10px 18px;
  font-size: 36px;
}

.personStyle_1 {
  background-image: linear-gradient(
    to top,
    #f3e7e9 0%,
    #e3eeff 99%,
    #e3eeff 100%
  );
}
.personStyle_2 {
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

  color: #fff;
}
.personStyle_3 {
  color: #ffffff;
  background-image: linear-gradient(
    to right,
    #dbdcd7 0%,
    #dddcd7 24%,
    #e2c9cc 30%,
    #e7627d 46%,
    #b8235a 59%,
    #801357 71%,
    #3d1635 84%,
    #1c1a27 100%
  );
}
.personStyle_4 {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  color: black;
}
.personStyle_5 {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color: #fff;
}
</style>