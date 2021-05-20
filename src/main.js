import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle, faLongArrowAltLeft, faCircle, faEllipsisH, faCaretRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './route';
import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faQuestionCircle, faLongArrowAltLeft, faCaretRight, faCircle, faEllipsisH, faPlusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter, VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
