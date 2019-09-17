import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 全局配置对象。该对象目前支持 size 与 zIndex 字段。size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

//  阻止了生产模式，此时是以开发模式运行的
Vue.config.productionTip = false

new Vue({
  router, //  导入路由router
  store,  //  导入状态管理store
  render: h => h(App) //  createElement-创建App入口元素
}).$mount('#app') //  $mount来手动执行挂载#app
