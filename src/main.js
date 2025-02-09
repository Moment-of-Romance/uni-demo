import Vue from 'vue'
import App from './App'
import store from './store'
import './uni.promisify.adaptor'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  render: h => h(App)
})
app.$mount()
