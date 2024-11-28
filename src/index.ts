import BaseButton from "./components/BaseButton.vue";
import type { App } from 'vue'
function install(app: App) {
    app.component('BaseButton', BaseButton)
}
export { BaseButton, install as default }
