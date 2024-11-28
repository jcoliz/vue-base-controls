import { createApp } from 'vue'
import './style.css'
import "./scss/styles.scss"
import App from './App.vue'
import controls from './index'

createApp(App)
    .use(controls)
    .mount('#app')
