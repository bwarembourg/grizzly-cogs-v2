import App from './App.vue'
import './assets/tailwind.css'
import axios from 'axios'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'

const myApp = createApp(App)
myApp.use(VueAxios, axios)
myApp.mount('#app')