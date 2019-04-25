import Vue from 'vue'
import * as svgicon from 'vue-svgicon'
import '@/assets/icon'
Vue.use(svgicon, { tagName: 'svgicon', width: 100, height: 100 })

import DIconLocal from '@/components/demo/d-icon-local'
Vue.component('DIconLocal', DIconLocal)
