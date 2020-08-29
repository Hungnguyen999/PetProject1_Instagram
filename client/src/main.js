import Vue from 'vue'

import App from './App.vue'
import router from './router.js'
import Axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/stores.js'
import VueSweetalert2 from 'vue-sweetalert2';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
//thêm vào nè
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.prototype.$http = Axios
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
