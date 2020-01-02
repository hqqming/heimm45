import Vue from 'vue'
import App from './App.vue'
// 导入 vue-router
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
