import BaseButton from "./components/BaseButton.vue";
import BasePageHeader from "./components/BasePageHeader.vue";
import BaseSectionHeader from "./components/BaseSectionHeader.vue";
import FeatherIcon from "./components/FeatherIcon.vue";
import BaseToast from "./components/BaseToast.vue";

import type { App } from 'vue'

// Install only the components that are safe for SSR
function safeControls(app: App) {
    app.component('BaseButton', BaseButton)
    app.component('BasePageHeader', BasePageHeader)
    app.component('BaseSectionHeader', BaseSectionHeader)
    app.component('FeatherIcon', FeatherIcon)
}

// Install safe components AND client-only components 
function allControls(app: App) {
    app.component('BaseToast', BaseToast)

    safeControls(app)
}

export { safeControls, allControls }
