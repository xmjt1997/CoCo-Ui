<template>
  <a
    class="cz-link"
    :class="[type?`cz-link-${type}`:'',
    disabled?`${type}-disabled`:'',
    underline?`${type}-underline`:''
  ]"
    :href="href"
  >
    <slot>默认</slot>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      default: "default",
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
/*默认样式*/
.cz-link {
  text-decoration: none;
  color: #545454;
  cursor: pointer;
}
.cz-link:hover {
  color: #3a8ee6;
}

.default-disabled {
  cursor: not-allowed;
}
.default-disabled:hover {
  color: #545454;
}
.default-underline:hover {
  border-bottom: 1px solid #3a8ee6;
}
/*提醒样式*/
.cz-link-info {
  color: #cccccc;
}
.cz-link-info:hover {
  color: #606266;
}
.info-disabled {
  cursor: not-allowed;
}
.info-disabled:hover {
  color: #cccccc;
}
.info-underline:hover {
  border-bottom: 1px solid #606266;
}

/*主要样式*/
.cz-link-primary {
  color: #90e16d;
}
.cz-link-primary:hover {
  color: #5daf34;
}
.primary-disabled {
  cursor: not-allowed;
}
.primary-disabled:hover {
  color: #90e16d;
}
.primary-underline:hover {
  border-bottom: 1px solid #5daf34;
}

/*成功样式*/
.cz-link-success {
  color: #c6e2ff;
}
.cz-link-success:hover {
  color: #3a8ee6;
}
.success-disabled {
  cursor: not-allowed;
}
.success-disabled:hover {
  color: #c6e2ff;
}
.success-underline:hover {
  border-bottom: 1px solid #3a8ee6;
}

/*危险样式*/
.cz-link-danger {
  color: #ff8888;
}
.cz-link-danger:hover {
  color: #dd6161;
}
.danger-disabled {
  cursor: not-allowed;
}
.danger-disabled:hover {
  color: #ff8888;
}
.danger-underline:hover {
  border-bottom: 1px solid #dd6161;
}

/*警告样式*/
.cz-link-warning {
  color: #ffb770;
}
.cz-link-warning:hover {
  color: #cf9236;
}
.warning-disabled {
  cursor: not-allowed;
}
.warning-disabled:hover {
  color: #ffb770;
}
.warning-underline:hover {
  border-bottom: 1px solid #cf9236;
}
</style>