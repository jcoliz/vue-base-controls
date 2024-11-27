import { createApp } from 'vue'
import './style.css'
import "./scss/styles.scss"
import App from './App.vue'
import * as controls from './index'

const app = createApp(App)
controls.install(app)
app.mount('#app')
