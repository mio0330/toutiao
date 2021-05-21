import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant组件库
import Vant from 'vant'
// 引入组件库样式
import 'vant/lib/index.css'
//  自动设置rem基准值(html标签字体大小)
import 'amfe-flexible'
// 引入全局样式
import './styles/index.less'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
