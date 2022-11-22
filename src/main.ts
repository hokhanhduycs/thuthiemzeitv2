import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "./svg"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faExpand, faArrowsSpin, faStreetView } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faMagnifyingGlassMinus, faMagnifyingGlassPlus, faExpand, faArrowsSpin, faStreetView)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
