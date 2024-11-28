import { createApp } from 'vue'
import './style.css'
import "./scss/styles.scss"
import App from './App.vue'
import { allControls } from './index'

createApp(App)
    .use(allControls)
    .mount('#app')
