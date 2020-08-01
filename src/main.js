import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
//关闭提示
Vue.config.productionTip = false
//插件区
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/display.css';
import './assets/index.css'





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
