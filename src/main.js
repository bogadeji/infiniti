import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import filters from '@/filters'

import AppLayout from '@/layouts/AppLayout'

Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

Vue.use(filters)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
