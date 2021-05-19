import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './route';

library.add(faQuestionCircle, faLongArrowAltLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
