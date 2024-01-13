import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@ASSETS/styles/main.scss' 

import FadeUp from "@CMPNTS/Base/transitions/fade-up.vue"
import GroupFadeRight from "@CMPNTS/Base/transitions/group-fade-right.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FadeUp',FadeUp)
app.component('GroupFadeRight',GroupFadeRight)

app.mount('#app')
