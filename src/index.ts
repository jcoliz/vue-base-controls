import BaseButton from "./components/BaseButton.vue";
import BasePageHeader from "./components/BasePageHeader.vue";
import BaseSectionHeader from "./components/BaseSectionHeader.vue";
import FeatherIcon from "./components/FeatherIcon.vue";
import BaseToast from "./components/BaseToast.vue";
import BaseDropDown from "./components/BaseDropDown.vue";

import type { App } from 'vue'

function install(app: App) {
    app.component('BaseButton', BaseButton)
    app.component('BasePageHeader', BasePageHeader)
    app.component('BaseSectionHeader', BaseSectionHeader)
    app.component('FeatherIcon', FeatherIcon)
    app.component('BaseToast', BaseToast)
    app.component('BaseDropDown', BaseDropDown)
}

export { install as default }
