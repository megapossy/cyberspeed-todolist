import '@ASSETS/styles/main.scss' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import FadeUp from "@CMPNTS/Base/transitions/fade-up.vue"
import GroupFadeRight from "@CMPNTS/Base/transitions/group-fade-right.vue"
import MyButton from "@CMPNTS/Base/my-button.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('FadeUp',FadeUp)
app.component('GroupFadeRight',GroupFadeRight)
app.component('MyButton',MyButton)

app.mount('#app')
