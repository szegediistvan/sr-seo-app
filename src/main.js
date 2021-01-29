import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import FormRow from './components/form/FormRow'
import FormGroup from './components/form/FormGroup'

Vue.config.productionTip = false
Vue.component('FormRow', FormRow)
Vue.component('FormGroup', FormGroup)

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
