import Vue from 'vue'
import App from './App.vue'
import Dokoo from '@dokoo/vue'

Vue.config.productionTip = false
Vue.use(Dokoo({
  clients: {
    cms: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiZTE0MGNjOTEtZTkxMi00MjlkLTlmOWMtNTE3YjEwZjlkNGRlIiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsInNwYWNlX2lkIjoiOGU0NTg5MjMtNjRjOC00MDJlLWE2YTUtNDhiMWJlNDY3N2ZmIiwiaWF0IjoxNjQ1MDQzMTEwfQ.f7LVoyInTldO8ajSSx3zvNsZn7YPfoTBXmlQW3hQzCU'
    }
  }
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
