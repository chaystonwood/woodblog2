import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  posts: mock,
  editorPicks: [mock[5], mock[10], mock[15]]
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
