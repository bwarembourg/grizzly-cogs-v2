import App from './App.vue'
import './assets/tailwind.css'
import axios from 'axios'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import vWow from 'v-wow'
import router from './router'

const myApp = createApp(App)
myApp.use(VueAxios, axios)
myApp.use(vWow);
myApp.use(router)
myApp.mount('#app')