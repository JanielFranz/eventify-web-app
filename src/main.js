import './assets/main.css'
import { createApp } from 'vue'
import App from './app.vue'
import i18n from "@/i18n.js";
import router from "@/router/index.js";

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";

const app = createApp(App)

app.use(i18n)
app.use(router)

app.use(PrimeVue, { theme: { preset: Aura }, ripple: true })

app.component('pv-card', Card)
app.component('pv-input-text', InputText)
app.component('pv-float-label', FloatLabel)
app.component('pv-toolbar', Toolbar)
app.component('pv-avatar', Avatar)
app.component('pv-button', Button)
app.component('pv-select-button', SelectButton)
app.mount('#app')
