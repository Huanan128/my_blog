import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import less from 'less'
// Vue.use(less)
//引入全局样式
import '@style/global.less'

import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
