import Vue from 'vue'
import App from './App.vue'
import Dokoo from '@dokoo/vue'

Vue.config.productionTip = false
Vue.use(Dokoo({
  clients: {
    cms: {
      spaceId: '8e458923-64c8-402e-a6a5-48b1be4677ff',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiZWNjZDNlZmItYWE5MC00MTFmLWE4OTEtYmE3MjkxNWJhZmY4Iiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsImlhdCI6MTYzMTYyOTkxNX0.lkeyrQ6CCj5Tl_rBhovKLsm2o-9z_WEPp_ITA078_P8'
    }
  }
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
