<template>
  <div>
    <h1>单选框</h1>
    <cz-radio></cz-radio>
    <h1>单选框组</h1>

    <cz-radiogrp></cz-radiogrp>
    <h1>单选框禁用</h1>
    <cz-radio disabled></cz-radio>
    <h1>单选框样式</h1>
    <cz-radiogrp style_1></cz-radiogrp>
    <cz-radiogrp style_2></cz-radiogrp>
    <cz-radiogrp style_3></cz-radiogrp>
    <cz-radiogrp style_4></cz-radiogrp>
  </div>
</template>


<script>
import CzRadio from "../components/radio/index";
import CzRadiogrp from "../components/radio/index-group";

export default {
  components: {
    CzRadio,
    CzRadiogrp
  }
};
</script>

<style>
</style>